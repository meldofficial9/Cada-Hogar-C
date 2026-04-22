'use client';

import {useEffect, useState} from 'react';
import {setRequestLocale} from 'next-intl/server';
import {supabase} from '@/lib/supabaseClient';

type ResourceItem = {
  id: string;
  title: string;
  description: string | null;
  public_url: string;
  locale: string;
  created_at: string;
};

export default function ResourcesPage({
  params: {locale}
}: {
  params: {locale: 'en' | 'es'};
}) {
  setRequestLocale(locale);

  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadResources() {
      try {
        if (!supabase) {
          setError('Supabase is not configured.');
          setLoading(false);
          return;
        }

        const {data, error} = await supabase
          .from('resources')
          .select('id, title, description, public_url, locale, created_at')
          .eq('locale', locale)
          .order('created_at', {ascending: false});

        if (error) {
          setError(error.message);
        } else {
          setResources(data || []);
        }
      } catch (err) {
        setError('Failed to load resources.');
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, [locale]);

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg text-gray-600 mb-10">
          Free downloadable materials for the community.
        </p>

        {loading && <p className="text-gray-600">Loading resources...</p>}

        {error && !loading && (
          <p className="text-red-600">Could not load resources: {error}</p>
        )}

        {!loading && !error && resources.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300 p-10 text-gray-600">
            No resources available yet.
          </div>
        )}

        {!loading && !error && resources.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-gray-200 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-5">
                  {item.description || 'Free PDF resource'}
                </p>

                <a
                  href={item.public_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-black px-5 py-3 text-white font-semibold"
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
