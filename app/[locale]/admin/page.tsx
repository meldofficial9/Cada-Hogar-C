'use client';

import {useEffect, useState} from 'react';
import {supabase} from '@/lib/supabaseClient';

type ResourceItem = {
  id: string;
  title: string;
  description: string | null;
  public_url: string;
  locale: string;
  file_path: string;
  created_at: string;
};

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locale, setLocale] = useState('en');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [deletingId, setDeletingId] = useState('');

  async function loadResources() {
    try {
      setListLoading(true);

      if (!supabase) {
        setMessage('Supabase is not configured.');
        return;
      }

      const {data, error} = await supabase
        .from('resources')
        .select('id, title, description, public_url, locale, file_path, created_at')
        .order('created_at', {ascending: false});

      if (error) {
        setMessage(error.message);
      } else {
        setResources(data || []);
      }
    } finally {
      setListLoading(false);
    }
  }

  useEffect(() => {
    loadResources();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!file) {
      setMessage('Please choose a PDF file.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('locale', locale);
    formData.append('password', password);
    formData.append('file', file);

    try {
      const res = await fetch('/api/resources/upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Upload failed.');
      } else {
        setMessage('PDF uploaded successfully.');
        setTitle('');
        setDescription('');
        setFile(null);
        await loadResources();
      }
    } catch {
      setMessage('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string, filePath: string) {
  if (!password) {
    setMessage('Enter the admin password first.');
    return;
  }

  const confirmed = window.confirm(
    'Are you sure you want to delete this resource?'
  );

  if (!confirmed) return;

  setDeletingId(id);
  setMessage('');

  try {
    const res = await fetch('/api/resources/delete', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id,
        filePath,
        password
      })
    });

    const data = await res.json();
    console.log('DELETE RESPONSE:', data);

    if (!res.ok) {
      setMessage(data.error || 'Delete failed.');
    } else {
      setMessage('Resource deleted successfully.');
      await loadResources();
    }
  } catch (error) {
    console.error('DELETE ERROR:', error);
    setMessage('Something went wrong while deleting.');
  } finally {
    setDeletingId('');
  }
}

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
            Admin Panel
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Manage downloadable resources
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Upload new PDFs and remove outdated or incorrect files.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 className="mb-2 text-2xl font-semibold">Upload Resource</h2>
            <p className="mb-8 text-gray-600">
              Add a new PDF for English or Spanish visitors.
            </p>

            <div className="grid gap-6">
              <div>
                <label className="mb-2 block font-medium">Title</label>
                <input
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Description</label>
                <textarea
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Language</label>
                <select
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  value={locale}
                  onChange={(e) => setLocale(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">PDF File</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block w-full rounded-2xl border border-gray-300 px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Admin Password</label>
                <input
                  type="password"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
              >
                {loading ? 'Uploading...' : 'Upload PDF'}
              </button>
            </div>

            {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
          </form>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Existing Resources</h2>
                <p className="mt-2 text-gray-600">
                  Remove files that are outdated or incorrect.
                </p>
              </div>
              <p className="text-sm text-gray-500">{resources.length} total</p>
            </div>

            {listLoading ? (
              <p className="text-gray-600">Loading resources...</p>
            ) : resources.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-gray-600">
                No resources found yet.
              </div>
            ) : (
              <div className="space-y-4">
                {resources.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.locale.toUpperCase()} •{' '}
                          {new Date(item.created_at).toLocaleDateString()}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id, item.file_path)}
                        disabled={deletingId === item.id}
                        className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                      >
                        {deletingId === item.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>

                    <p className="mb-4 text-gray-600">
                      {item.description || 'No description provided.'}
                    </p>

                    <a
                      href={item.public_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-black underline"
                    >
                      Open PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
