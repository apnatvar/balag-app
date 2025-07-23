'use client';
import React, { useState, useRef } from 'react';

export default function IndexTrailerSection({ trailerContent }) {
  const [activeCategory, setActiveCategory] = useState('favourites');
  const carouselRef = useRef(null);

  const categories = ['favourites', 'international', 'celebrities', 'classics'];

  const filteredTrailers = trailerContent?.filter(trailer =>
    activeCategory === 'all' || trailer?.categories.includes(activeCategory)
  );

  const smoothScrollBy = (distance, duration) => {
    const element = carouselRef.current;
    if (!element) return;

    const start = element.scrollLeft;
    const startTime = performance.now();

    const easeInOutQuad = t =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      element.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <section className="trailer-section">
      <h2 className="heading">{trailerContent.title}</h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            data-filter={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {filteredTrailers.map((trailer, idx) => (
            <div key={idx} className="carousel-item">
              <a href={trailer?.link}>
                <img src={trailer?.image.url} alt={trailer?.image.alt} />
              </a>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-next" onClick={() => smoothScrollBy(220, 1000)}>
            {trailerContent.next}
          </button>
        </div>
      </div>
    </section>
  );
};
