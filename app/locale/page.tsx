'use client';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{t('hero.headline')}</h1>
      <p className="opacity-80">{t('hero.sub')}</p>
      <nav className="flex gap-4 pt-2">
        <Link className="underline" href="/en">EN</Link>
        <Link className="underline" href="/es">ES</Link>
      </nav>
    </section>
  );
}
