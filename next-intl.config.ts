import {defineRouting} from 'next-intl/routing';

export default defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {en: '/about', es: '/about'},
    '/contact': {en: '/contact', es: '/contact'},
    '/mission': {en: '/mission', es: '/mission'},
    '/resources': {en: '/resources', es: '/resources'},
    '/get-involved': {en: '/get-involved', es: '/get-involved'},
    '/admin': '/admin',
    '/GoCuba': {en: '/GoCuba', es: '/GoCuba'},
    '/give': {en: '/give', es: '/give'}
  }
});
