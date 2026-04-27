import Link from 'next/link';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

export default function MissionPage({
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
            Mission & Vision
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A ministry created to bring the light of Christ into homes and communities.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            La Hora de la Luz exists to mobilize believers, strengthen families,
            and share the gospel through prayer, resources, outreach, and
            community connection.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Nuestra Visión
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Ver hogares iluminados por Cristo
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nuestra visión es ver familias, comunidades e iglesias fortalecidas
              por la luz del evangelio, caminando en esperanza, oración y propósito.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Nuestra Misión
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Movilizar, equipar y alcanzar
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nuestra misión es movilizar a la iglesia, equipar creyentes con
              recursos prácticos y llevar el mensaje de Jesús a hogares y
              territorios que necesitan esperanza.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              ¿Qué hacemos?
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Trabajamos para que el evangelio llegue con claridad, amor y propósito.
            </h2>
            <p className="text-lg text-gray-600">
              Desarrollamos esfuerzos ministeriales que conectan oración, liderazgo,
              recursos, métricas, discipulado y alcance comunitario.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Convocación a la iglesia</h3>
              <p className="text-gray-800">
                Invitamos a creyentes e iglesias a participar activamente en oración,
                evangelismo, servicio y discipulado.
              </p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Mapeo y métrica</h3>
              <p className="text-white/85">
                Observamos territorios, necesidades y avances para servir con
                intención, orden y claridad.
              </p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Grupos de Cristo</h3>
              <p className="text-white/85">
                Apoyamos espacios donde las personas puedan crecer en fe, oración,
                comunidad y conocimiento de la Palabra.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Mensajes repartibles</h3>
              <p className="text-gray-700">
                Creamos y compartimos materiales con mensajes del evangelio que
                puedan llegar a hogares, vecinos y comunidades.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Liderazgo local</h3>
              <p className="text-gray-700">
                Acompañamos y fortalecemos líderes que sirven directamente en sus
                comunidades y territorios.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">Proyectos especiales</h3>
              <p className="text-gray-700">
                Desarrollamos iniciativas creativas, campañas de oración, recursos
                digitales y proyectos de alcance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Inspired System */}
      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              Nuestro sistema visual
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Una misión comunicada con luz, orden y consistencia.
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              La identidad de La Hora de la Luz utiliza una paleta cálida,
              contraste fuerte, recursos editoriales, íconos simples y una
              arquitectura visual diseñada para comunicar esperanza.
            </p>
            <p className="text-gray-700">
              Esta estética nos ayuda a mantener claridad en publicaciones,
              recursos, banners, redes sociales y materiales ministeriales.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">Mensaje claro</h3>
                <p className="mt-2 text-white/85">
                  Comunicamos el evangelio con intención y dirección.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">Identidad cálida</h3>
                <p className="mt-2 text-gray-800">
                  Usamos colores y formas que transmiten cercanía y esperanza.
                </p>
              </div>

              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">Recursos digitales</h3>
                <p className="mt-2 text-white/85">
                  Creamos herramientas visuales para servir mejor a la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              Valores principales
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Lo que guía nuestra misión
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl font-semibold">Oración</h3>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl font-semibold">Evangelio</h3>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl font-semibold">Comunidad</h3>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl font-semibold">Fidelidad</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            Únete a la misión
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Sé parte de llevar luz a más hogares.
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Puedes participar orando, compartiendo recursos, sirviendo, apoyando
            proyectos y conectando a otros con esta misión.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/get-involved`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Involúcrate
            </Link>
            <Link
              href={`/${locale}/resources`}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              Ver recursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
