import createMiddleware from 'next-intl/middleware';
import routing from './next-intl.config';

export default createMiddleware(routing);

export const config = {
  // Run on all paths except Next internals and static files
  matcher: [
    '/((?!_next|.*\\..*|api).*)'
  ]
};
