'use client';

import Image from 'next/image';
import {useState} from 'react';

const territories = [
  {
    name: 'Havana',
    x: '35%',
    y: '32%',
    description: 'Prayer, outreach, and ministry connection in Havana.'
  },
  {
    name: 'Artemisa',
    x: '28%',
    y: '34%',
    description: 'A reached territory through local connection and prayer.'
  },
  {
    name: 'Matanzas',
    x: '44%',
    y: '35%',
    description: 'A place where GoCuba continues building relationships.'
  },
  {
    name: 'Villa Clara',
    x: '56%',
    y: '38%',
    description: 'Growing opportunities for outreach and collaboration.'
  },
  {
    name: 'Sancti Spiritus',
    x: '63%',
    y: '45%',
    description: 'Connected to the vision of reaching communities.'
  },
  {
    name: 'Baracoa',
    x: '88%',
    y: '64%',
    description: 'Focused work in homes, evangelism, and local believers.'
  }
];

export default function GoCubaInteractiveMap() {
  const [selected, setSelected] = useState(territories[0]);

  return (
    <section id="territories" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#0A66C2]">
            Cuba Outreach
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Interactive GoCuba map
          </h2>
          <p className="text-lg text-slate-600">
            Select a territory to see where GoCuba has reached.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/images/cubamapa.png"
                alt="Map of Cuba"
                width={1000}
                height={700}
                className="h-full w-full object-contain"
              />

              {territories.map((territory) => (
                <button
                  key={territory.name}
                  type="button"
                  onClick={() => setSelected(territory)}
                  className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0A66C2] ring-4 ring-white transition hover:scale-125"
                  style={{left: territory.x, top: territory.y}}
                  aria-label={territory.name}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#071B2E] p-8 text-white shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#90E0EF]">
              Selected Territory
            </p>
            <h3 className="mb-4 text-4xl font-bold">{selected.name}</h3>
            <p className="text-lg text-white/80">{selected.description}</p>

            <div className="mt-8 rounded-3xl bg-white/10 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Status
              </p>
              <p className="mt-2 text-2xl font-bold">Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
