 import Image from 'next/image';
import Link from 'next/link';
import {getTranslations, setRequestLocale} from 'next-intl/server';

export default async function HomePage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={`/${locale}`} className="flex items-center gap-4">
            <div className="rounded-2xl bg-white p-2">
              <Image
                src="/logos/everyhome.png"
                alt="Every Home logo"
                width={360}
                height={160}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>

            <div className="rounded-2xl bg-white p-3">
              <Image
                src="/logos/lahoradelaluz.png"
                alt="La Hora de la Luz logo"
                width={360}
                height={160}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href={`/${locale}/about`}>About</Link>
            <Link href={`/${locale}/mission`}>Mission</Link>
            <Link href={`/${locale}/resources`}>Resources</Link>
            <Link href={`/${locale}/get-involved`}>Get Involved</Link>
            <Link href={`/${locale}/contact`}>Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en"
              className="rounded-full border border-gray-300 px-3 py-1 text-sm"
            >
              EN
            </Link>
            <Link
              href="/es"
              className="rounded-full border border-gray-300 px-3 py-1 text-sm"
            >
              ES
            </Link>
            <Link
              href={`/${locale}/give`}
              className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white md:inline-block"
            >
              Give
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white md:py-36">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/80">
              Cada Hogar Cuba
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              {t('hero.headline')}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/85 md:text-xl">
              {t('hero.sub')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/about`}
                className="rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Learn More
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
     {/* Monthly Featured Article */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
        Featured Monthly Article
      </p>
      <h2 className="text-3xl font-bold md:text-4xl">
        Stories, vision, and updates from the mission
      </h2>
    </div>

    <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gray-50 shadow-sm md:grid-cols-2">
      <div className="h-80 bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

      <div className="p-8 md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          April 2026
        </p>

        <h3 className="mb-4 text-3xl font-bold leading-tight">
          Prayer that transforms homes
        </h3>

        <p className="mb-6 text-lg text-gray-600">
          Discover how consistent prayer, community outreach, and faith-filled action are bringing hope into homes across Cuba.
        </p>

        <Link
          href={`/${locale}/about`}
          className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
        >
          Read Article
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Mission cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Our Focus
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How we serve families and communities
            </h2>
            <p className="text-lg text-gray-600">
              We want every home to encounter hope, faith, and practical support
              through Christ-centered outreach.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Faith</h3>
              <p className="text-gray-600">
                Sharing the message of Jesus with families, children, and
                communities.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Support</h3>
              <p className="text-gray-600">
                Providing encouragement, resources, and practical care where it
                is needed most.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Community</h3>
              <p className="text-gray-600">
                Building lasting relationships that strengthen homes and reflect
                God’s love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured sections */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-semibold">Our Mission</h3>
                <p className="mb-5 text-gray-600">
                  Learn how Cada Hogar Cuba is bringing hope to families through
                  faith and action.
                </p>
                <Link href={`/${locale}/mission`} className="font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-semibold">Resources</h3>
                <p className="mb-5 text-gray-600">
                  Explore tools, updates, and content that help people connect
                  and serve.
                </p>
                <Link href={`/${locale}/resources`} className="font-semibold">
                  Explore Resources →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-semibold">Get Involved</h3>
                <p className="mb-5 text-gray-600">
                  Join the work through prayer, partnership, giving, and
                  community support.
                </p>
                <Link
                  href={`/${locale}/get-involved`}
                  className="font-semibold"
                >
                  Join Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              Impact
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Building a community with purpose
            </h2>
            <p className="text-lg text-white/75">
              Every prayer, every partnership, and every act of generosity helps
              reach more homes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-5xl font-bold">100+</p>
              <p className="text-white/70">Families reached</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">25+</p>
              <p className="text-white/70">Community efforts</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">2</p>
              <p className="text-white/70">Languages supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Be part of what God is doing through Cada Hogar Cuba
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Partner with us in prayer, generosity, and action to bring hope to
            more homes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/give`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Give Now
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-bold">Cada Hogar Cuba</h3>
            <p className="text-gray-600">
              Serving homes, strengthening faith, and building community with
              purpose.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">About</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/about`}>About</Link>
              <Link href={`/${locale}/mission`}>Mission</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Resources</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/resources`}>Resources</Link>
              <Link href={`/${locale}/get-involved`}>Get Involved</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Connect</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/contact`}>Contact</Link>
              <Link href={`/${locale}/give`}>Give</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
