import Image from 'next/image';
import Link from 'next/link';
import {createClient} from '@supabase/supabase-js';
import {setRequestLocale} from 'next-intl/server';

export const dynamic = 'force-dynamic';

type ResourceItem = {
  id: string;
  title: string;
  description: string | null;
  public_url: string;
  locale: string;
  created_at: string;
};

export default async function ResourcesPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    label: locale === 'es' ? 'Recursos' : 'Resources',
    title:
      locale === 'es'
        ? 'Recursos gratuitos para descargar y compartir.'
        : 'Free resources to download and share.',
    subtitle:
      locale === 'es'
        ? 'Encuentra materiales del ministerio, guías, documentos y recursos que puedes usar para oración, enseñanza y alcance.'
        : 'Find ministry materials, guides, documents, and resources you can use for prayer, teaching, and outreach.',
    available:
      locale === 'es' ? 'Recursos disponibles' : 'Available Resources',
    availableText:
      locale === 'es'
        ? 'Estos materiales han sido añadidos por el equipo administrativo y están disponibles para descarga gratuita.'
        : 'These materials have been added by the admin team and are available for free download.',
    noResources:
      locale === 'es'
        ? 'Todavía no hay recursos disponibles en este idioma.'
        : 'No resources are available in this language yet.',
    download: locale === 'es' ? 'Descargar PDF' : 'Download PDF',
    uploaded: locale === 'es' ? 'Añadido' : 'Uploaded',
    admin: locale === 'es' ? 'Admin' : 'Admin',
    ctaTitle:
      locale === 'es'
        ? 'Comparte estos recursos con otros.'
        : 'Share these resources with others.',
    ctaText:
      locale === 'es'
        ? 'Puedes descargar, usar y compartir estos materiales para apoyar la misión de llevar luz a más hogares.'
        : 'You can download, use, and share these materials to support the mission of bringing light to more homes.',
    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us',
    getInvolved: locale === 'es' ? 'Involúcrate' : 'Get Involved',

    churchesLabel: locale === 'es' ? 'Para iglesias' : 'For Churches',
    churchesTitle:
      locale === 'es'
        ? '¿Cómo recibir nuestros materiales?'
        : 'How can your church receive our materials?',
    churchesText1:
      locale === 'es'
        ? 'Si deseas que tu iglesia reciba nuestros materiales de oración, evangelismo y discipulado, habla con tu pastor o líder y anímalo a contactarnos para establecer un convenio con nuestro ministerio.'
        : 'If you would like your church to receive our prayer, evangelism, and discipleship materials, speak with your pastor or leader and encourage them to contact us to establish an agreement with our ministry.',
    churchesText2:
      locale === 'es'
        ? 'A través de este acuerdo, podremos proveer materiales de forma mensual que fortalecerán el crecimiento espiritual y el alcance evangelístico de la iglesia.'
        : 'Through this agreement, we can provide monthly materials that strengthen the spiritual growth and evangelistic outreach of the church.',
    churchesText3:
      locale === 'es'
        ? 'Actualmente, ya estamos apoyando a más de 2000 iglesias en toda Cuba.'
        : 'Currently, we are already supporting more than 2,000 churches across Cuba.',
    pastorTitle:
      locale === 'es'
        ? 'Invita a tu pastor a escribirnos hoy'
        : 'Invite your pastor to contact us today',
    pastorText:
      locale === 'es'
        ? 'Comienza el proceso para que tu iglesia reciba materiales mensuales de oración, evangelismo y discipulado.'
        : 'Begin the process so your church can receive monthly prayer, evangelism, and discipleship materials.',
    contactButton: locale === 'es' ? 'Contactarnos' : 'Contact Us'
  };

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data: resourcesData, error} = await supabase
    .from('resources')
    .select('id, title, description, public_url, locale, created_at')
    .eq('locale', locale)
    .order('created_at', {ascending: false});

  const resources = (resourcesData || []) as ResourceItem[];

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
                href="/en/resources"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/resources"
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
            {copy.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
                {copy.available}
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {copy.available}
              </h2>
              <p className="text-lg text-gray-700">{copy.availableText}</p>
            </div>

            <Link
              href={`/${locale}/admin`}
              className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.admin}
            </Link>
          </div>

          {error && (
            <div className="mb-8 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
              {locale === 'es'
                ? 'No se pudieron cargar los recursos en este momento.'
                : 'Could not load resources right now.'}
            </div>
          )}

          {!error && resources.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/20 bg-white p-8 text-gray-600">
              {copy.noResources}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83a25] text-2xl text-white">
                    📄
                  </div>

                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#d83a25]">
                    {copy.uploaded}{' '}
                    {new Date(resource.created_at).toLocaleDateString()}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {resource.title}
                  </h3>

                  <p className="mb-6 text-gray-700">
                    {resource.description ||
                      (locale === 'es'
                        ? 'Recurso disponible para descargar.'
                        : 'Resource available for download.')}
                  </p>

                  <a
                    href={resource.public_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-black px-5 py-3 font-semibold text-white"
                  >
                    {copy.download}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 rounded-3xl bg-white/5 p-8 md:grid-cols-[1fr_0.8fr] md:p-12">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
                {copy.churchesLabel}
              </p>

              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                {copy.churchesTitle}
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-white/80">
                <p>{copy.churchesText1}</p>
                <p>{copy.churchesText2}</p>
                <p className="font-semibold text-white">
                  {copy.churchesText3}
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 text-[#1f1f1f] shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83a25] text-2xl text-white">
                📩
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {copy.pastorTitle}
              </h3>

              <p className="mb-6 text-gray-700">{copy.pastorText}</p>

              <Link
                href={`/${locale}/contact`}
                className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
              >
                {copy.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            {copy.label}
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.ctaTitle}
          </h2>

          <p className="mb-8 text-lg text-gray-600">{copy.ctaText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/get-involved`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.getInvolved}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              {copy.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
