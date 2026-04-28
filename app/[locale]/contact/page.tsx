import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function ContactPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    label: locale === 'es' ? 'Contacto' : 'Contact',
    heroTitle:
      locale === 'es'
        ? 'Conéctate con La Hora de la Luz.'
        : 'Connect with La Hora de la Luz.',
    heroText:
      locale === 'es'
        ? 'Nos encantaría saber de ti. Escríbenos para preguntas del ministerio, oración, recursos, oportunidades de colaboración o formas de involucrarte.'
        : 'We would love to hear from you. Reach out for ministry questions, prayer, resources, partnership opportunities, or ways to get involved.',

    reachUs: locale === 'es' ? 'Comunícate con nosotros' : 'Reach Us',
    reachTitle:
      locale === 'es'
        ? 'Estamos aquí para conectar, orar y servir.'
        : 'We are here to connect, pray, and serve.',
    reachText:
      locale === 'es'
        ? 'Usa cualquiera de las opciones abajo para contactar directamente al ministerio.'
        : 'Use any of the options below to contact the ministry directly.',

    email: locale === 'es' ? 'Correo electrónico' : 'Email',
    emailText:
      locale === 'es'
        ? 'Envíanos preguntas, peticiones del ministerio o información de colaboración.'
        : 'Send us questions, ministry requests, or partnership information.',

    phone: locale === 'es' ? 'Teléfono' : 'Phone',
    phoneText:
      locale === 'es'
        ? 'Llámanos o escríbenos para comunicación directa y apoyo.'
        : 'Call or text us for direct communication and support.',

    instagramText:
      locale === 'es'
        ? 'Sigue actualizaciones, historias, momentos de oración y contenido del ministerio.'
        : 'Follow updates, stories, prayer moments, and ministry content.',

    sendMessage: locale === 'es' ? 'Enviar mensaje' : 'Send a Message',
    tellUs:
      locale === 'es'
        ? 'Dinos cómo podemos ayudarte.'
        : 'Tell us how we can help.',
    formNote:
      locale === 'es'
        ? 'Este formulario luego puede conectarse a email o Supabase. Por ahora, los visitantes pueden usar las opciones de contacto directo.'
        : 'This contact form can later be connected to email or Supabase. For now, visitors can use the direct contact options.',

    commonReasons:
      locale === 'es'
        ? 'Razones comunes para contactarnos'
        : 'Common reasons to contact us',
    prayerRequests: locale === 'es' ? 'Peticiones de oración' : 'Prayer requests',
    partnership: locale === 'es' ? 'Colaboración ministerial' : 'Ministry partnership',
    questionsGoCuba:
      locale === 'es' ? 'Preguntas sobre GoCuba' : 'Questions about GoCuba',
    resources:
      locale === 'es'
        ? 'Recursos y materiales descargables'
        : 'Resources and downloadable materials',
    events:
      locale === 'es'
        ? 'Eventos y participación'
        : 'Events and participation',

    name: locale === 'es' ? 'Nombre' : 'Name',
    yourName: locale === 'es' ? 'Tu nombre' : 'Your name',
    message: locale === 'es' ? 'Mensaje' : 'Message',
    howHelp: locale === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help?',
    sendButton: locale === 'es' ? 'Enviar mensaje' : 'Send Message',
    formComing:
      locale === 'es'
        ? 'Conexión del formulario próximamente. Por ahora usa email o teléfono.'
        : 'Form connection coming soon. Please use email or phone for now.',

    goCubaTitle:
      locale === 'es'
        ? '¿Quieres conectar sobre GoCuba?'
        : 'Want to connect about GoCuba?',
    goCubaText:
      locale === 'es'
        ? 'Visita la página de GoCuba para ver próximos eventos, territorios ministeriales y formas de participar.'
        : 'Visit the GoCuba landing page to see upcoming events, ministry territories, and ways to participate.',
    viewGoCuba: locale === 'es' ? 'Ver GoCuba' : 'View GoCuba',

    stayConnected: locale === 'es' ? 'Mantente conectado' : 'Stay Connected',
    finalTitle:
      locale === 'es'
        ? 'Creemos que la conexión ayuda a crecer la misión.'
        : 'We believe connection helps the mission grow.',
    finalText:
      locale === 'es'
        ? 'Comunícate con nosotros, ora con nosotros, comparte recursos y ayuda a llevar luz a más hogares.'
        : 'Reach out, pray with us, share resources, and help bring light to more homes.',
    viewResources: locale === 'es' ? 'Ver recursos' : 'View Resources',
    getInvolved: locale === 'es' ? 'Involúcrate' : 'Get Involved'
  };

  return (
    <main className="min-h-screen bg-[#f6f0df] text-[#1f1f1f]">
      <section className="bg-[#1f1f1f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="inline-flex rounded-3xl bg-white p-5">
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

            <div className="flex items-center gap-3">
              <Link
                href="/en/contact"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/contact"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                ES
              </Link>
            </div>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            {copy.label}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {copy.heroTitle}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            {copy.heroText}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.reachUs}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.reachTitle}
            </h2>
            <p className="text-lg text-gray-700">{copy.reachText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                ✉️
              </div>
              <h3 className="mb-3 text-2xl font-bold">{copy.email}</h3>
              <p className="mb-5 text-gray-800">{copy.emailText}</p>
              <a
                href="mailto:gocuba@horadelaluz.org"
                className="font-semibold text-black underline"
              >
                gocuba@horadelaluz.org
              </a>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
                📞
              </div>
              <h3 className="mb-3 text-2xl font-bold">{copy.phone}</h3>
              <p className="mb-5 text-white/85">{copy.phoneText}</p>
              <a
                href="tel:+5351102875"
                className="font-semibold text-white underline"
              >
                +5351102875
              </a>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
                📷
              </div>
              <h3 className="mb-3 text-2xl font-bold">Instagram</h3>
              <p className="mb-5 text-white/85">{copy.instagramText}</p>
              <a
                href="https://instagram.com/lahoradelaluz.cuba"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline"
              >
                @lahoradelaluz.cuba
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.sendMessage}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {copy.tellUs}
            </h2>
            <p className="mb-6 text-lg text-gray-700">{copy.formNote}</p>

            <div className="rounded-3xl bg-[#f6f0df] p-8">
              <h3 className="mb-3 text-2xl font-bold">{copy.commonReasons}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {copy.prayerRequests}</li>
                <li>• {copy.partnership}</li>
                <li>• {copy.questionsGoCuba}</li>
                <li>• {copy.resources}</li>
                <li>• {copy.events}</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
            <form className="grid gap-5">
              <div>
                <label className="mb-2 block font-medium">{copy.name}</label>
                <input
                  type="text"
                  placeholder={copy.yourName}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">{copy.email}</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">{copy.message}</label>
                <textarea
                  rows={5}
                  placeholder={copy.howHelp}
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-black px-6 py-3 font-semibold text-white"
              >
                {copy.sendButton}
              </button>

              <p className="text-sm text-gray-600">{copy.formComing}</p>
            </form>
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
                  {copy.goCubaTitle}
                </h2>
                <p className="mb-6 text-white/80">{copy.goCubaText}</p>

                <Link
                  href={`/${locale}/GoCuba`}
                  className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
                >
                  {copy.viewGoCuba}
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
            {copy.stayConnected}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.finalTitle}
          </h2>
          <p className="mb-8 text-lg text-white/80">{copy.finalText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/resources`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              {copy.viewResources}
            </Link>
            <Link
              href={`/${locale}/get-involved`}
              className="rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              {copy.getInvolved}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
