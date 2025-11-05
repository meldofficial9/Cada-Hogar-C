import '../globals.css';
import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {getMessages, getLocale} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'CadaHogar Cuba',
  description: 'Each home matters.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <main className="max-w-5xl mx-auto p-6">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
