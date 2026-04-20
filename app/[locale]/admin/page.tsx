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

      const text = await res.text();

      try {
        const data = JSON.parse(text);

        if (!res.ok) {
          setMessage(data.error || 'Upload failed');
        } else {
          setMessage(JSON.stringify(data));
        }
      } catch {
        setMessage(`Server returned non-JSON response: ${text.slice(0, 200)}`);
      }
    } catch {
      setMessage('Network error while uploading.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Upload Test</h1>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div>
            <label className="block mb-2 font-medium">Title</label>
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Language</label>
            <select
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">PDF File</label>
            <input
              id="pdfFile"
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Admin Password</label>
            <input
              type="password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-black px-6 py-3 text-white font-semibold"
          >
            {loading ? 'Uploading...' : 'Upload PDF'}
          </button>

          {message && <p className="text-sm text-gray-700 break-words">{message}</p>}
        </form>
      </div>
    </main>
  );
}
