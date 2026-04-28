import Image from 'next/image';
import Link from 'next/link';
import {createClient} from '@supabase/supabase-js';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import SubscriptionForm from '@/components/SubscriptionForm';
import HomeHeroCarousel from '@/components/HomeHeroCarousel';

export const dynamic = 'force-dynamic';

export default async function HomePage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);
  const t = await getTranslations();

  const copy = {
    about: locale === 'es' ? 'Acerca de' : 'About',
    mission: locale === 'es' ? 'Misión' : 'Mission',
    resources: locale === 'es' ? 'Recursos' : 'Resources',
    getInvolved: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    contact: locale === 'es' ? 'Contacto' : 'Contact',
    give: locale === 'es' ? 'Donar' : 'Give',

    learnMore: locale === 'es' ? 'Conocer más' : 'Learn More',
    supportMission: locale === 'es' ? 'Apoyar la misión' : 'Support the Mission',

    featuredArticle: locale === 'es' ? 'Artículo destacado mensual' : 'Featured Monthly Article',
    storiesVision: locale === 'es'
      ? 'Historias, visión y actualizaciones de la misión'
      : 'Stories, vision, and updates from the mission',
    april: locale === 'es' ? 'Abril 2026' : 'April 2026',
    prayerTitle: locale === 'es'
      ? 'La oración que transforma hogares'
      : 'Prayer that transforms homes',
    prayerText: locale === 'es'
      ? 'Descubre cómo la oración constante, el alcance comunitario y la fe en acción están trayendo esperanza a los hogares en Cuba.'
      : 'Discover how consistent prayer, community outreach, and faith-filled action are bringing hope into homes across Cuba.',
    readArticle: locale === 'es' ? 'Leer artículo' : 'Read Article',

    ourFocus: locale === 'es' ? 'Nuestro enfoque' : 'Our Focus',
    serveFamilies: locale === 'es'
      ? 'Cómo servimos a las familias y comunidades'
      : 'How we serve families and communities',
    serveText: locale === 'es'
      ? 'Queremos que cada hogar encuentre esperanza, fe y apoyo práctico a través de un alcance centrado en Cristo.'
      : 'We want every home to encounter hope, faith, and practical support through Christ-centered outreach.',

    faith: locale === 'es' ? 'Fe' : 'Faith',
    faithText: locale === 'es'
      ? 'Compartiendo el mensaje de Jesús con familias, niños y comunidades.'
      : 'Sharing the message of Jesus with families, children, and communities.',
    support: locale === 'es' ? 'Apoyo' : 'Support',
    supportText: locale === 'es'
      ? 'Brindando ánimo, recursos y cuidado práctico donde más se necesita.'
      : 'Providing encouragement, resources, and practical care where it is needed most.',
    community: locale === 'es' ? 'Comunidad' : 'Community',
    communityText: locale === 'es'
      ? 'Construyendo relaciones duraderas que fortalecen hogares y reflejan el amor de Dios.'
      : 'Building lasting relationships that strengthen homes and reflect God’s love.',

    ourMission: locale === 'es' ? 'Nuestra misión' : 'Our Mission',
    missionCardText: locale === 'es'
      ? 'Conoce cómo La Hora de la Luz trae esperanza a las familias por medio de la fe y la acción.'
      : 'Learn how La Hora de la Luz is bringing hope to families through faith and action.',
    learnMoreArrow: locale === 'es' ? 'Conocer más →' : 'Learn More →',

    resourcesText: locale === 'es'
      ? 'Explora herramientas, actualizaciones y contenido que ayudan a las personas a conectarse y servir.'
      : 'Explore tools, updates, and content that help people connect and serve.',
    exploreResources: locale === 'es' ? 'Explorar recursos →' : 'Explore Resources →',

    getInvolvedText: locale === 'es'
      ? 'Únete al trabajo por medio de la oración, colaboración, donación y apoyo comunitario.'
      : 'Join the work through prayer, partnership, giving, and community support.',
    joinUs: locale === 'es' ? 'Únete →' : 'Join Us →',

    impact: locale === 'es' ? 'Impacto' : 'Impact',
    impactTitle: locale === 'es'
      ? 'Construyendo una comunidad con propósito'
      : 'Building a community with purpose',
    impactText: locale === 'es'
      ? 'Cada oración, cada colaboración y cada acto de generosidad ayuda a alcanzar más hogares.'
      : 'Every prayer, every partnership, and every act of generosity helps reach more homes.',
    familiesReached: locale === 'es' ? 'Familias alcanzadas' : 'Families reached',
    communityEfforts: locale === 'es' ? 'Esfuerzos comunitarios' : 'Community efforts',
    languagesSupported: locale === 'es' ? 'Idiomas disponibles' : 'Languages supported',

    stayConnected: locale === 'es' ? 'Mantente conectado' : 'Stay Connected',
    subscribeTitle: locale === 'es'
      ? 'Suscríbete para recibir actualizaciones y ánimo'
      : 'Subscribe for updates and encouragement',
    subscribeText: locale === 'es'
      ? 'Recibe actualizaciones del ministerio, motivos de oración, nuevos recursos e historias de lo que Dios está haciendo por medio de La Hora de la Luz.'
      : 'Receive ministry updates, prayer needs, new resources, and stories of what God is doing through La Hora de la Luz.',

    upcomingEvents: locale === 'es' ? 'Próximos eventos' : 'Upcoming Events',
    joinEvents: locale === 'es'
      ? 'Únete a las próximas reuniones de GoCuba'
      : 'Join upcoming GoCuba gatherings',
    eventsText: locale === 'es'
      ? 'Mantente conectado con noches de oración, reuniones ministeriales y oportunidades para participar.'
      : 'Stay connected with prayer nights, ministry gatherings, and opportunities to participate.',
    viewAllEvents: locale === 'es' ? 'Ver todos los eventos' : 'View All Events',
    noEvents: locale === 'es'
      ? 'No hay eventos disponibles todavía.'
      : 'No upcoming events available yet.',
    timeTba: locale === 'es' ? 'Hora por confirmar' : 'Time TBA',
    locationTba: locale === 'es' ? 'Lugar por confirmar' : 'Location TBA',
    eventDefault: locale === 'es'
      ? 'Únete a nosotros mientras oramos, nos reunimos y seguimos avanzando en la misión.'
      : 'Join us as we gather, pray, and continue building momentum for the mission.',
    learnMoreSimple: locale === 'es' ? 'Ver más' : 'Learn More',

    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us',
    stayConnectedMinistry: locale === 'es'
      ? 'Mantente conectado con el ministerio'
      : 'Stay connected with the ministry',
    contactText: locale === 'es'
      ? 'Comunícate con nosotros para preguntas, colaboración, oración o actualizaciones del ministerio.'
      : 'Reach out for questions, partnership opportunities, prayer, or ministry updates.',
    email: locale === 'es' ? 'Correo electrónico' : 'Email',
    emailText: locale === 'es'
      ? 'Escríbenos directamente para preguntas y actualizaciones del ministerio.'
      : 'Contact us directly for ministry questions and updates.',
    phone: locale === 'es' ? 'Teléfono' : 'Phone',
    phoneText: locale === 'es'
      ? 'Llámanos para comunicación directa y apoyo.'
      : 'Call us for direct communication and support.',
    instagramText: locale === 'es'
      ? 'Síguenos para historias, actualizaciones, oración y contenido del ministerio.'
      : 'Follow us for stories, updates, prayer, and ministry content.',
    goContact: locale === 'es' ? 'Ir a la página de contacto' : 'Go to Contact Page',

    ctaTitle: locale === 'es'
      ? 'Sé parte de lo que Dios está haciendo por medio de La Hora de la Luz'
      : 'Be part of what God is doing through La Hora de la Luz',
    ctaText: locale === 'es'
      ? 'Colabora con nosotros en oración, generosidad y acción para llevar esperanza a más hogares.'
      : 'Partner with us in prayer, generosity, and action to bring hope to more homes.',
    giveNow: locale === 'es' ? 'Donar ahora' : 'Give Now',

    footerText: locale === 'es'
      ? 'Sirviendo hogares, fortaleciendo la fe y construyendo comunidad con propósito.'
      : 'Serving homes, strengthening faith, and building community with purpose.',
    connect: locale === 'es' ? 'Conectar' : 'Connect'
  };

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data: eventsData} = await supabase
    .from('events')
    .select('id, title, event_date, event_time, location, description')
    .eq('audience', 'gocuba')
    .order('event_date', {ascending: true})
    .limit(3);

  const events = eventsData || [];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={`/${locale}`} className="flex items-center">
            <div className="rounded-2xl bg-white p-3">
              <Image
                src="/logos/lahoradelaluz.png"
                alt="La Hora de la Luz logo"
                width={360}
                height={160}
                className="h-24 w-auto object-contain md:h-28"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href={`/${locale}/about`}>{copy.about}</Link>
            <Link href={`/${locale}/mission`}>{copy.mission}</Link>
            <Link href={`/${locale}/resources`}>{copy.resources}</Link>
            <Link href={`/${locale}/get-involved`}>{copy.getInvolved}</Link>
            <Link href={`/${locale}/contact`}>{copy.contact}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/en" className="rounded-full border border-gray-300 px-3 py-1 text-sm">
              EN
            </Link>
            <Link href="/es" className="rounded-full border border-gray-300 px-3 py-1 text-sm">
              ES
            </Link>
            <Link
              href={`/${locale}/give`}
              className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white md:inline-block"
            >
              {copy.give}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <HomeHeroCarousel />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white md:py-36">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/80">
              La Hora de la Luz
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              {t('hero.headline')}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/85 md:text-xl">
              {t('hero.sub')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/about`} className="rounded-full bg-white px-6 py-3 font-semibold text-black">
                {copy.learnMore}
              </Link>
              <Link href={`/${locale}/give`} className="rounded-full border border-white px-6 py-3 font-semibold text-white">
                {copy.supportMission}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.featuredArticle}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{copy.storiesVision}</h2>
          </div>

          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#f6f0df] shadow-sm md:grid-cols-2">
            <div className="h-80 bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="p-8 md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d83a25]">
                {copy.april}
              </p>

              <h3 className="mb-4 text-3xl font-bold leading-tight">{copy.prayerTitle}</h3>

              <p className="mb-6 text-lg text-gray-700">{copy.prayerText}</p>

              <Link href={`/${locale}/about`} className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white">
                {copy.readArticle}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.ourFocus}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{copy.serveFamilies}</h2>
            <p className="text-lg text-gray-700">{copy.serveText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.faith}</h3>
              <p className="text-gray-800">{copy.faithText}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.support}</h3>
              <p className="text-white/85">{copy.supportText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.community}</h3>
              <p className="text-white/85">{copy.communityText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl bg-[#f6f0df] shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-bold">{copy.ourMission}</h3>
                <p className="mb-5 text-gray-700">{copy.missionCardText}</p>
                <Link href={`/${locale}/mission`} className="font-semibold underline">
                  {copy.learnMoreArrow}
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#f6f0df] shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-bold">{copy.resources}</h3>
                <p className="mb-5 text-gray-700">{copy.resourcesText}</p>
                <Link href={`/${locale}/resources`} className="font-semibold underline">
                  {copy.exploreResources}
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#f6f0df] shadow-sm">
              <div className="h-56 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-7">
                <h3 className="mb-3 text-2xl font-bold">{copy.getInvolved}</h3>
                <p className="mb-5 text-gray-700">{copy.getInvolvedText}</p>
                <Link href={`/${locale}/get-involved`} className="font-semibold underline">
                  {copy.joinUs}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">{copy.impact}</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{copy.impactTitle}</h2>
            <p className="text-lg text-white/75">{copy.impactText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-5xl font-bold">100+</p>
              <p className="text-white/70">{copy.familiesReached}</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">25+</p>
              <p className="text-white/70">{copy.communityEfforts}</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">2</p>
              <p className="text-white/70">{copy.languagesSupported}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#1f1f1f] px-8 py-12 text-white shadow-sm md:px-12 md:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
                {copy.stayConnected}
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">{copy.subscribeTitle}</h2>
              <p className="mb-8 text-lg text-white/80">{copy.subscribeText}</p>
              <SubscriptionForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
                {copy.upcomingEvents}
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{copy.joinEvents}</h2>
              <p className="text-lg text-gray-700">{copy.eventsText}</p>
            </div>

            <Link href={`/${locale}/GoCuba`} className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white">
              {copy.viewAllEvents}
            </Link>
          </div>

          {events.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/20 bg-[#f6f0df] p-8 text-gray-600">
              {copy.noEvents}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {events.map((event) => (
                <div key={event.id} className="rounded-3xl bg-[#f6f0df] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#d83a25]">
                    {event.event_date}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold">{event.title}</h3>
                  <p className="mb-5 text-gray-700">
                    {event.description || copy.eventDefault}
                  </p>
                  <div className="mb-6 text-sm text-gray-500">
                    <p>{event.event_time || copy.timeTba}</p>
                    <p>{event.location || copy.locationTba}</p>
                  </div>
                  <Link href={`/${locale}/GoCuba`} className="font-semibold text-black underline">
                    {copy.learnMoreSimple}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.contactUs}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{copy.stayConnectedMinistry}</h2>
            <p className="text-lg text-gray-700">{copy.contactText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                ✉️
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{copy.email}</h3>
              <p className="mb-4 text-gray-600">{copy.emailText}</p>
              <a href="mailto:gocuba@horadelaluz.org" className="font-semibold text-black underline">
                gocuba@horadelaluz.org
              </a>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                📞
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{copy.phone}</h3>
              <p className="mb-4 text-gray-600">{copy.phoneText}</p>
              <a href="tel:+5351102875" className="font-semibold text-black underline">
                +5351102875
              </a>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                📷
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Instagram</h3>
              <p className="mb-4 text-gray-600">{copy.instagramText}</p>
              <a
                href="https://instagram.com/lahoradelaluz.cuba"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-black underline"
              >
                @lahoradelaluz.cuba
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link href={`/${locale}/contact`} className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white">
              {copy.goContact}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">{copy.ctaTitle}</h2>
          <p className="mb-8 text-lg text-gray-600">{copy.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/give`} className="rounded-full bg-black px-6 py-3 font-semibold text-white">
              {copy.giveNow}
            </Link>
            <Link href={`/${locale}/contact`} className="rounded-full border border-gray-300 px-6 py-3 font-semibold">
              {copy.contactUs}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-[#f6f0df]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-bold">La Hora de la Luz</h3>
            <p className="text-gray-600">{copy.footerText}</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">{copy.about}</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/about`}>{copy.about}</Link>
              <Link href={`/${locale}/mission`}>{copy.mission}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">{copy.resources}</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/resources`}>{copy.resources}</Link>
              <Link href={`/${locale}/get-involved`}>{copy.getInvolved}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">{copy.connect}</h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <Link href={`/${locale}/contact`}>{copy.contact}</Link>
              <Link href={`/${locale}/give`}>{copy.give}</Link>
              <Link href={`/${locale}/GoCuba`}>GoCuba</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
