// app/[locale]/page.tsx
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  // Uses the locale detected by next-intl middleware
  const t = await getTranslations();

  return (
    <section className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">{t('hero.headline')}</h1>
      <p className="opacity-80">{t('hero.sub')}</p>

      <nav className="flex gap-4 pt-2">
        {/* These keep you on the same route but switch the locale */}
        <Link href="/" locale="en" className="underline">EN</Link>
        <Link href="/" locale="es" className="underline">ES</Link>
      </nav>
    </section>
  );
}
