export const initMSW = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('../mocks/node');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('../mocks/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};
