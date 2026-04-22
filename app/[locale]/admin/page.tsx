'use client';

import {useState} from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locale, setLocale] = useState('en');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
        setPassword('');
        setFile(null);
      }
    } catch (error) {
      setMessage('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
            Admin Panel
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Upload a new resource
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Add downloadable PDFs for your community in English or Spanish.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Resource Details</h2>
              <p className="mt-2 text-gray-600">
                Fill in the information below and upload a PDF file.
              </p>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="mb-2 block font-medium">Title</label>
                <input
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resource title"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Description</label>
                <textarea
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a short description"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Language</label>
                <select
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
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
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Uploading...' : 'Upload PDF'}
              </button>

              {message && (
                <p className="text-sm text-gray-700">{message}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
