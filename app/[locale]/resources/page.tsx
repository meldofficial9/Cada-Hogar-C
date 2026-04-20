export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
          Resources
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Free Resources
        </h1>
        <p className="text-lg text-gray-700 leading-8">
          This page will display downloadable PDF resources for visitors.
        </p>

        <div className="mt-10 rounded-3xl border border-dashed border-gray-300 p-10 text-gray-600">
          No resources available yet.
        </div>
      </div>
    </main>
  );
}
