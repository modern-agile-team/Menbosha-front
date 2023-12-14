export const initMSW = async () => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      (async () => {
        const { server } = await import('../mocks/node');
        server.listen({ onUnhandledRequest: 'bypass' });
      })();
    } else {
      (async () => {
        const { worker } = await import('../mocks/browser');
        worker.start({ onUnhandledRequest: 'bypass' });
      })();
    }
  }
};
