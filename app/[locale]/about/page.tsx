import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

export default function AboutPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const t = useTranslations('About');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
