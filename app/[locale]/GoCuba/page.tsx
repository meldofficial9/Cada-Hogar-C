import Image from 'next/image';
import Link from 'next/link';
import {createClient} from '@supabase/supabase-js';
import {setRequestLocale} from 'next-intl/server';

export const dynamic = 'force-dynamic';

type EventItem = {
  id: string;
  title: string;
  event_date: string;
  event_time: string | null;
  location: string | null;
  description: string | null;
};

export default async function GoCubaPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    supportGoCuba: locale === 'es' ? 'Apoyar GoCuba' : 'Support GoCuba',
    heroTitle:
      locale === 'es'
        ? 'Alcanzando Cuba por medio de oración, presencia y movimiento del evangelio'
        : 'Reaching Cuba through prayer, presence, and gospel movement',
    heroText:
      locale === 'es'
        ? 'GoCuba existe para movilizar oración, presencia, alcance y conexión con comunidades en Cuba.'
        : 'GoCuba exists to mobilize prayer, presence, outreach, and connection with communities in Cuba.',
    getInvolved: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    supportMission: locale === 'es' ? 'Apoyar GoCuba' : 'Support GoCuba',

    missionLabel: locale === 'es' ? 'La misión' : 'The Mission',
    introTitle:
      locale === 'es'
        ? 'Una iniciativa independiente enfocada en el alcance en Cuba'
        : 'An independent initiative focused on outreach across Cuba',
    introText:
      locale === 'es'
        ? 'GoCuba muestra territorios alcanzados, movimiento ministerial y próximas oportunidades para orar, conectarse y participar.'
        : 'GoCuba highlights reached territories, ministry momentum, and upcoming opportunities to pray, connect, and participate.',

    territoriesLabel: locale === 'es' ? 'Territorios' : 'Territories',
    territoriesTitle:
      locale === 'es'
        ? 'Lugares donde GoCuba ha llegado'
        : 'Places GoCuba has reached',
    territoriesText:
      locale === 'es'
        ? 'Esta sección muestra territorios donde ha habido presencia, oración y alcance local.'
        : 'This section highlights territories where there has been presence, prayer, and local outreach.',
    mapTitle: locale === 'es' ? 'Mapa de Cuba' : 'Map of Cuba',
    mapText:
      locale === 'es'
        ? 'Territorios actuales donde GoCuba está activo o creciendo.'
        : 'Current territories where GoCuba is active or growing.',
    active: locale === 'es' ? 'Activo' : 'Active',

    havanaText:
      locale === 'es'
        ? 'Presencia continua a través de alcance, oración y esfuerzos de discipulado.'
        : 'Ongoing presence through outreach, prayer, and discipleship efforts.',
    baracoaText:
      locale === 'es'
        ? 'Trabajo enfocado en fortalecer hogares, evangelismo y conexión con creyentes locales.'
        : 'Work focused on strengthening homes, evangelism, and connection with local believers.',
    villaClaraText:
      locale === 'es'
        ? 'Oportunidades crecientes para el alcance del evangelio, apoyo en oración y presencia comunitaria.'
        : 'Expanding opportunities for gospel engagement, prayer support, and community presence.',
    artemisaText:
      locale === 'es'
        ? 'Territorio alcanzado por medio de oración, conexión local y alcance.'
        : 'A territory reached through prayer, local connection, and outreach.',
    matanzasText:
      locale === 'es'
        ? 'Territorio donde GoCuba continúa construyendo relaciones y compartiendo esperanza.'
        : 'A territory where GoCuba continues building relationships and sharing hope.',
    sanctiText:
      locale === 'es'
        ? 'Territorio conectado con la visión de alcanzar hogares y comunidades con el evangelio.'
        : 'A territory connected to the vision of reaching homes and communities with the gospel.',

    eventsLabel: locale === 'es' ? 'Calendario de eventos' : 'Events Calendar',
    eventsTitle:
      locale === 'es'
        ? 'Próximos eventos de GoCuba'
        : 'Upcoming GoCuba events',
    eventsText:
      locale === 'es'
        ? 'Mantente actualizado sobre reuniones, noches de oración, eventos de visión y oportunidades para conectarte.'
        : 'Stay updated on gatherings, prayer nights, vision events, and opportunities to connect.',
    couldNotLoad:
      locale === 'es'
        ? 'No se pudieron cargar los eventos en este momento.'
        : 'Could not load events right now.',
    noEvents:
      locale === 'es'
        ? 'Todavía no hay eventos disponibles.'
        : 'No events available yet.',
    date: locale === 'es' ? 'Fecha' : 'Date',
    details: locale === 'es' ? 'Detalles' : 'Details',
    timeTba: locale === 'es' ? 'Hora por confirmar' : 'Time TBA',
    locationTba: locale === 'es' ? 'Lugar por confirmar' : 'Location TBA',
    defaultEvent:
      locale === 'es'
        ? 'Únete a nosotros mientras nos reunimos, oramos y seguimos avanzando.'
        : 'Join us as we gather, pray, and continue moving forward.',

    finalLabel: locale === 'es' ? 'Únete a la visión' : 'Join the vision',
    finalTitle:
      locale === 'es'
        ? 'Sé parte de la visión de GoCuba'
        : 'Be part of the GoCuba vision',
    finalText:
      locale === 'es'
        ? 'Participa por medio de oración, eventos, generosidad y ánimo mientras GoCuba continúa creciendo.'
        : 'Join through prayer, event participation, generosity, and encouragement as GoCuba continues to grow.',
    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us'
  };

  const territories = [
    {name: 'Havana', description: copy.havanaText},
    {name: 'Baracoa', description: copy.baracoaText},
    {name: 'Villa Clara', description: copy.villaClaraText},
    {name: 'Artemisa', description: copy.artemisaText},
    {name: 'Matanzas', description: copy.matanzasText},
    {name: 'Sancti Spiritus', description: copy.sanctiText}
  ];

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data: eventsData, error: eventsError} = await supabase
    .from('events')
    .select('id, title, event_date, event_time, location, description')
    .eq('audience', 'gocuba')
    .order('event_date', {ascending: true});

  const events = (eventsData || []) as EventItem[];

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f6f0df]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}/GoCuba`} className="flex items-center">
            <Image
              src="/logos/GOCUBA.png"
              alt="GoCuba logo"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/en/GoCuba"
              className="rounded-full border border-black/20 px-3 py-1 text-sm"
            >
              EN
            </Link>
            <Link
              href="/es/GoCuba"
              className="rounded-full border border-black/20 px-3 py-1 text-sm"
            >
              ES
            </Link>
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1f1f1f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d83a25]"
            >
              {copy.supportGoCuba}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1f1f1f] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518544866330-95a2f008b95b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-[#1f1f1f]/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-8 inline-flex rounded-3xl bg-white p-4 shadow-sm">
            <Image
              src="/logos/GOCUBA.png"
              alt="GoCuba logo"
              width={280}
              height={130}
              className="h-20 w-auto object-contain md:h-24"
              priority
            />
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              GoCuba
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              {copy.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#events"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-[#f4cf38]"
              >
                {copy.getInvolved}
              </a>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                {copy.supportMission}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            {copy.missionLabel}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.introTitle}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            {copy.introText}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.territoriesLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.territoriesTitle}
            </h2>
            <p className="text-lg text-gray-600">{copy.territoriesText}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#f6f0df] p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{copy.mapTitle}</h3>
                <p className="mt-2 text-gray-700">{copy.mapText}</p>
              </div>

              <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-white">
                <Image
                  src="/images/cubamapa.png"
                  alt="Map of Cuba"
                  width={900}
                  height={700}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="grid gap-6">
              {territories.map((territory, index) => (
                <div
                  key={territory.name}
                  className={`rounded-3xl p-6 shadow-sm ${
                    index % 3 === 0
                      ? 'bg-[#f4cf38] text-[#1f1f1f]'
                      : index % 3 === 1
                        ? 'bg-[#6d8352] text-white'
                        : 'bg-[#3f7ea9] text-white'
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{territory.name}</h3>
                    <span className="rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {copy.active}
                    </span>
                  </div>
                  <p className={index % 3 === 0 ? 'text-gray-800' : 'text-white/85'}>
                    {territory.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.eventsLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.eventsTitle}
            </h2>
            <p className="text-lg text-gray-700">{copy.eventsText}</p>
          </div>

          {eventsError && (
            <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
              {copy.couldNotLoad}
            </div>
          )}

          <div className="grid gap-6">
            {!eventsError && events.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-black/20 bg-white p-8 text-gray-600">
                {copy.noEvents}
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[180px_1fr_220px]"
                >
                  <div className="rounded-2xl bg-[#1f1f1f] p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">
                      {copy.date}
                    </p>
                    <p className="mt-2 text-xl font-bold">{event.event_date}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-gray-600">
                      {event.description || copy.defaultEvent}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f6f0df] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      {copy.details}
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      {event.event_time || copy.timeTba}
                    </p>
                    <p className="mt-1 text-gray-600">
                      {event.location || copy.locationTba}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            {copy.finalLabel}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.finalTitle}
          </h2>
          <p className="mb-8 text-lg text-white/80">{copy.finalText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#events"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-[#f4cf38]"
            >
              {copy.getInvolved}
            </a>
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              {copy.supportGoCuba}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
