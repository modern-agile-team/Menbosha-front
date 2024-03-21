import { IncomingMessage, ServerResponse } from 'http';

export function middleware(req: IncomingMessage, res: ServerResponse) {
  const host = req.headers.host;
  if (host) {
    const isWWW = host.startsWith('www.');
    if (isWWW) {
      // Remove www. prefix
      const newHost = host.replace(/^www\./, '');

      // Redirect to the new host without www.
      res.writeHead(301, { Location: `https://${newHost}${req.url}` });
      res.end();
      return;
    }
  }
}

export const config = {
  matcher: [
    /*
     * 아래와 같이 시작하는 것들을 제외한 모두 경로를 매치합니다:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
