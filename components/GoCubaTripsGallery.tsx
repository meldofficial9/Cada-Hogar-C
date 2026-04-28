import Image from 'next/image';

const tripImages = [
  '/images/gocuba/trips/trip-1.jpg',
  '/images/gocuba/trips/trip-2.jpg',
  '/images/gocuba/trips/trip-3.jpg',
  '/images/gocuba/trips/trip-4.jpg',
  '/images/gocuba/trips/trip-5.jpg',
  '/images/gocuba/trips/trip-6.jpg'
];

export default function GoCubaTripsGallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#0A66C2]">
            Trips to Cuba
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Moments from the mission field
          </h2>
          <p className="text-lg text-slate-600">
            A glimpse of the places, people, and moments where GoCuba has been present.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tripImages.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Image
                src={src}
                alt={`GoCuba trip photo ${index + 1}`}
                width={900}
                height={700}
                className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
