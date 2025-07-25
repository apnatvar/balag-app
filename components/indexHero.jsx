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
        <p className="title">{heroContent?.title}</p>
        <button className="nav-button left" onClick={handlePrev}>
          &#9664;
        </button>
        <button className="nav-button right" onClick={handleNext}>
          &#9654;
        </button>
        {generateCarousel(heroContent?.videos)}
      </div>
    </section>
  );

  function generateCarousel(videos){
    return videos.map((item, index) => (
      <video
        key={index}
        src={item.video.url}
        alt={item.video.alt}
        className={`carousel-video ${index === current ? 'active' : ''}`}
        autoPlay
        muted
        loop
      >
        Your browser does not support HTML5 Video
      </video>
    ));
  }
}