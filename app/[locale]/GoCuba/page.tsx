import Image from 'next/image';
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
    donate: locale === 'es' ? 'Donar' : 'Donate',
    heroTitle:
      locale === 'es'
        ? 'Movilizando esperanza en Cuba'
        : 'Mobilizing hope across Cuba',

    heroText:
      locale === 'es'
        ? 'GoCuba conecta oración, alcance, liderazgo y comunidades para llevar la luz de Cristo a toda Cuba.'
        : 'GoCuba connects prayer, outreach, leadership, and communities to bring the light of Christ across Cuba.',

    explore: locale === 'es' ? 'Explorar' : 'Explore',
    events: locale === 'es' ? 'Eventos' : 'Events',

    vision: locale === 'es' ? 'Nuestra Visión' : 'Our Vision',
    visionTitle:
      locale === 'es'
        ? 'Una Cuba alcanzada con esperanza'
        : 'A Cuba reached with hope',

    visionText:
      locale === 'es'
        ? 'Creemos en una generación transformada por el evangelio, fortalecida por la oración y activada en misión.'
        : 'We believe in a generation transformed by the gospel, strengthened through prayer, and activated in mission.',

    territories: locale === 'es' ? 'Territorios Activos' : 'Active Territories',
    upcoming: locale === 'es' ? 'Próximos Eventos' : 'Upcoming Events',
    noEvents:
      locale === 'es'
        ? 'No hay eventos disponibles todavía.'
        : 'No events available yet.',

    finalTitle:
      locale === 'es'
        ? 'Sé parte del movimiento'
        : 'Be part of the movement',

    finalText:
      locale === 'es'
        ? 'Ora, participa y ayuda a llevar esperanza a más hogares en Cuba.'
        : 'Pray, participate, and help bring hope to more homes in Cuba.'
  };

  const territories = [
    'Havana',
    'Baracoa',
    'Villa Clara',
    'Artemisa',
    'Matanzas',
    'Sancti Spiritus'
  ];

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data: eventsData} = await supabase
    .from('events')
    .select('id,title,event_date,event_time,location,description')
    .eq('audience', 'gocuba')
    .order('event_date', {ascending: true});

  const events = (eventsData || []) as EventItem[];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image
            src="/logos/GOCUBA.png"
            alt="GoCuba"
            width={160}
            height={70}
            className="h-14 w-auto"
          />

          <div className="flex items-center gap-3">
            <a
              href="/en/GoCuba"
              className="rounded-full border px-3 py-1 text-sm"
            >
              EN
            </a>

            <a
              href="/es/GoCuba"
              className="rounded-full border px-3 py-1 text-sm"
            >
              ES
            </a>

            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              className="rounded-full bg-[#0A66C2] px-5 py-2 text-sm font-semibold text-white"
            >
              {copy.donate}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071B2E] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518544866330-95a2f008b95b?q=80&w=1600')] bg-cover bg-center opacity-25" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              GoCuba
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {copy.heroTitle}
            </h1>

            <p className="mb-8 text-lg text-white/80 md:text-xl">
              {copy.heroText}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#territories"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                {copy.explore}
              </a>

              <a
                href="#events"
                className="rounded-full border border-white px-6 py-3 font-semibold"
              >
                {copy.events}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#0A66C2]">
            {copy.vision}
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {copy.visionTitle}
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            {copy.visionText}
          </p>
        </div>
      </section>

      {/* TERRITORIES */}
      <section id="territories" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-bold">{copy.territories}</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {territories.map((city) => (
              <div
                key={city}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
              >
                <h3 className="mb-3 text-2xl font-bold">{city}</h3>
                <p className="text-slate-600">
                  Prayer, outreach, and ministry momentum continue growing here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-bold">{copy.upcoming}</h2>

          {events.length === 0 ? (
            <div className="rounded-3xl bg-slate-100 p-8 text-slate-600">
              {copy.noEvents}
            </div>
          ) : (
            <div className="grid gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-slate-200 p-8 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#0A66C2]">
                    {event.event_date}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>

                  <p className="mt-3 text-slate-600">
                    {event.description}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">
                    {event.event_time} • {event.location}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071B2E] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {copy.finalTitle}
          </h2>

          <p className="mb-8 text-lg text-white/80">
            {copy.finalText}
          </p>

          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black"
          >
            {copy.donate}
          </a>
        </div>
      </section>
    </main>
  );
}
