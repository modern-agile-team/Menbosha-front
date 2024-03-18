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
