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

const territories = [
  {
    name: 'Havana',
    status: 'Active',
    description:
      'Ongoing ministry presence through outreach, prayer, and discipleship efforts.'
  },
  {
    name: 'Baracoa',
    status: 'Active',
    description:
      'Ministry work focused on strengthening homes, evangelism, and connection with local believers.'
  },
  {
    name: 'Villa Clara',
    status: 'Active',
    description:
      'Expanding opportunities for gospel engagement, prayer support, and community presence.'
  },
  {
    name: 'Artemisa',
    status: 'Active',
    description:
      'A territory reached through prayer, local connection, and ministry outreach.'
  },
  {
    name: 'Matanzas',
    status: 'Active',
    description:
      'A territory where the ministry continues building relationships and sharing hope.'
  },
  {
    name: 'Sancti Spiritus',
    status: 'Active',
    description:
      'A territory connected to the vision of reaching homes and communities with the gospel.'
  }
];

export default async function GoCubaPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-sm font-semibold text-gray-700">
            ← Back to La Hora de la Luz
          </Link>

          <Link
            href={`/${locale}/give`}
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Support GoCuba
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518544866330-95a2f008b95b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-8">
            <div className="inline-flex rounded-3xl bg-white p-4">
              <Image
                src="/logos/GOCUBA.png"
                alt="GoCuba logo"
                width={260}
                height={120}
                className="h-20 w-auto object-contain md:h-24"
                priority
              />
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              GoCuba
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Reaching Cuba through prayer, presence, and gospel movement
            </h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Explore where the ministry has reached, stay updated on upcoming
              events, and discover how you can be part of what God is doing through GoCuba.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/get-involved`}
                className="rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Get Involved
              </Link>
              <Link
                href={`/${locale}/give`}
                className="rounded-full border border-white px-6 py-3 font-semibold text-white"
              >
                Support the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
            The Mission
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            A focused landing page for outreach across Cuba
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            GoCuba highlights ministry territories, outreach momentum, and
            upcoming opportunities to pray, connect, and participate in the mission.
          </p>
        </div>
      </section>

      {/* Map + Territories */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Territories
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Places we have reached in Cuba
            </h2>
            <p className="text-lg text-gray-600">
              This section highlights current territories where ministry presence,
              prayer, and local outreach have been taking place.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Map of Cuba</h3>
                <p className="mt-2 text-gray-600">
                  Current territories where the ministry is active or growing.
                </p>
              </div>

              <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-gray-100">
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
              {territories.map((territory) => (
                <div
                  key={territory.name}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{territory.name}</h3>
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {territory.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{territory.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Events Calendar
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Upcoming GoCuba events
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated on gatherings, prayer nights, vision events, and opportunities to connect.
            </p>
          </div>

          {eventsError && (
            <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
              Could not load events right now.
            </div>
          )}

          <div className="grid gap-6">
            {!eventsError && events.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-gray-600">
                No events available yet.
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="grid gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:grid-cols-[180px_1fr_220px]"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Date
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      {event.event_date}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{event.title}</h3>
                    <p className="mt-2 text-gray-600">
                      {event.description ||
                        'Join us as we gather, pray, and continue building momentum for the mission.'}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Details
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      {event.event_time || 'Time TBA'}
                    </p>
                    <p className="mt-1 text-gray-600">
                      {event.location || 'Location TBA'}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Be part of the GoCuba vision
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Join through prayer, event participation, generosity, and encouragement
            as the ministry continues to grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/get-involved`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              Get Involved
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
