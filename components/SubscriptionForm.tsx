'use client';

import {useState} from 'react';

export default function SubscriptionForm({
  locale
}: {
  locale: 'en' | 'es';
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, locale})
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Subscription failed.');
      } else {
        setSuccess(true);
        setMessage(data.message || 'Subscribed successfully.');
        setEmail('');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:flex-row sm:justify-center"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-full border border-white/20 bg-white px-5 py-3 text-black outline-none sm:max-w-md"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:opacity-60"
      >
        {loading ? 'Submitting...' : 'Subscribe'}
      </button>

      {message && (
        <p
          className={`text-sm sm:basis-full ${
            success ? 'text-green-300' : 'text-red-300'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
