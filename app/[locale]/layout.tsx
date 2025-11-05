import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Cada Hogar Cuba',
  description: 'GoCuba'
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
