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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        setMessage(data.error || 'Upload failed');
      } else {
        setMessage('PDF uploaded successfully');
        setTitle('');
        setDescription('');
        setLocale('en');
        setPassword('');
        setFile(null);

        const fileInput = document.getElementById('pdfFile') as HTMLInputElement | null;
        if (fileInput) fileInput.value = '';
      }
    } catch (error) {
      setMessage('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
            Admin Panel
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upload Free PDF Resources
          </h1>
          <p className="text-lg text-gray-600">
            Add downloadable PDF materials for visitors to access from the resources page.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-800">
              Resource Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Prayer Guide for Families"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-800">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description for this PDF..."
              rows={4}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-800">
              Language
            </label>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-800">
              PDF File
            </label>
            <input
              id="pdfFile"
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full rounded-2xl border border-gray-300 px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-800">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Uploading...' : 'Upload PDF'}
          </button>

          {message && (
            <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800">
              {message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
