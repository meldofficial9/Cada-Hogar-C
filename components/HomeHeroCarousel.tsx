'use client';

import {useEffect, useState} from 'react';

const images = [
  '/images/hero/cuba-1.jpg',
  '/images/hero/cuba-2.jpg',
  '/images/hero/cuba-3.jpg',
  '/images/hero/cuba-4.jpg'
];

export default function HomeHeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{backgroundImage: `url(${image})`}}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
