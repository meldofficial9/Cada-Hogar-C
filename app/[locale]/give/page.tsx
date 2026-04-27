import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function GivePage({
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

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            Give
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Partner with the mission of bringing light to more homes.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Your generosity helps support ministry resources, outreach efforts,
            prayer initiatives, GoCuba events, and the work of sharing hope with
            families and communities.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Ways to Give
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Choose how you would like to support.
            </h2>
            <p className="text-lg text-gray-700">
              This page is prepared for giving options and can be connected to
              your official PayPal donation link when you are ready.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">One-Time Gift</h3>
              <p className="mb-6 text-gray-800">
                Give a single donation to support current ministry needs,
                resources, and outreach efforts.
              </p>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
              >
                Donate with PayPal
              </a>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Monthly Partner</h3>
              <p className="mb-6 text-white/85">
                Become a monthly partner and help sustain consistent ministry
                work, events, and gospel-centered resources.
              </p>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Give Monthly
              </a>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">GoCuba Support</h3>
              <p className="mb-6 text-white/85">
                Support the GoCuba initiative, including events, prayer
                gatherings, outreach tools, and territory-focused ministry.
              </p>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Support GoCuba
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              PayPal Giving
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Ready for your official donation link.
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              The buttons on this page currently use a placeholder PayPal link.
              When you receive your official PayPal donation URL, replace:
            </p>

            <div className="rounded-3xl bg-[#f6f0df] p-6 font-mono text-sm text-gray-800">
              https://www.paypal.com/donate
            </div>

            <p className="mt-4 text-lg text-gray-700">
              with your real PayPal donation link in each button.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              What your giving supports
            </h3>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5">
                <h4 className="font-bold">Ministry resources</h4>
                <p className="mt-2 text-gray-700">
                  Downloadable materials, prayer guides, and outreach tools.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <h4 className="font-bold">GoCuba events</h4>
                <p className="mt-2 text-gray-700">
                  Prayer gatherings, vision nights, and ministry opportunities.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <h4 className="font-bold">Community outreach</h4>
                <p className="mt-2 text-gray-700">
                  Efforts that help bring hope, prayer, and gospel connection to homes.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <h4 className="font-bold">Digital tools</h4>
                <p className="mt-2 text-gray-700">
                  Website, media, communication, and ministry updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-[#1f1f1f] text-white shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="p-8 md:p-12">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
                  GoCuba
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Want to support GoCuba directly?
                </h2>
                <p className="mb-6 text-white/80">
                  Visit the GoCuba page to see the mission focus, territories,
                  and upcoming events connected to this initiative.
                </p>

                <Link
                  href={`/${locale}/GoCuba`}
                  className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
                >
                  View GoCuba
                </Link>
              </div>

              <div className="flex min-h-[300px] items-center justify-center bg-white p-10">
                <Image
                  src="/logos/GOCUBA.png"
                  alt="GoCuba logo"
                  width={320}
                  height={140}
                  className="h-28 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            Thank you
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Every gift helps the mission move forward.
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Thank you for partnering with La Hora de la Luz and helping bring
            light, hope, and the message of Jesus to more homes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              Donate with PayPal
            </a>
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
