import Link from 'next/link';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

export default function GetInvolvedPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      <section className="bg-[#1f1f1f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 inline-flex rounded-3xl bg-white p-5">
            <Image
              src="/logos/lahoradelaluz.png"
              alt="La Hora de la Luz logo"
              width={360}
              height={160}
              className="h-24 w-auto object-contain md:h-28"
              priority
            />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            Get Involved
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Be part of bringing light, hope, and the gospel into more homes.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            You can participate through prayer, sharing resources, joining
            events, supporting GoCuba, and connecting others with the mission.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Ways to participate
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Involúcrate de una manera práctica
            </h2>
            <p className="text-lg text-gray-700">
              Every person can play a part in the mission. Start with one step:
              pray, share, serve, give, or invite someone else.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Pray</h3>
              <p className="text-gray-800">
                Commit to praying for homes, leaders, territories, families,
                and upcoming ministry opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Share</h3>
              <p className="text-white/85">
                Share ministry resources, updates, testimonies, and invitations
                with your church, family, and community.
              </p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Serve</h3>
              <p className="text-white/85">
                Get connected with opportunities to support outreach, events,
                prayer gatherings, and local ministry efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Prayer
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Join us in prayer
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Prayer is at the center of the mission. Pray for open doors,
              strong leaders, transformed homes, and the message of Jesus to
              reach more people.
            </p>
            <Link
              href={`/${locale}/GoCuba`}
              className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              View GoCuba Events
            </Link>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Resources
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Download and share resources
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Access free downloadable materials that can be used for prayer,
              outreach, teaching, encouragement, and community connection.
            </p>
            <Link
              href={`/${locale}/resources`}
              className="inline-block rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              View Resources
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
              Connect with the GoCuba initiative
            </h2>
            <p className="text-lg text-gray-700">
              GoCuba is a focused effort connected to the mission, highlighting
              territories, events, prayer, and opportunities to participate.
            </p>
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
                  Pray, participate, and stay connected.
                </h3>
                <p className="mb-6 text-white/80">
                  Visit the GoCuba landing page to see the map, territories,
                  and upcoming calendar of events.
                </p>

                <Link
                  href={`/${locale}/GoCuba`}
                  className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
                >
                  Go to GoCuba
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
              Next steps
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Choose how you want to get involved
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href={`/${locale}/contact`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">Contact us</h3>
              <p className="text-gray-700">
                Ask questions, request information, or connect with the ministry.
              </p>
            </Link>

            <Link
              href={`/${locale}/give`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">Give</h3>
              <p className="text-gray-700">
                Support the work through generosity and partnership.
              </p>
            </Link>

            <Link
              href={`/${locale}/resources`}
              className="rounded-3xl border border-gray-200 bg-[#f6f0df] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">Share resources</h3>
              <p className="text-gray-700">
                Download, share, and use ministry materials with others.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            Join the mission
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Your participation can help bring light to more homes.
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Pray with us, share the mission, connect with events, and help
            strengthen families and communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              Contact Us
            </Link>
            <Link
              href={`/${locale}/give`}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              Give
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
