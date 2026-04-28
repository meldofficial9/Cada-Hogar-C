import Link from 'next/link';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';

export default function MissionPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const copy = {
    label: locale === 'es' ? 'Misión y propósito' : 'Mission & Purpose',

    heroTitle:
      locale === 'es'
        ? 'Llevar a Cristo a todos, en toda Cuba y en nuestra generación.'
        : 'To bring Christ to everyone, throughout Cuba, in our generation.',
    heroText:
      locale === 'es'
        ? 'Servimos a la iglesia evangélica cubana equipando y movilizando creyentes con materiales de oración, evangelismo y discipulado.'
        : 'We serve the Cuban evangelical church by equipping and mobilizing believers with prayer, evangelism, and discipleship materials.',

    mission: locale === 'es' ? 'Nuestra misión' : 'Our Mission',
    missionTitle:
      locale === 'es'
        ? 'Servir, equipar y movilizar a la iglesia cubana'
        : 'Serving, equipping, and mobilizing the Cuban church',
    missionText:
      locale === 'es'
        ? 'Nuestra misión es servir a la iglesia evangélica cubana, equipando y movilizando a los creyentes con materiales de oración, evangelismo y discipulado, para que participen en compartir la verdad y el amor de Jesús con cada persona y en todo lugar.'
        : 'Our mission is to serve the Cuban evangelical church by equipping and mobilizing believers with prayer, evangelism, and discipleship materials so they can participate in sharing the truth and love of Jesus with every person and in every place.',

    purpose: locale === 'es' ? 'Nuestro propósito' : 'Our Purpose',
    purposeTitle:
      locale === 'es'
        ? 'Casa por casa, Cuba para Cristo'
        : 'House by house, Cuba for Christ',
    purposeText:
      locale === 'es'
        ? 'Creemos que cada casa en Cuba es una oportunidad para compartir a Cristo y fortalecer el crecimiento espiritual de la iglesia.'
        : 'We believe every home in Cuba is an opportunity to share Christ and strengthen the spiritual growth of the church.',

    whatWeDo: locale === 'es' ? 'Lo que hacemos' : 'What We Do',
    whatTitle:
      locale === 'es'
        ? 'Equipamos a las iglesias con materiales reproducibles.'
        : 'We equip churches with reproducible materials.',
    whatText:
      locale === 'es'
        ? 'Equipamos a las iglesias con materiales de oración, evangelismo y discipulado, para que puedan cumplir su misión de manera efectiva y reproducible en todo el país.'
        : 'We equip churches with prayer, evangelism, and discipleship materials so they can fulfill their mission effectively and reproducibly throughout the country.',

    prayer: locale === 'es' ? 'Oración' : 'Prayer',
    prayerText:
      locale === 'es'
        ? 'Materiales que fortalecen la intercesión, la dependencia de Dios y la unidad espiritual.'
        : 'Materials that strengthen intercession, dependence on God, and spiritual unity.',

    evangelism: locale === 'es' ? 'Evangelismo' : 'Evangelism',
    evangelismText:
      locale === 'es'
        ? 'Herramientas para compartir la verdad y el amor de Jesús con claridad.'
        : 'Tools to share the truth and love of Jesus with clarity.',

    discipleship: locale === 'es' ? 'Discipulado' : 'Discipleship',
    discipleshipText:
      locale === 'es'
        ? 'Recursos para acompañar el crecimiento espiritual y la formación de nuevos creyentes.'
        : 'Resources to support spiritual growth and the formation of new believers.',

    values: locale === 'es' ? 'Nuestros valores' : 'Our Values',
    valuesTitle:
      locale === 'es'
        ? 'Lo que guía nuestra misión'
        : 'What guides our mission',

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
        ? 'Ayúdanos a servir a la iglesia y alcanzar cada hogar.'
        : 'Help us serve the church and reach every home.',
    joinText:
      locale === 'es'
        ? 'Ora con nosotros, comparte recursos y participa en la visión de ver a Cuba para Cristo.'
        : 'Pray with us, share resources, and participate in the vision of seeing Cuba for Christ.',
    involved: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    viewResources: locale === 'es' ? 'Ver recursos' : 'View Resources'
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
                href="/en/mission"
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white"
              >
                EN
              </Link>
              <Link
                href="/es/mission"
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.mission}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.missionTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.missionText}
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
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.whatWeDo}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {copy.whatTitle}
            </h2>
            <p className="text-lg text-gray-600">{copy.whatText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4cf38] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.prayer}</h3>
              <p>{copy.prayerText}</p>
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
              {locale === 'es' ? 'Visión nacional' : 'National Vision'}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {copy.purposeTitle}
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              {locale === 'es'
                ? 'Casa por casa, creemos que Cuba puede ser alcanzada con el mensaje de Jesús cuando la iglesia es equipada, movilizada y unida en propósito.'
                : 'House by house, we believe Cuba can be reached with the message of Jesus when the church is equipped, mobilized, and united in purpose.'}
            </p>
            <p className="text-lg text-gray-700">
              {locale === 'es'
                ? 'Cada material, cada método y cada creyente forman parte de una misión mayor: compartir a Cristo con todos, en todo lugar.'
                : 'Every material, every method, and every believer is part of a greater mission: sharing Christ with everyone, everywhere.'}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">
                  {locale === 'es' ? 'Cada creyente' : 'Every believer'}
                </h3>
              </div>

              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">
                  {locale === 'es' ? 'Cada casa' : 'Every home'}
                </h3>
              </div>

              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">
                  {locale === 'es' ? 'Cada persona' : 'Every person'}
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
            {values.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">✔ {item}</h3>
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
              href={`/${locale}/get-involved`}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              {copy.involved}
            </Link>
            <Link
              href={`/${locale}/resources`}
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold"
            >
              {copy.viewResources}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
