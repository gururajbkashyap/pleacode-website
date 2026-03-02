import { useState, useEffect, useMemo } from 'react';

const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
];

export default function Slideshow({ order = 0 }) {
  const [index, setIndex] = useState(0);
  const images = useMemo(() => {
    const start = order % SLIDE_IMAGES.length;
    return [...SLIDE_IMAGES.slice(start), ...SLIDE_IMAGES.slice(0, start)];
  }, [order]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`slideshow-slide ${i === index ? 'active' : ''}`}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}
