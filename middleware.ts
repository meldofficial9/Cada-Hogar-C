import createMiddleware from 'next-intl/middleware';
import {routing} from './next-intl.config';

export default createMiddleware(routing);

// Match the root and any localized path
export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
