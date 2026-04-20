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
      <header className="w-full border-b border-gray-200 bg-white/95 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Cada Hogar Cuba
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href={`/${locale}/about`}>About</Link>
            <Link href={`/${locale}/mission`}>Mission</Link>
            <Link href={`/${locale}/resources`}>Resources</Link>
            <Link href={`/${locale}/get-involved`}>Get Involved</Link>
            <Link href={`/${locale}/contact`}>Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en"
              className="text-sm px-3 py-1 rounded-full border border-gray-300"
            >
              EN
            </Link>
            <Link
              href="/es"
              className="text-sm px-3 py-1 rounded-full border border-gray-300"
            >
              ES
            </Link>
            <Link
              href={`/${locale}/give`}
              className="hidden md:inline-block px-5 py-2 rounded-full bg-black text-white text-sm font-semibold"
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

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm mb-5 text-white/80">
              Cada Hogar Cuba
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-8">
              {t('hero.sub')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/about`}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold"
              >
                Learn More
              </Link>
              <Link
                href={`/${locale}/give`}
                className="px-6 py-3 rounded-full border border-white text-white font-semibold"
              >
                Support the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Our Focus
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we serve families and communities
            </h2>
            <p className="text-gray-600 text-lg">
              We want every home to encounter hope, faith, and practical support
              through Christ-centered outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Faith</h3>
              <p className="text-gray-600">
                Sharing the message of Jesus with families, children, and communities.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">
                Providing encouragement, resources, and practical care where it is needed most.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Building lasting relationships that strengthen homes and reflect God’s love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-5">
                  Learn how Cada Hogar Cuba is bringing hope to families through faith and action.
                </p>
                <Link href={`/${locale}/mission`} className="font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Resources</h3>
                <p className="text-gray-600 mb-5">
                  Explore tools, updates, and content that help people connect and serve.
                </p>
                <Link href={`/${locale}/resources`} className="font-semibold">
                  Explore Resources →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Get Involved</h3>
                <p className="text-gray-600 mb-5">
                  Join the work through prayer, partnership, giving, and community support.
                </p>
                <Link href={`/${locale}/get-involved`} className="font-semibold">
                  Join Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-3">
              Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building a community with purpose
            </h2>
            <p className="text-white/75 text-lg">
              Every prayer, every partnership, and every act of generosity helps reach more homes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-white/70">Families reached</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">25+</p>
              <p className="text-white/70">Community efforts</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2</p>
              <p className="text-white/70">Languages supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Be part of what God is doing through Cada Hogar Cuba
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Partner with us in prayer, generosity, and action to bring hope to more homes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href={`/${locale}/give`}
              className="px-6 py-3 rounded-full bg-black text-white font-semibold"
            >
              Give Now
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="px-6 py-3 rounded-full border border-gray-300 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Cada Hogar Cuba</h3>
            <p className="text-gray-600">
              Serving homes, strengthening faith, and building community with purpose.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/about`}>About</Link>
              <Link href={`/${locale}/mission`}>Mission</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/resources`}>Resources</Link>
              <Link href={`/${locale}/get-involved`}>Get Involved</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
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
