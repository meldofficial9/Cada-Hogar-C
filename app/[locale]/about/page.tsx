import Image from 'next/image';
import Link from 'next/link';
import {setRequestLocale} from 'next-intl/server';

export default function AboutPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    about: locale === 'es' ? 'Acerca del ministerio' : 'About the Ministry',

    heroTitle:
      locale === 'es'
        ? 'Casa por casa, Cuba para Cristo.'
        : 'House by house, Cuba for Christ.',
    heroText:
      locale === 'es'
        ? 'Somos un ministerio cristiano en Cuba con más de 30 años de trayectoria, sirviendo a la iglesia cubana y representando a Every Home for Christ en la nación.'
        : 'We are a Christian ministry in Cuba with more than 30 years of history, serving the Cuban church and representing Every Home for Christ in the nation.',

    whoWeAre: locale === 'es' ? '¿Quiénes somos?' : 'Who We Are',
    whoTitle:
      locale === 'es'
        ? 'Representantes de Every Home for Christ en Cuba'
        : 'Representatives of Every Home for Christ in Cuba',
    whoText:
      locale === 'es'
        ? 'Existimos para servir a la iglesia cubana, conectados con el corazón de Jesús de cumplir la Gran Comisión y hacer realidad la visión de “Cuba para Cristo”.'
        : 'We exist to serve the Cuban church, connected to the heart of Jesus to fulfill the Great Commission and make the vision of “Cuba for Christ” a reality.',

    purpose: locale === 'es' ? 'Nuestro propósito' : 'Our Purpose',
    purposeTitle:
      locale === 'es'
        ? 'Llevar a Cristo a todos, en toda Cuba y en nuestra generación.'
        : 'To bring Christ to everyone, throughout Cuba, in our generation.',
    purposeText:
      locale === 'es'
        ? 'Creemos que cada casa en Cuba representa una oportunidad para compartir la verdad, el amor y la esperanza de Jesús.'
        : 'We believe every home in Cuba represents an opportunity to share the truth, love, and hope of Jesus.',

    missionVision:
      locale === 'es' ? 'Misión y visión' : 'Mission & Vision',
    visionTitle:
      locale === 'es'
        ? 'Servimos, equipamos y movilizamos a la iglesia cubana.'
        : 'We serve, equip, and mobilize the Cuban church.',
    visionText:
      locale === 'es'
        ? 'Nuestra misión es servir a la iglesia evangélica cubana, equipando y movilizando a los creyentes con materiales de oración, evangelismo y discipulado, para que participen en compartir la verdad y el amor de Jesús con cada persona y en todo lugar.'
        : 'Our mission is to serve the Cuban evangelical church by equipping and mobilizing believers with prayer, evangelism, and discipleship materials so they can participate in sharing the truth and love of Jesus with every person and in every place.',

    prayer: locale === 'es' ? 'Oración' : 'Prayer',
    prayerText:
      locale === 'es'
        ? 'Materiales y recursos que fortalecen la vida de oración de la iglesia.'
        : 'Materials and resources that strengthen the prayer life of the church.',

    evangelism: locale === 'es' ? 'Evangelismo' : 'Evangelism',
    evangelismText:
      locale === 'es'
        ? 'Herramientas para compartir el evangelio de manera clara, práctica y reproducible.'
        : 'Tools to share the gospel in a clear, practical, and reproducible way.',

    discipleship: locale === 'es' ? 'Discipulado' : 'Discipleship',
    discipleshipText:
      locale === 'es'
        ? 'Recursos que ayudan a fortalecer el crecimiento espiritual de los creyentes.'
        : 'Resources that help strengthen the spiritual growth of believers.',

    whatWeDo: locale === 'es' ? 'Lo que hacemos' : 'What We Do',
    whatTitle:
      locale === 'es'
        ? 'Equipamos iglesias con materiales para cumplir su misión.'
        : 'We equip churches with materials to fulfill their mission.',
    whatText1:
      locale === 'es'
        ? 'Equipamos a las iglesias con materiales de oración, evangelismo y discipulado, para que puedan cumplir su misión de manera efectiva y reproducible en todo el país.'
        : 'We equip churches with prayer, evangelism, and discipleship materials so they can fulfill their mission effectively and reproducibly throughout the country.',
    whatText2:
      locale === 'es'
        ? 'Nuestro deseo es que cada creyente sea activado, cada iglesia fortalecida y cada hogar alcanzado con el mensaje de Jesús.'
        : 'Our desire is for every believer to be activated, every church strengthened, and every home reached with the message of Jesus.',

    values: locale === 'es' ? 'Nuestros valores' : 'Our Values',
    valuesTitle:
      locale === 'es'
        ? 'Principios que guían nuestro ministerio'
        : 'Principles that guide our ministry',
    value1:
      locale === 'es'
        ? 'Comprometidos con la Evangelización'
        : 'Committed to Evangelism',
    value2:
      locale === 'es'
        ? 'Impulsando el Discipulado'
        : 'Advancing Discipleship',
    value3:
      locale === 'es'
        ? 'Cada creyente tiene un llamado'
        : 'Every believer has a calling',
    value4:
      locale === 'es'
        ? 'Cada casa en Cuba es una oportunidad'
        : 'Every home in Cuba is an opportunity',
    value5:
      locale === 'es'
        ? 'Cada método es una herramienta'
        : 'Every method is a tool',
    value6:
      locale === 'es'
        ? 'Cada persona es valiosa'
        : 'Every person is valuable',

    join: locale === 'es' ? 'Únete a la misión' : 'Join the Mission',
    joinTitle:
      locale === 'es'
        ? 'Ayúdanos a servir a la iglesia y alcanzar más hogares.'
        : 'Help us serve the church and reach more homes.',
    joinText:
      locale === 'es'
        ? 'Conéctate con nosotros, accede a recursos, ora por Cuba y sé parte de esta visión: Casa por casa, Cuba para Cristo.'
        : 'Connect with us, access resources, pray for Cuba, and be part of this vision: house by house, Cuba for Christ.',
    viewResources: locale === 'es' ? 'Ver recursos' : 'View Resources',
    contactUs: locale === 'es' ? 'Contáctanos' : 'Contact Us'
  };

  const values = [
    copy.value1,
    copy.value2,
    copy.value3,
    copy.value4,
    copy.value5,
    copy.value6
  ];

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
                href="/en/about"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/about"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                ES
              </Link>
            </div>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            {copy.about}
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.whoWeAre}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.whoTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.whoText}
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.purpose}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.purposeTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.purposeText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.missionVision}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.visionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {copy.visionText}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.prayer}</h3>
              <p className="text-gray-800">{copy.prayerText}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.evangelism}</h3>
              <p className="text-white/85">{copy.evangelismText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.discipleship}</h3>
              <p className="text-white/85">{copy.discipleshipText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.whatWeDo}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {copy.whatTitle}
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              {copy.whatText1}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.whatText2}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">
                  {locale === 'es' ? 'Casa por casa' : 'House by house'}
                </h3>
              </div>
              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">
                  {locale === 'es' ? 'Cuba para Cristo' : 'Cuba for Christ'}
                </h3>
              </div>
              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">
                  {locale === 'es'
                    ? 'Oración, evangelismo y discipulado'
                    : 'Prayer, evangelism, and discipleship'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
              {copy.values}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.valuesTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">✔ {value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
            {copy.join}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {copy.joinTitle}
          </h2>
          <p className="mb-8 text-lg text-gray-600">{copy.joinText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/resources`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.viewResources}
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
