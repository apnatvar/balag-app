'use client';
import "../app/styles/components.css";
import React, { useState, useRef, useEffect } from 'react';

export default function VideoCarousel({ title, subtitle, videos }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const total = videos.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const width = containerRef.current.clientWidth;
    containerRef.current.style.transform = `translateX(${-index * (width / 3)}px)`;
  }, [index]);

  return (
    <section className="carousel-section">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="carousel-wrapper">
        <button className="nav left" onClick={prev}>‹</button>
        <div className="carousel-container" ref={containerRef}>
          {videos.map((v, i) => (
            <div className="carousel-item" key={v.id || i}>
              <img src={v.thumbnail} alt={v.title} />
              <h3>{v.title}</h3>
              <time>{new Date(v.date).toLocaleDateString()}</time>
            </div>
          ))}
        </div>
        <button className="nav right" onClick={next}>›</button>
      </div>
    </section>
  );
}
