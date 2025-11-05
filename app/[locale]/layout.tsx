// app/[locale]/layout.tsx
import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale as setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Cada Hogar Cuba',
  description: 'Building a community with purpose'
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: ReactNode;
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
