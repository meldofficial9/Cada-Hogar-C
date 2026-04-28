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
    missionVision: locale === 'es' ? 'Misión y visión' : 'Mission & Vision',
    heroTitle:
      locale === 'es'
        ? 'Un ministerio creado para llevar la luz de Cristo a hogares y comunidades.'
        : 'A ministry created to bring the light of Christ into homes and communities.',
    heroText:
      locale === 'es'
        ? 'La Hora de la Luz existe para movilizar creyentes, fortalecer familias y compartir el evangelio por medio de oración, recursos, alcance y conexión comunitaria.'
        : 'La Hora de la Luz exists to mobilize believers, strengthen families, and share the gospel through prayer, resources, outreach, and community connection.',

    vision: locale === 'es' ? 'Nuestra visión' : 'Our Vision',
    visionTitle:
      locale === 'es'
        ? 'Ver hogares iluminados por Cristo'
        : 'Seeing homes illuminated by Christ',
    visionText:
      locale === 'es'
        ? 'Nuestra visión es ver familias, comunidades e iglesias fortalecidas por la luz del evangelio, caminando en esperanza, oración y propósito.'
        : 'Our vision is to see families, communities, and churches strengthened by the light of the gospel, walking in hope, prayer, and purpose.',

    mission: locale === 'es' ? 'Nuestra misión' : 'Our Mission',
    missionTitle:
      locale === 'es'
        ? 'Movilizar, equipar y alcanzar'
        : 'Mobilize, equip, and reach',
    missionText:
      locale === 'es'
        ? 'Nuestra misión es movilizar a la iglesia, equipar creyentes con recursos prácticos y llevar el mensaje de Jesús a hogares y territorios que necesitan esperanza.'
        : 'Our mission is to mobilize the church, equip believers with practical resources, and bring the message of Jesus to homes and territories that need hope.',

    whatWeDo: locale === 'es' ? '¿Qué hacemos?' : 'What We Do',
    whatTitle:
      locale === 'es'
        ? 'Trabajamos para que el evangelio llegue con claridad, amor y propósito.'
        : 'We work so the gospel reaches people with clarity, love, and purpose.',
    whatText:
      locale === 'es'
        ? 'Desarrollamos esfuerzos ministeriales que conectan oración, liderazgo, recursos, métricas, discipulado y alcance comunitario.'
        : 'We develop ministry efforts that connect prayer, leadership, resources, metrics, discipleship, and community outreach.',

    churchCall:
      locale === 'es'
        ? 'Convocación a la iglesia'
        : 'Calling the Church',
    churchCallText:
      locale === 'es'
        ? 'Invitamos a creyentes e iglesias a participar activamente en oración, evangelismo, servicio y discipulado.'
        : 'We invite believers and churches to actively participate in prayer, evangelism, service, and discipleship.',

    mapping: locale === 'es' ? 'Mapeo y métrica' : 'Mapping & Metrics',
    mappingText:
      locale === 'es'
        ? 'Observamos territorios, necesidades y avances para servir con intención, orden y claridad.'
        : 'We observe territories, needs, and progress so we can serve with intention, order, and clarity.',

    groups: locale === 'es' ? 'Grupos de Cristo' : 'Christ Groups',
    groupsText:
      locale === 'es'
        ? 'Apoyamos espacios donde las personas puedan crecer en fe, oración, comunidad y conocimiento de la Palabra.'
        : 'We support spaces where people can grow in faith, prayer, community, and knowledge of the Word.',

    shareable:
      locale === 'es'
        ? 'Mensajes repartibles'
        : 'Shareable Messages',
    shareableText:
      locale === 'es'
        ? 'Creamos y compartimos materiales con mensajes del evangelio que puedan llegar a hogares, vecinos y comunidades.'
        : 'We create and share gospel materials that can reach homes, neighbors, and communities.',

    leadership:
      locale === 'es' ? 'Liderazgo local' : 'Local Leadership',
    leadershipText:
      locale === 'es'
        ? 'Acompañamos y fortalecemos líderes que sirven directamente en sus comunidades y territorios.'
        : 'We support and strengthen leaders who serve directly in their communities and territories.',

    projects:
      locale === 'es' ? 'Proyectos especiales' : 'Special Projects',
    projectsText:
      locale === 'es'
        ? 'Desarrollamos iniciativas creativas, campañas de oración, recursos digitales y proyectos de alcance.'
        : 'We develop creative initiatives, prayer campaigns, digital resources, and outreach projects.',

    visualSystem:
      locale === 'es'
        ? 'Nuestro sistema visual'
        : 'Our Visual System',
    visualTitle:
      locale === 'es'
        ? 'Una misión comunicada con luz, orden y consistencia.'
        : 'A mission communicated with light, order, and consistency.',
    visualText1:
      locale === 'es'
        ? 'La identidad de La Hora de la Luz utiliza una paleta cálida, contraste fuerte, recursos editoriales, íconos simples y una arquitectura visual diseñada para comunicar esperanza.'
        : 'La Hora de la Luz uses a warm palette, strong contrast, editorial resources, simple icons, and a visual system designed to communicate hope.',
    visualText2:
      locale === 'es'
        ? 'Esta estética nos ayuda a mantener claridad en publicaciones, recursos, banners, redes sociales y materiales ministeriales.'
        : 'This aesthetic helps us stay clear and consistent across publications, resources, banners, social media, and ministry materials.',

    clearMessage:
      locale === 'es' ? 'Mensaje claro' : 'Clear Message',
    clearMessageText:
      locale === 'es'
        ? 'Comunicamos el evangelio con intención y dirección.'
        : 'We communicate the gospel with intention and direction.',

    warmIdentity:
      locale === 'es' ? 'Identidad cálida' : 'Warm Identity',
    warmIdentityText:
      locale === 'es'
        ? 'Usamos colores y formas que transmiten cercanía y esperanza.'
        : 'We use colors and shapes that communicate closeness and hope.',

    digitalResources:
      locale === 'es' ? 'Recursos digitales' : 'Digital Resources',
    digitalResourcesText:
      locale === 'es'
        ? 'Creamos herramientas visuales para servir mejor a la comunidad.'
        : 'We create visual tools to better serve the community.',

    values:
      locale === 'es' ? 'Valores principales' : 'Core Values',
    valuesTitle:
      locale === 'es'
        ? 'Lo que guía nuestra misión'
        : 'What guides our mission',

    prayer: locale === 'es' ? 'Oración' : 'Prayer',
    gospel: locale === 'es' ? 'Evangelio' : 'Gospel',
    community: locale === 'es' ? 'Comunidad' : 'Community',
    faithfulness: locale === 'es' ? 'Fidelidad' : 'Faithfulness',

    join:
      locale === 'es' ? 'Únete a la misión' : 'Join the Mission',
    joinTitle:
      locale === 'es'
        ? 'Sé parte de llevar luz a más hogares.'
        : 'Be part of bringing light to more homes.',
    joinText:
      locale === 'es'
        ? 'Puedes participar orando, compartiendo recursos, sirviendo, apoyando proyectos y conectando a otros con esta misión.'
        : 'You can participate by praying, sharing resources, serving, supporting projects, and connecting others to this mission.',
    involved: locale === 'es' ? 'Involúcrate' : 'Get Involved',
    viewResources:
      locale === 'es' ? 'Ver recursos' : 'View Resources'
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
            {copy.missionVision}
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
              {copy.vision}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.visionTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.visionText}
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.mission}
            </p>
            <h2 className="mb-5 text-3xl font-bold">{copy.missionTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {copy.missionText}
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
              <h3 className="mb-3 text-2xl font-bold">{copy.churchCall}</h3>
              <p>{copy.churchCallText}</p>
            </div>

            <div className="rounded-3xl bg-[#6d8352] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.mapping}</h3>
              <p className="text-white/85">{copy.mappingText}</p>
            </div>

            <div className="rounded-3xl bg-[#3f7ea9] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.groups}</h3>
              <p className="text-white/85">{copy.groupsText}</p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.shareable}</h3>
              <p>{copy.shareableText}</p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.leadership}</h3>
              <p>{copy.leadershipText}</p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f6f0df] p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold">{copy.projects}</h3>
              <p>{copy.projectsText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0df] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#d83a25]">
              {copy.visualSystem}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {copy.visualTitle}
            </h2>
            <p className="mb-4 text-lg text-gray-700">{copy.visualText1}</p>
            <p className="text-gray-700">{copy.visualText2}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[#d83a25] p-6 text-white">
                <h3 className="text-2xl font-bold">{copy.clearMessage}</h3>
                <p className="mt-2 text-white/85">{copy.clearMessageText}</p>
              </div>

              <div className="rounded-2xl bg-[#f4cf38] p-6">
                <h3 className="text-2xl font-bold">{copy.warmIdentity}</h3>
                <p className="mt-2 text-gray-800">{copy.warmIdentityText}</p>
              </div>

              <div className="rounded-2xl bg-[#3f7ea9] p-6 text-white">
                <h3 className="text-2xl font-bold">{copy.digitalResources}</h3>
                <p className="mt-2 text-white/85">
                  {copy.digitalResourcesText}
                </p>
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

          <div className="grid gap-6 md:grid-cols-4">
            {[copy.prayer, copy.gospel, copy.community, copy.faithfulness].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
                >
                  <h3 className="text-2xl font-semibold">{item}</h3>
                </div>
              )
            )}
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
