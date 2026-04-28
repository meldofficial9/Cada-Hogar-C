import Link from 'next/link';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

export default function GetInvolvedPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    label: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    heroTitle:
      locale === 'es'
        ? 'Sé parte de llevar luz, esperanza y el evangelio a más hogares.'
        : 'Be part of bringing light, hope, and the gospel into more homes.',
    heroText:
      locale === 'es'
        ? 'Puedes participar por medio de oración, compartiendo recursos, asistiendo a eventos, apoyando GoCuba y conectando a otros con la misión.'
        : 'You can participate through prayer, sharing resources, joining events, supporting GoCuba, and connecting others with the mission.',

    ways: locale === 'es' ? 'Formas de participar' : 'Ways to participate',
    practical:
      locale === 'es'
        ? 'Involúcrate de una manera práctica'
        : 'Get involved in a practical way',
    practicalText:
      locale === 'es'
        ? 'Cada persona puede ser parte de la misión. Comienza con un paso: ora, comparte, sirve, dona o invita a alguien más.'
        : 'Every person can play a part in the mission. Start with one step: pray, share, serve, give, or invite someone else.',

    pray: locale === 'es' ? 'Orar' : 'Pray',
    prayText:
      locale === 'es'
        ? 'Comprométete a orar por hogares, líderes, territorios, familias y próximas oportunidades ministeriales.'
        : 'Commit to praying for homes, leaders, territories, families, and upcoming ministry opportunities.',

    share: locale === 'es' ? 'Compartir' : 'Share',
    shareText:
      locale === 'es'
        ? 'Comparte recursos del ministerio, actualizaciones, testimonios e invitaciones con tu iglesia, familia y comunidad.'
        : 'Share ministry resources, updates, testimonies, and invitations with your church, family, and community.',

    serve: locale === 'es' ? 'Servir' : 'Serve',
    serveText:
      locale === 'es'
        ? 'Conéctate con oportunidades para apoyar alcance, eventos, reuniones de oración y esfuerzos ministeriales locales.'
        : 'Get connected with opportunities to support outreach, events, prayer gatherings, and local ministry efforts.',

    prayerLabel: locale === 'es' ? 'Oración' : 'Prayer',
    joinPrayer:
      locale === 'es' ? 'Únete a nosotros en oración' : 'Join us in prayer',
    joinPrayerText:
      locale === 'es'
        ? 'La oración está en el centro de la misión. Ora por puertas abiertas, líderes fuertes, hogares transformados y por el mensaje de Jesús llegando a más personas.'
        : 'Prayer is at the center of the mission. Pray for open doors, strong leaders, transformed homes, and the message of Jesus to reach more people.',
    viewEvents:
      locale === 'es' ? 'Ver eventos de GoCuba' : 'View GoCuba Events',

    resources: locale === 'es' ? 'Recursos' : 'Resources',
    downloadShare:
      locale === 'es'
        ? 'Descarga y comparte recursos'
        : 'Download and share resources',
    downloadShareText:
      locale === 'es'
        ? 'Accede a materiales gratuitos que pueden usarse para oración, alcance, enseñanza, ánimo y conexión comunitaria.'
        : 'Access free downloadable materials that can be used for prayer, outreach, teaching, encouragement, and community connection.',
    viewResources: locale === 'es' ? 'Ver recursos' : 'View Resources',

    connectGoCuba:
      locale === 'es'
        ? 'Conéctate con la iniciativa GoCuba'
        : 'Connect with the GoCuba initiative',
    goCubaText:
      locale === 'es'
        ? 'GoCuba es un esfuerzo enfocado conectado con la misión, destacando territorios, eventos, oración y oportunidades para participar.'
        : 'GoCuba is a focused effort connected to the mission, highlighting territories, events, prayer, and opportunities to participate.',
    prayParticipate:
      locale === 'es'
        ? 'Ora, participa y mantente conectado.'
        : 'Pray, participate, and stay connected.',
    goCubaDescription:
      locale === 'es'
        ? 'Visita la página de GoCuba para ver el mapa, los territorios y el calendario de próximos eventos.'
        : 'Visit the GoCuba landing page to see the map, territories, and upcoming calendar of events.',
    goToGoCuba: locale === 'es' ? 'Ir a GoCuba' : 'Go to GoCuba',

    nextSteps: locale === 'es' ? 'Próximos pasos' : 'Next steps',
    choose:
      locale === 'es'
        ? 'Elige cómo quieres involucrarte'
        : 'Choose how you want to get involved',
    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact us',
    contactText:
      locale === 'es'
        ? 'Haz preguntas, solicita información o conéctate con el ministerio.'
        : 'Ask questions, request information, or connect with the ministry.',
    give: locale === 'es' ? 'Donar' : 'Give',
    giveText:
      locale === 'es'
        ? 'Apoya la obra por medio de generosidad y colaboración.'
        : 'Support the work through generosity and partnership.',
    shareResources:
      locale === 'es' ? 'Compartir recursos' : 'Share resources',
    shareResourcesText:
      locale === 'es'
        ? 'Descarga, comparte y usa materiales ministeriales con otros.'
        : 'Download, share, and use ministry materials with others.',

    joinMission: locale === 'es' ? 'Únete a la misión' : 'Join the mission',
    finalTitle:
      locale === 'es'
        ? 'Tu participación puede ayudar a llevar luz a más hogares.'
        : 'Your participation can help bring light to more homes.',
    finalText:
      locale === 'es'
        ? 'Ora con nosotros, comparte la misión, conéctate con eventos y ayuda a fortalecer familias y comunidades.'
        : 'Pray with us, share the mission, connect with events, and help strengthen families and communities.'
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
                href="/en/get-involved"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/get-involved"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                ES
              </Link>
            </div>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            {copy.label}
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
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.ways}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.practical}
            </h2>
            <p className="text-lg text-gray-700">{copy.practicalText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.pray}</h3>
              <p className="text-gray-800">{copy.prayText}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.share}</h3>
              <p className="text-white/85">{copy.shareText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.serve}</h3>
              <p className="text-white/85">{copy.serveText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.prayerLabel}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.joinPrayer}</h2>
            <p className="mb-6 text-lg text-gray-700">{copy.joinPrayerText}</p>
            <Link
              href={`/${locale}/GoCuba`}
              className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.viewEvents}
            </Link>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.resources}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.downloadShare}</h2>
            <p className="mb-6 text-lg text-gray-700">
              {copy.downloadShareText}
            </p>
            <Link
              href={`/${locale}/resources`}
              className="inline-block rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              {copy.viewResources}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              GoCuba
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.connectGoCuba}
            </h2>
            <p className="text-lg text-gray-700">{copy.goCubaText}</p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#1f1f1f] text-white shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="p-8 md:p-12">
                <div className="mb-6 inline-flex rounded-3xl bg-white p-4">
                  <Image
                    src="/logos/GOCUBA.png"
                    alt="GoCuba logo"
                    width={240}
                    height={110}
                    className="h-20 w-auto object-contain"
                  />
                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  {copy.prayParticipate}
                </h3>
                <p className="mb-6 text-white/80">{copy.goCubaDescription}</p>

                <Link
                  href={`/${locale}/GoCuba`}
                  className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
                >
                  {copy.goToGoCuba}
                </Link>
              </div>

              <div className="min-h-[320px] bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.nextSteps}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.choose}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href={`/${locale}/contact`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">{copy.contactUs}</h3>
              <p className="text-gray-700">{copy.contactText}</p>
            </Link>

            <Link
              href={`/${locale}/give`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">{copy.give}</h3>
              <p className="text-gray-700">{copy.giveText}</p>
            </Link>

            <Link
              href={`/${locale}/resources`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                {copy.shareResources}
              </h3>
              <p className="text-gray-700">{copy.shareResourcesText}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            {copy.joinMission}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.finalTitle}
          </h2>
          <p className="mb-8 text-lg text-white/80">{copy.finalText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              {copy.contactUs}
            </Link>
            <Link
              href={`/${locale}/give`}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              {copy.give}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
