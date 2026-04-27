import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function MissionPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            Our Mission
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Bringing light, hope, and the message of Jesus into every home.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            La Hora de la Luz exists to strengthen families, mobilize believers,
            and support gospel-centered outreach across communities.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Our Vision
            </p>
            <h2 className="mb-4 text-3xl font-bold">Nuestra Visión</h2>
            <p className="text-lg text-gray-600">
              To see homes transformed by the light of Christ, communities
              strengthened through prayer, and believers equipped to share the
              gospel with love, clarity, and purpose.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Our Mission
            </p>
            <h2 className="mb-4 text-3xl font-bold">Nuestra Misión</h2>
            <p className="text-lg text-gray-600">
              To mobilize the church, provide practical ministry resources, and
              reach families through prayer, discipleship, gospel presentation,
              and community-centered outreach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              What We Do
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-gray-600">
              We serve through coordinated ministry efforts that connect local
              believers, families, resources, prayer, and outreach strategy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Convocación a la iglesia</h3>
              <p className="text-gray-600">
                We encourage churches and believers to participate actively in
                prayer, outreach, and discipleship efforts.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Mapeo y métrica</h3>
              <p className="text-gray-600">
                We track territories, outreach progress, and ministry impact to
                better understand where support and prayer are needed.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Grupos de Cristo</h3>
              <p className="text-gray-600">
                We support gatherings where people can grow in faith, study the
                Word, pray, and build community.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Mensajes repartibles</h3>
              <p className="text-gray-600">
                We provide gospel-centered materials that can be shared with
                families, neighbors, and communities.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Liderazgo local</h3>
              <p className="text-gray-600">
                We strengthen local leaders and support ministry teams serving
                directly in their communities.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">Proyectos especiales</h3>
              <p className="text-gray-600">
                We develop focused initiatives, including outreach projects,
                prayer campaigns, and creative ministry efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
              Core Values
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Valores principales
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {['Prayer', 'Compassion', 'Unity', 'Integrity'].map((value) => (
              <div
                key={value}
                className="rounded-3xl bg-black p-8 text-center text-white"
              >
                <h3 className="text-2xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Join the mission of bringing light to every home.
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Be part of this work through prayer, partnership, generosity, and
            action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              Give
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
