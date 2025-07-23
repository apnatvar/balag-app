import React from 'react';
import Image from 'next/image';

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
                        <img loading="lazy" src="/public/assets/india.svg" alt="India Map" className="india-map" />
                        {generatePins(mapContent?.locations)}
                    </div>
                    <div className="textbox">
                        <h3 className="heading">{mapContent?.mapHeader}</h3>
                        <p className="paragraph">{mapContent?.mapParagraph1}</p>
                    </div>
                </div>

                {/* RIGHT: 3 International Images with Hover Text */}
                {generateInternationalCards(mapContent?.mapImages)}
            </div>
        </section>
    );

    function generateInternationalCards({ cards }){
        if (!Array.isArray(cards) || cards.length === 0) return null
        return (
            <div className="international-column">
                {cards.map((card, index) => (
                    <div className="international-image-box">
                        <Image src={card.image.url} alt={card.image.alt} loading='lazy'/>
                        <div className="overlay-on-hover" key={cards.index}>
                            <h3 className="heading">{card.heading}</h3>
                            <p className="paragraph">{card.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    function generatePins({ locations }) {
        if (!Array.isArray(locations) || locations.length === 0) return null
        const bounds = {
            topLat: 37.1,
            bottomLat: 8.9,
            leftLng: 68.3,
            rightLng: 97.4
        };

        const latLonToPercent = (lat, lon) => {
            const xPercent = ((lon - bounds.leftLng) / (bounds.rightLng - bounds.leftLng)) * 100;
            const yPercent = ((bounds.topLat - lat) / (bounds.topLat - bounds.bottomLat)) * 100;
            return { xPercent, yPercent };
        };

        return (
            locations.map((location, index) => {
                const { xPercent, yPercent } = latLonToPercent(location?.latitude, location?.longitude);
                    return (
                    <>    
                        <div
                            key={index}
                            className="map-pin"
                            style={{
                                left: `${xPercent}%`,
                                top: `${yPercent}%`,
                            }}
                            data-location={location?.name}
                            data-link={location?.link}
                            onClick={() => window.location.href = location?.link}
                        >
                        </div>
                        <span 
                        className="pin-label"
                        style={{
                            left: `${xPercent}%`,
                            top: `${yPercent}%`,
                        }}
                        >{location.name}</span>
                    </>
                    );
                }
            )
        );
    }
  }