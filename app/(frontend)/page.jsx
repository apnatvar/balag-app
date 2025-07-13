import React from 'react';
import SideMenu from '@/components/sideMenu';
import IndexOverlay from '@/components/indexOverlay';
import IndexWorkSummarySection from '@/components/indexWorkSummary';
import IndexStatsSection from '@/components/indexStats';
import IndexMapSection from '@/components/indexMapSection';
import '@/app/styles/global.css';
import '@/app/styles/index.css';

export default function App(){
  return (
    <html lang="en">  
      <body>
      {/* Right Side Expandable Menu */}

      <SideMenu />
          <IndexOverlay />
          <IndexStatsSection />
          <IndexWorkSummarySection />
          <IndexMapSection />
          {indexHeroCarousel()}
          {indexTrailerSection()}
          {indexAutoCarouselSection()}
          
          <section id="section4" className="footer">
            <div className="footer-content">
              <input type="image" id="hiddenImageInput" />
              <p>© 2023 Balag. All rights reserved.</p>
              <p>Made with ❤️ by <a href="https://example.com">Your Name</a></p>
            </div>
          </section>
        </body>
        </html>
  );

  function indexAutoCarouselSection() {
    return <section id="section5" className="gallery-container">
      {/* <h2 className="section-heading">I think it is best to delete this heading</h2> */}
      <div className="carouselgallery" id="carousel-gallery">
        <div className="carousel-gallery-row" id="row-1"></div>
        <div className="carousel-gallery-row" id="row-2"></div>
        <div className="carousel-gallery-row" id="row-3"></div>
        <div className="carousel-gallery-row" id="row-4"></div>
      </div>
    </section>;
  }

  function indexTrailerSection() {
    return <section id="section2" className="trailer-section">
      <h2 className="section-heading">Watch a Trailer</h2>

      <div className="filter-buttons">
        <button data-filter="recents" className="filter-btn active">Recents</button>
        <button data-filter="favourites" className="filter-btn">Favourites</button>
        <button data-filter="international" className="filter-btn">International</button>
        <button data-filter="celebrities" className="filter-btn">Celebrities</button>
        <button data-filter="classics" className="filter-btn">Classics</button>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" id="carouselTrack">
          {/* Dynamically inserted carousel items go here */}
        </div>
        <div className="carousel-controls">
          <button className="carousel-next">See More..</button>
        </div>
      </div>
    </section>;
  }

  function indexHeroCarousel() {
    return <section id="section1" className="hero">
      <div id="hero-carousel" className="hero-carousel">
        <button className="nav-button left">&#9664;</button>
        <button className="nav-button right">&#9654;</button>
        {/* Videos will be injected here by JS */}
      </div>
    </section>;
  }
}

