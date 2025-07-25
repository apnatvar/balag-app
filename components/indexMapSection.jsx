import React from 'react';

export default function IndexMapSection({ mapContent }) {
    return (
        <section className="map-and-international-section">
            <div className="header">
                <h2 className="text">{mapContent?.sectionHeader}</h2>
            </div>
            <div className="map-and-international-wrapper">
                {/* LEFT: India Map + Textbox Below */}
                <div className="map-column">
                    <div className="svg-section">
                        <img src="/india.svg" alt="Map of India" className="india-map" />
                        {generatePins(mapContent?.locations)}
                    </div>
                    <div className="textbox">
                        <h3 className="heading">{mapContent?.mapHeader}</h3>
                        <p className="paragraph">{mapContent?.mapParagraph}</p>
                    </div>
                </div>
                {/* RIGHT: 3 International Images with Hover Text */}
                <div className="international-column">
                    {generateInternationalCards(mapContent?.highlightImages)}
                </div>
            </div>
        </section>
    );

    function generateInternationalCards(cards){
        if (!Array.isArray(cards) || cards.length === 0) return null
        return cards.map((card, index) => (
            <div className="international-image-box" key={index}>
                <img src={card?.image?.url} alt={card?.image?.alt} loading='lazy' className='int-image'/>
                <div className="overlay-on-hover">
                    <h3 className="heading">{card?.heading}</h3>
                    <p className="paragraph">{card?.paragraph}</p>
                </div>
            </div>
        ))
    }

    function generatePins(locations) {
        if (!Array.isArray(locations) || locations.length === 0) return null
        return locations.map((location, index) => {
            return (
                <div key={index} className="map-point-wrapper">
                    <div
                    className="map-pin"
                    style={{
                        left: `${location?.latitude}%`,
                        top: `${location?.longitude}%`,
                    }}
                    data-location={location?.name}
                    data-link={location?.link}
                    // onClick={() => window.location.href = location?.link}
                    />
                    <span
                    className="pin-label"
                    style={{
                        left: `${location?.latitude}%`,
                        top: `${location?.longitude}%`,
                    }}
                    >
                    {location?.city}
                    </span>
                </div>
            );
        })

    }
  }