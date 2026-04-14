import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

export default function HomePage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}
