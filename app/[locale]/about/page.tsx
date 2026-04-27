import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function AboutPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      <section className="bg-[#1f1f1f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 rounded-3xl bg-white p-5 inline-flex">
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
            About the Ministry
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            La Hora de la Luz exists to bring the light of Christ into every home.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            We are a ministry focused on prayer, gospel outreach, discipleship,
            community connection, and the strengthening of homes through the
            message of Jesus.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Who We Are
            </p>
            <h2 className="mb-5 text-3xl font-bold">¿Quiénes somos?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              La Hora de la Luz is a Christ-centered ministry committed to
              reaching families, encouraging believers, and creating spaces
              where the gospel can be shared with clarity, compassion, and
              purpose.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Our Identity
            </p>
            <h2 className="mb-5 text-3xl font-bold">Una marca con propósito</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our visual identity uses the image of light as a reminder of hope,
              guidance, and the calling to reflect Christ in homes and
              communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Vision & Mission
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              A ministry built around light, homes, and transformation
            </h2>
            <p className="text-lg text-gray-600">
              Our heart is to see every home touched by the gospel and every
              believer equipped to share the love of Jesus.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Light</h3>
              <p className="text-gray-800">
                We believe Christ brings light into darkness and hope into every
                home.
              </p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Home</h3>
              <p className="text-white/85">
                We focus on families, households, and community spaces where
                faith can grow.
              </p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Mission</h3>
              <p className="text-white/85">
                We mobilize prayer, resources, leaders, and believers for gospel
                outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Visual System
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              A visual language designed to communicate hope
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              The ministry’s brand guide includes a warm cream base, strong
              contrast, red and blue accents, and visual resources designed for
              posters, social media, banners, and ministry communication.
            </p>
            <p className="text-gray-700">
              This visual system helps La Hora de la Luz stay consistent,
              recognizable, and clear across digital and printed materials.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">Bold Message</h3>
              </div>
              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">Warm Identity</h3>
              </div>
              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">Digital Resources</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              What We Value
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Values that guide the ministry
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {['Prayer', 'Gospel', 'Community', 'Faithfulness'].map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <h3 className="text-2xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            Join Us
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Be part of bringing light to more homes.
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Connect with the ministry, pray with us, access resources, and
            support the work happening through La Hora de la Luz.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/resources`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              View Resources
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
    </main>
  );
}
