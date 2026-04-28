import Image from 'next/image';
import {createClient} from '@supabase/supabase-js';
import {setRequestLocale} from 'next-intl/server';
import GoCubaInteractiveMap from '@/components/GoCubaInteractiveMap';
import GoCubaTripsGallery from '@/components/GoCubaTripsGallery';

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

  const paypalLink = 'https://www.paypal.com/donate';

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

    upcoming: locale === 'es' ? 'Próximos Eventos' : 'Upcoming Events',
    noEvents:
      locale === 'es'
        ? 'No hay eventos disponibles todavía.'
        : 'No events available yet.',
    timeTba: locale === 'es' ? 'Hora por confirmar' : 'Time TBA',
    locationTba: locale === 'es' ? 'Lugar por confirmar' : 'Location TBA',
    defaultEvent:
      locale === 'es'
        ? 'Únete mientras oramos, conectamos y seguimos avanzando con la visión de GoCuba.'
        : 'Join us as we pray, connect, and continue moving forward with the GoCuba vision.',

    finalTitle:
      locale === 'es'
        ? 'Sé parte del movimiento'
        : 'Be part of the movement',
    finalText:
      locale === 'es'
        ? 'Ora, participa y ayuda a llevar esperanza a más hogares en Cuba.'
        : 'Pray, participate, and help bring hope to more homes in Cuba.'
  };

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data: eventsData} = await supabase
    .from('events')
    .select('id, title, event_date, event_time, location, description')
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
            width={170}
            height={80}
            className="h-14 w-auto object-contain"
            priority
          />

          <div className="flex items-center gap-3">
            <a
              href="/en/GoCuba"
              className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium"
            >
              EN
            </a>

            <a
              href="/es/GoCuba"
              className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium"
            >
              ES
            </a>

            <a
              href={paypalLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0A66C2] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#084f94]"
            >
              {copy.donate}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071B2E] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518544866330-95a2f008b95b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2E] via-[#071B2E]/90 to-[#0A66C2]/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex rounded-3xl bg-white p-4 shadow-xl">
              <Image
                src="/logos/GOCUBA.png"
                alt="GoCuba logo"
                width={300}
                height={140}
                className="h-24 w-auto object-contain md:h-28"
                priority
              />
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#90E0EF]">
              GoCuba Movement
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {copy.heroTitle}
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/85 md:text-xl">
              {copy.heroText}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#territories"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-[#E6F7FF]"
              >
                {copy.explore}
              </a>

              <a
                href="#events"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#071B2E]"
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

      {/* INTERACTIVE MAP */}
      <GoCubaInteractiveMap />

      {/* TRIPS GALLERY */}
      <GoCubaTripsGallery />

      {/* EVENTS */}
      <section id="events" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#0A66C2]">
              {copy.events}
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              {copy.upcoming}
            </h2>
          </div>

          {events.length === 0 ? (
            <div className="rounded-3xl bg-slate-100 p-8 text-slate-600">
              {copy.noEvents}
            </div>
          ) : (
            <div className="grid gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[180px_1fr_220px]"
                >
                  <div className="rounded-3xl bg-[#071B2E] p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                      {locale === 'es' ? 'Fecha' : 'Date'}
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      {event.event_date}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#071B2E]">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {event.description || copy.defaultEvent}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {locale === 'es' ? 'Detalles' : 'Details'}
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      {event.event_time || copy.timeTba}
                    </p>

                    <p className="mt-1 text-slate-600">
                      {event.location || copy.locationTba}
                    </p>
                  </div>
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

          <p className="mb-8 text-lg text-white/80">{copy.finalText}</p>

          <a
            href={paypalLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-[#E6F7FF]"
          >
            {copy.donate}
          </a>
        </div>
      </section>
    </main>
  );
}
