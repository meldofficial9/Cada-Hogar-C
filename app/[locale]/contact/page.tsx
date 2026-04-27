import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function ContactPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      {/* Hero */}
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
            Contact
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Connect with La Hora de la Luz.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            We would love to hear from you. Reach out for ministry questions,
            prayer, resources, partnership opportunities, or ways to get involved.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Reach Us
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              We are here to connect, pray, and serve.
            </h2>
            <p className="text-lg text-gray-700">
              Use any of the options below to contact the ministry directly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                ✉️
              </div>
              <h3 className="mb-3 text-2xl font-bold">Email</h3>
              <p className="mb-5 text-gray-800">
                Send us questions, ministry requests, or partnership information.
              </p>
              <a
                href="mailto:info@cadahogarcuba.org"
                className="font-semibold text-black underline"
              >
                info@cadahogarcuba.org
              </a>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
                📞
              </div>
              <h3 className="mb-3 text-2xl font-bold">Phone</h3>
              <p className="mb-5 text-white/85">
                Call or text us for direct communication and support.
              </p>
              <a
                href="tel:+14078217140"
                className="font-semibold text-white underline"
              >
                +1 (407) 821-7140
              </a>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
                📷
              </div>
              <h3 className="mb-3 text-2xl font-bold">Instagram</h3>
              <p className="mb-5 text-white/85">
                Follow updates, stories, prayer moments, and ministry content.
              </p>
              <a
                href="https://instagram.com/cadahogarcuba"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline"
              >
                @cadahogarcuba
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Send a Message
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Tell us how we can help.
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              This contact form can later be connected to email or Supabase. For
              now, visitors can use the direct contact options.
            </p>

            <div className="rounded-3xl bg-[#f6f0df] p-8">
              <h3 className="mb-3 text-2xl font-bold">Common reasons to contact us</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Prayer requests</li>
                <li>• Ministry partnership</li>
                <li>• Questions about GoCuba</li>
                <li>• Resources and downloadable materials</li>
                <li>• Events and participation</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <form className="grid gap-5">
              <div>
                <label className="mb-2 block font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-black px-6 py-3 font-semibold text-white"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-600">
                Form connection coming soon. Please use email or phone for now.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* GoCuba CTA */}
      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-[#1f1f1f] text-white shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="p-8 md:p-12">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
                  GoCuba
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Want to connect about GoCuba?
                </h2>
                <p className="mb-6 text-white/80">
                  Visit the GoCuba landing page to see upcoming events, ministry
                  territories, and ways to participate.
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

      {/* Final CTA */}
      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            Stay Connected
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            We believe connection helps the mission grow.
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Reach out, pray with us, share resources, and help bring light to
            more homes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/resources`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              View Resources
            </Link>
            <Link
              href={`/${locale}/get-involved`}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
