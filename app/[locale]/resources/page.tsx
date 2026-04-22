import {createClient} from '@supabase/supabase-js';
import {setRequestLocale} from 'next-intl/server';

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

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {data, error} = await supabase
    .from('resources')
    .select('id, title, description, public_url, locale, created_at')
    .eq('locale', locale)
    .order('created_at', {ascending: false});

  const resources = (data || []) as ResourceItem[];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
            Free Resources
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Tools, PDFs, and materials for the community
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Browse free downloadable resources designed to inform, encourage, and support families and communities.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Library
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Available Downloads
              </h2>
            </div>
            <p className="text-gray-600">
              {resources.length} resource{resources.length === 1 ? '' : 's'} available
            </p>
          </div>

          {error && (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700">
              Could not load resources right now.
            </div>
          )}

          {!error && resources.length === 0 && (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
                📄
              </div>
              <h3 className="mb-2 text-2xl font-semibold">No resources yet</h3>
              <p className="mx-auto max-w-xl text-gray-600">
                New downloadable materials will appear here soon. Please check back later.
              </p>
            </div>
          )}

          {!error && resources.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                      📄
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                      {item.locale}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mb-6 min-h-[72px] text-gray-600">
                    {item.description || 'Free downloadable PDF resource.'}
                  </p>

                  <div className="mb-6 text-sm text-gray-500">
                    Added{' '}
                    {new Date(item.created_at).toLocaleDateString(
                      locale === 'es' ? 'es-ES' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }
                    )}
                  </div>

                  <a
                    href={item.public_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-black px-5 py-3 font-semibold text-white transition group-hover:bg-gray-800"
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
