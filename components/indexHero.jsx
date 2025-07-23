'use client';
import { useEffect, useRef, useState } from 'react';

export default function IndexHeroSection({ heroContent }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % heroContent?.videos.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + heroContent?.videos.length) % heroContent?.videos.length);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleNext, 8000); // Auto play every 8s
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="index-hero">
      <div className="carousel">
        <button className="nav-button left" onClick={handlePrev}>
          &#9664;
        </button>
        <button className="nav-button right" onClick={handleNext}>
          &#9654;
        </button>
        {heroContent?.videos.map((video, index) => (
          <video
            key={index}
            src={video.url}
            alt={video.alt}
            className={`carousel-video ${index === current ? 'active' : ''}`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
      </div>
    </section>
  );
}
