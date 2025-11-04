import createMiddleware from 'next-intl/middleware';
import routing from './next-intl.config';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\.(?:png|jpg|jpeg|gif|webp|svg)).*)'
  ]
};
