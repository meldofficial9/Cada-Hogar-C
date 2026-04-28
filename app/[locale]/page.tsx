import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';
import SubscriptionForm from '@/components/SubscriptionForm';
import HomeHeroCarousel from '@/components/HomeHeroCarousel';

export const dynamic = 'force-dynamic';

export default async function HomePage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    about: locale === 'es' ? 'Acerca de' : 'About',
    mission: locale === 'es' ? 'Misión' : 'Mission',
    resources: locale === 'es' ? 'Recursos' : 'Resources',
    getInvolved: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    contact: locale === 'es' ? 'Contacto' : 'Contact',
    give: locale === 'es' ? 'Donar' : 'Give',

    heroTitle:
      locale === 'es'
        ? 'Casa por casa, Cuba para Cristo.'
        : 'House by house, Cuba for Christ.',
    heroText:
      locale === 'es'
        ? 'Somos un ministerio cristiano en Cuba con más de 30 años sirviendo a la iglesia, equipando creyentes con materiales de oración, evangelismo y discipulado.'
        : 'We are a Christian ministry in Cuba with more than 30 years of serving the church, equipping believers with prayer, evangelism, and discipleship materials.',
    learnMore: locale === 'es' ? 'Conocer más' : 'Learn More',
    supportMission: locale === 'es' ? 'Apoyar la misión' : 'Support the Mission',

    featuredArticle:
      locale === 'es' ? 'Nuestra visión' : 'Our Vision',
    storiesVision:
      locale === 'es'
        ? 'Llevar a Cristo a todos, en toda Cuba y en nuestra generación'
        : 'To bring Christ to everyone, throughout Cuba, in our generation',
    prayerTitle:
      locale === 'es'
        ? 'Sirviendo a la iglesia cubana'
        : 'Serving the Cuban church',
    prayerText:
      locale === 'es'
        ? 'Representamos a Every Home for Christ en la nación y existimos para apoyar a la iglesia evangélica cubana con recursos que fortalecen la oración, el evangelismo y el discipulado.'
        : 'We represent Every Home for Christ in the nation and exist to support the Cuban evangelical church with resources that strengthen prayer, evangelism, and discipleship.',
    readArticle: locale === 'es' ? 'Leer más' : 'Read More',

    ourFocus: locale === 'es' ? 'Nuestro enfoque' : 'Our Focus',
    serveFamilies:
      locale === 'es'
        ? 'Oración, evangelismo y discipulado'
        : 'Prayer, evangelism, and discipleship',
    serveText:
      locale === 'es'
        ? 'Equipamos a las iglesias con materiales prácticos y reproducibles para cumplir la Gran Comisión en cada lugar.'
        : 'We equip churches with practical and reproducible materials to fulfill the Great Commission in every place.',

    prayer: locale === 'es' ? 'Oración' : 'Prayer',
    prayerFocus:
      locale === 'es'
        ? 'Materiales que fortalecen la intercesión y la vida espiritual de la iglesia.'
        : 'Materials that strengthen intercession and the spiritual life of the church.',
    evangelism: locale === 'es' ? 'Evangelismo' : 'Evangelism',
    evangelismText:
      locale === 'es'
        ? 'Herramientas para compartir la verdad y el amor de Jesús con claridad.'
        : 'Tools to share the truth and love of Jesus with clarity.',
    discipleship: locale === 'es' ? 'Discipulado' : 'Discipleship',
    discipleshipText:
      locale === 'es'
        ? 'Recursos para acompañar el crecimiento espiritual de nuevos creyentes.'
        : 'Resources to support the spiritual growth of new believers.',

    ourMission: locale === 'es' ? 'Nuestra misión' : 'Our Mission',
    missionCardText:
      locale === 'es'
        ? 'Servimos a la iglesia evangélica cubana equipando y movilizando creyentes.'
        : 'We serve the Cuban evangelical church by equipping and mobilizing believers.',
    learnMoreArrow: locale === 'es' ? 'Conocer más →' : 'Learn More →',

    resourcesText:
      locale === 'es'
        ? 'Explora materiales de oración, evangelismo y discipulado para iglesias.'
        : 'Explore prayer, evangelism, and discipleship materials for churches.',
    exploreResources:
      locale === 'es' ? 'Explorar recursos →' : 'Explore Resources →',

    getInvolvedText:
      locale === 'es'
        ? 'Ora, comparte, sirve y ayuda a que más hogares sean alcanzados con el evangelio.'
        : 'Pray, share, serve, and help more homes be reached with the gospel.',
    joinUs: locale === 'es' ? 'Únete →' : 'Join Us →',

    impact: locale === 'es' ? 'Impacto' : 'Impact',
    impactTitle:
      locale === 'es'
        ? 'Más de 30 años sirviendo a Cuba'
        : 'More than 30 years serving Cuba',
    impactText:
      locale === 'es'
        ? 'Dios nos ha permitido apoyar a miles de iglesias en Cuba con materiales que fortalecen la misión.'
        : 'God has allowed us to support thousands of churches in Cuba with materials that strengthen the mission.',
    years: locale === 'es' ? 'Años de trayectoria' : 'Years of ministry',
    churches: locale === 'es' ? 'Iglesias apoyadas' : 'Churches supported',
    vision: locale === 'es' ? 'Cuba para Cristo' : 'Cuba for Christ',

    stayConnected: locale === 'es' ? 'Mantente conectado' : 'Stay Connected',
    subscribeTitle:
      locale === 'es'
        ? 'Suscríbete para recibir actualizaciones'
        : 'Subscribe for updates',
    subscribeText:
      locale === 'es'
        ? 'Recibe noticias del ministerio, motivos de oración, nuevos recursos e historias de lo que Dios está haciendo en Cuba.'
        : 'Receive ministry news, prayer needs, new resources, and stories of what God is doing in Cuba.',

    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us',
    stayConnectedMinistry:
      locale === 'es'
        ? 'Conéctate con el ministerio'
        : 'Connect with the ministry',
    contactText:
      locale === 'es'
        ? 'Comunícate con nosotros para preguntas, colaboración, oración o información sobre materiales para iglesias.'
        : 'Reach out for questions, partnership, prayer, or information about church materials.',
    email: locale === 'es' ? 'Correo electrónico' : 'Email',
    emailText:
      locale === 'es'
        ? 'Escríbenos para preguntas y actualizaciones del ministerio.'
        : 'Contact us for ministry questions and updates.',
    phone: locale === 'es' ? 'Teléfono' : 'Phone',
    phoneText:
      locale === 'es'
        ? 'Llámanos para comunicación directa y apoyo.'
        : 'Call us for direct communication and support.',
    instagramText:
      locale === 'es'
        ? 'Síguenos para historias, actualizaciones, oración y contenido del ministerio.'
        : 'Follow us for stories, updates, prayer, and ministry content.',
    goContact:
      locale === 'es' ? 'Ir a la página de contacto' : 'Go to Contact Page',

    ctaTitle:
      locale === 'es'
        ? 'Ayúdanos a servir a la iglesia y alcanzar más hogares.'
        : 'Help us serve the church and reach more homes.',
    ctaText:
      locale === 'es'
        ? 'Colabora con nosotros en oración, generosidad y acción para llevar a Cristo a todos, en toda Cuba y en nuestra generación.'
        : 'Partner with us in prayer, generosity, and action to bring Christ to everyone, throughout Cuba, in our generation.',
    giveNow: locale === 'es' ? 'Donar ahora' : 'Give Now',

    footerText:
      locale === 'es'
        ? 'Casa por casa, Cuba para Cristo.'
        : 'House by house, Cuba for Christ.',
    connect: locale === 'es' ? 'Conectar' : 'Connect'
  };

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
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/80">
              La Hora de la Luz
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-white/85 md:text-xl">
              {copy.heroText}
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
            <h2 className="text-3xl font-bold md:text-4xl">
              {copy.storiesVision}
            </h2>
          </div>

          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#f6f0df] shadow-sm md:grid-cols-2">
            <div className="h-80 bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold leading-tight">
                {copy.prayerTitle}
              </h3>

              <p className="mb-6 text-lg text-gray-700">
                {copy.prayerText}
              </p>

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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.serveFamilies}
            </h2>
            <p className="text-lg text-gray-700">{copy.serveText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.prayer}</h3>
              <p className="text-gray-800">{copy.prayerFocus}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.evangelism}</h3>
              <p className="text-white/85">{copy.evangelismText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{copy.discipleship}</h3>
              <p className="text-white/85">{copy.discipleshipText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              {copy.impact}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.impactTitle}
            </h2>
            <p className="text-lg text-white/75">{copy.impactText}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-5xl font-bold">30+</p>
              <p className="text-white/70">{copy.years}</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">2000+</p>
              <p className="text-white/70">{copy.churches}</p>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold">1</p>
              <p className="text-white/70">{copy.vision}</p>
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
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                {copy.subscribeTitle}
              </h2>
              <p className="mb-8 text-lg text-white/80">
                {copy.subscribeText}
              </p>
              <SubscriptionForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.contactUs}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.stayConnectedMinistry}
            </h2>
            <p className="text-lg text-gray-700">{copy.contactText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">{copy.email}</h3>
              <p className="mb-4 text-gray-600">{copy.emailText}</p>
              <a href="mailto:gocuba@horadelaluz.org" className="font-semibold text-black underline">
                gocuba@horadelaluz.org
              </a>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold">{copy.phone}</h3>
              <p className="mb-4 text-gray-600">{copy.phoneText}</p>
              <a href="tel:+5351102875" className="font-semibold text-black underline">
                +5351102875
              </a>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
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
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.ctaTitle}
          </h2>
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
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
