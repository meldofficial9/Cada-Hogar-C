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

type EventItem = {
  id: string;
  title: string;
  event_date: string;
  event_time: string | null;
  location: string | null;
  description: string | null;
  audience: string;
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
  const [resourcesLoading, setResourcesLoading] = useState(true);
  const [deletingResourceId, setDeletingResourceId] = useState('');

  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventAudience, setEventAudience] = useState('lahora');

  const [events, setEvents] = useState<EventItem[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventLoading, setEventLoading] = useState(false);
  const [deletingEventId, setDeletingEventId] = useState('');

  async function loadResources() {
    try {
      setResourcesLoading(true);

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
      setResourcesLoading(false);
    }
  }

  async function loadEvents() {
    try {
      setEventsLoading(true);

      if (!supabase) {
        setMessage('Supabase is not configured.');
        return;
      }

      const {data, error} = await supabase
        .from('events')
        .select('id, title, event_date, event_time, location, description, audience, created_at')
        .order('created_at', {ascending: false});

      if (error) {
        setMessage(error.message);
      } else {
        setEvents(data || []);
      }
    } finally {
      setEventsLoading(false);
    }
  }

  useEffect(() => {
    loadResources();
    loadEvents();
  }, []);

  async function handleUploadResource(e: React.FormEvent) {
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

  async function handleDeleteResource(id: string, filePath: string) {
    if (!password) {
      setMessage('Enter the admin password first.');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this resource?'
    );

    if (!confirmed) return;

    setDeletingResourceId(id);
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

      if (!res.ok) {
        setMessage(data.error || 'Delete failed.');
      } else {
        setMessage('Resource deleted successfully.');
        await loadResources();
      }
    } catch {
      setMessage('Something went wrong while deleting.');
    } finally {
      setDeletingResourceId('');
    }
  }

  async function handleCreateEvent(e: React.FormEvent) {
    e.preventDefault();
    setEventLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/events/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          password,
          title: eventTitle,
          event_date: eventDate,
          event_time: eventTime,
          location: eventLocation,
          description: eventDescription,
          audience: eventAudience
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Could not create event.');
      } else {
        setMessage('Event created successfully.');
        setEventTitle('');
        setEventDate('');
        setEventTime('');
        setEventLocation('');
        setEventDescription('');
        setEventAudience('lahora');
        await loadEvents();
      }
    } catch {
      setMessage('Something went wrong while creating the event.');
    } finally {
      setEventLoading(false);
    }
  }

  async function handleDeleteEvent(id: string) {
    if (!password) {
      setMessage('Enter the admin password first.');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this event?'
    );

    if (!confirmed) return;

    setDeletingEventId(id);
    setMessage('');

    try {
      const res = await fetch('/api/events/delete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Could not delete event.');
      } else {
        setMessage('Event deleted successfully.');
        await loadEvents();
      }
    } catch {
      setMessage('Something went wrong while deleting the event.');
    } finally {
      setDeletingEventId('');
    }
  }

  function getAudienceLabel(audience: string) {
    if (audience === 'gocuba') return 'GoCuba';
    if (audience === 'lahora') return 'La Hora de la Luz';
    return audience || 'Unknown';
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
            Admin Panel
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Manage resources and events
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Upload PDF resources, manage downloadable files, and create events for La Hora de la Luz or GoCuba.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {message && (
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
              {message}
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-2">
            <form
              onSubmit={handleUploadResource}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-2 text-2xl font-semibold">Upload Resource</h2>
              <p className="mb-8 text-gray-600">
                Add a downloadable PDF for English or Spanish visitors.
              </p>

              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block font-medium">Title</label>
                  <input
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter resource title"
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
                    placeholder="Enter a short description"
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
                    placeholder="Enter admin password"
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
            </form>

            <form
              onSubmit={handleCreateEvent}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-2 text-2xl font-semibold">Create Event</h2>
              <p className="mb-8 text-gray-600">
                Choose whether this event belongs to La Hora de la Luz or GoCuba.
              </p>

              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block font-medium">Event Audience</label>
                  <select
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={eventAudience}
                    onChange={(e) => setEventAudience(e.target.value)}
                  >
                    <option value="lahora">La Hora de la Luz</option>
                    <option value="gocuba">GoCuba</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">Event Title</label>
                  <input
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Noche de oración / GoCuba Vision Night"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Event Date</label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Event Time</label>
                  <input
                    type="time"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Location</label>
                  <input
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Miami, Florida / Online / Cuba"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Description</label>
                  <textarea
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    rows={4}
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Short event description"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={eventLoading}
                  className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
                >
                  {eventLoading ? 'Creating...' : 'Create Event'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Existing Resources</h2>
                  <p className="mt-2 text-gray-600">
                    Remove outdated or incorrect PDF files.
                  </p>
                </div>
                <p className="text-sm text-gray-500">{resources.length} total</p>
              </div>

              {resourcesLoading ? (
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
                          onClick={() =>
                            handleDeleteResource(item.id, item.file_path)
                          }
                          disabled={deletingResourceId === item.id}
                          className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                        >
                          {deletingResourceId === item.id
                            ? 'Deleting...'
                            : 'Delete'}
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

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Existing Events</h2>
                  <p className="mt-2 text-gray-600">
                    Manage events for both La Hora de la Luz and GoCuba.
                  </p>
                </div>
                <p className="text-sm text-gray-500">{events.length} total</p>
              </div>

              {eventsLoading ? (
                <p className="text-gray-600">Loading events...</p>
              ) : events.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-gray-600">
                  No events found yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-2xl border border-gray-200 p-5"
                    >
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                            {getAudienceLabel(event.audience)}
                          </span>

                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {event.event_date}
                            {event.event_time ? ` • ${event.event_time}` : ''}
                          </p>

                          {event.location && (
                            <p className="mt-1 text-sm text-gray-500">
                              {event.location}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteEvent(event.id)}
                          disabled={deletingEventId === event.id}
                          className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                        >
                          {deletingEventId === event.id
                            ? 'Deleting...'
                            : 'Delete'}
                        </button>
                      </div>

                      <p className="text-gray-600">
                        {event.description || 'No description provided.'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
