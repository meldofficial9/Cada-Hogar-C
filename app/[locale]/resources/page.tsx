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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const {data, error} = await supabase
    .from('resources')
    .select('id, title, description, public_url, locale, created_at')
    .eq('locale', locale)
    .order('created_at', {ascending: false});

  const resources = (data || []) as ResourceItem[];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg text-gray-600 mb-10">
          Free downloadable materials for the community.
        </p>

        {error && (
          <p className="text-red-600">Could not load resources.</p>
        )}

        {!error && resources.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300 p-10 text-gray-600">
            No resources available yet.
          </div>
        )}

        {!error && resources.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-gray-200 p-6 shadow-sm"
              >
                <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mb-5 text-gray-600">
                  {item.description || 'Free PDF resource'}
                </p>

                <a
                  href={item.public_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-black px-5 py-3 font-semibold text-white"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
