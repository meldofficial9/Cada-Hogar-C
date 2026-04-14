import {getTranslations, setRequestLocale} from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  return (
    <main style={{padding: '40px', background: 'white', color: 'black'}}>
      <h1>{t('hero.headline')}</h1>
      <p>{t('hero.sub')}</p>

      <div style={{marginTop: '20px', display: 'flex', gap: '12px'}}>
        <Link href="/en">EN</Link>
        <Link href="/es">ES</Link>
      </div>
    </main>
  );
}
