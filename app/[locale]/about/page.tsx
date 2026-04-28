import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function AboutPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    navHome: locale === 'es' ? 'Inicio' : 'Home',
    about: locale === 'es' ? 'Acerca del ministerio' : 'About the Ministry',
    heroTitle:
      locale === 'es'
        ? 'La Hora de la Luz existe para llevar la luz de Cristo a cada hogar.'
        : 'La Hora de la Luz exists to bring the light of Christ into every home.',
    heroText:
      locale === 'es'
        ? 'Somos un ministerio enfocado en la oración, el alcance evangelístico, el discipulado, la conexión comunitaria y el fortalecimiento de los hogares por medio del mensaje de Jesús.'
        : 'We are a ministry focused on prayer, gospel outreach, discipleship, community connection, and the strengthening of homes through the message of Jesus.',

    whoWeAre: locale === 'es' ? 'Quiénes somos' : 'Who We Are',
    whoTitle: locale === 'es' ? '¿Quiénes somos?' : 'Who we are',
    whoText:
      locale === 'es'
        ? 'La Hora de la Luz es un ministerio centrado en Cristo, comprometido con alcanzar familias, animar creyentes y crear espacios donde el evangelio pueda ser compartido con claridad, compasión y propósito.'
        : 'La Hora de la Luz is a Christ-centered ministry committed to reaching families, encouraging believers, and creating spaces where the gospel can be shared with clarity, compassion, and purpose.',

    identity: locale === 'es' ? 'Nuestra identidad' : 'Our Identity',
    identityTitle:
      locale === 'es' ? 'Una marca con propósito' : 'A brand with purpose',
    identityText:
      locale === 'es'
        ? 'Nuestra identidad visual usa la imagen de la luz como recordatorio de esperanza, dirección y del llamado a reflejar a Cristo en hogares y comunidades.'
        : 'Our visual identity uses the image of light as a reminder of hope, guidance, and the calling to reflect Christ in homes and communities.',

    visionMission:
      locale === 'es' ? 'Visión y misión' : 'Vision & Mission',
    visionTitle:
      locale === 'es'
        ? 'Un ministerio construido alrededor de la luz, los hogares y la transformación'
        : 'A ministry built around light, homes, and transformation',
    visionText:
      locale === 'es'
        ? 'Nuestro corazón es ver cada hogar tocado por el evangelio y cada creyente equipado para compartir el amor de Jesús.'
        : 'Our heart is to see every home touched by the gospel and every believer equipped to share the love of Jesus.',

    light: locale === 'es' ? 'Luz' : 'Light',
    lightText:
      locale === 'es'
        ? 'Creemos que Cristo trae luz a la oscuridad y esperanza a cada hogar.'
        : 'We believe Christ brings light into darkness and hope into every home.',
    home: locale === 'es' ? 'Hogar' : 'Home',
    homeText:
      locale === 'es'
        ? 'Nos enfocamos en familias, hogares y espacios comunitarios donde la fe puede crecer.'
        : 'We focus on families, households, and community spaces where faith can grow.',
    mission: locale === 'es' ? 'Misión' : 'Mission',
    missionText:
      locale === 'es'
        ? 'Movilizamos oración, recursos, líderes y creyentes para el alcance del evangelio.'
        : 'We mobilize prayer, resources, leaders, and believers for gospel outreach.',

    visualSystem:
      locale === 'es' ? 'Sistema visual' : 'Visual System',
    visualTitle:
      locale === 'es'
        ? 'Un lenguaje visual diseñado para comunicar esperanza'
        : 'A visual language designed to communicate hope',
    visualText1:
      locale === 'es'
        ? 'La guía de marca del ministerio incluye una base cálida color crema, contraste fuerte, acentos rojos y azules, y recursos visuales diseñados para carteles, redes sociales, banners y comunicación ministerial.'
        : 'The ministry’s brand guide includes a warm cream base, strong contrast, red and blue accents, and visual resources designed for posters, social media, banners, and ministry communication.',
    visualText2:
      locale === 'es'
        ? 'Este sistema visual ayuda a La Hora de la Luz a mantenerse consistente, reconocible y claro en materiales digitales e impresos.'
        : 'This visual system helps La Hora de la Luz stay consistent, recognizable, and clear across digital and printed materials.',
    boldMessage: locale === 'es' ? 'Mensaje claro' : 'Bold Message',
    warmIdentity: locale === 'es' ? 'Identidad cálida' : 'Warm Identity',
    digitalResources: locale === 'es' ? 'Recursos digitales' : 'Digital Resources',

    values: locale === 'es' ? 'Lo que valoramos' : 'What We Value',
    valuesTitle:
      locale === 'es'
        ? 'Valores que guían el ministerio'
        : 'Values that guide the ministry',
    prayer: locale === 'es' ? 'Oración' : 'Prayer',
    gospel: locale === 'es' ? 'Evangelio' : 'Gospel',
    community: locale === 'es' ? 'Comunidad' : 'Community',
    faithfulness: locale === 'es' ? 'Fidelidad' : 'Faithfulness',

    join: locale === 'es' ? 'Únete' : 'Join Us',
    joinTitle:
      locale === 'es'
        ? 'Sé parte de llevar luz a más hogares.'
        : 'Be part of bringing light to more homes.',
    joinText:
      locale === 'es'
        ? 'Conéctate con el ministerio, ora con nosotros, accede a recursos y apoya la obra que está sucediendo por medio de La Hora de la Luz.'
        : 'Connect with the ministry, pray with us, access resources, and support the work happening through La Hora de la Luz.',
    viewResources: locale === 'es' ? 'Ver recursos' : 'View Resources',
    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us'
  };

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      <section className="bg-[#1f1f1f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="inline-flex rounded-3xl bg-white p-5">
              <Link href={`/${locale}`} className="inline-flex">
                <Image
                  src="/logos/lahoradelaluz.png"
                  alt="La Hora de la Luz logo"
                  width={360}
                  height={160}
                  className="h-24 w-auto object-contain transition hover:scale-105 md:h-28"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/en/about"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/about"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                ES
              </Link>
            </div>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            {copy.about}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {copy.heroTitle}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            {copy.heroText}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.whoWeAre}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.whoTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.whoText}
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.identity}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.identityTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.identityText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.visionMission}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.visionTitle}
            </h2>
            <p className="text-lg text-gray-600">{copy.visionText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.light}</h3>
              <p className="text-gray-800">{copy.lightText}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.home}</h3>
              <p className="text-white/85">{copy.homeText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.mission}</h3>
              <p className="text-white/85">{copy.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.visualSystem}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {copy.visualTitle}
            </h2>
            <p className="mb-4 text-lg text-gray-700">{copy.visualText1}</p>
            <p className="text-gray-700">{copy.visualText2}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">{copy.boldMessage}</h3>
              </div>
              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">{copy.warmIdentity}</h3>
              </div>
              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">{copy.digitalResources}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              {copy.values}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.valuesTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[copy.prayer, copy.gospel, copy.community, copy.faithfulness].map(
              (value) => (
                <div
                  key={value}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
                >
                  <h3 className="text-2xl font-semibold">{value}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            {copy.join}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.joinTitle}
          </h2>
          <p className="mb-8 text-lg text-gray-600">{copy.joinText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/resources`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.viewResources}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              {copy.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
