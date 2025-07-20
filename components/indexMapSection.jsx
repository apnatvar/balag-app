import React from 'react';
import Image from 'next/image';

export default function IndexMapSection({ mapContent }) {

    return (
        <section className="map-and-international-section">
            <div className="header">
                <h2 className="text">{mapContent.sectionHeader}</h2>
            </div>

            <div className="map-and-international-wrapper">
                {/* LEFT: India Map + Textbox Below */}
                <div className="map-column">
                    <div className="svg-section">
                        <img loading="lazy" src="assets/india.svg" alt="India Map" className="india-map" />
                        <generatePins />
                    </div>
                    <div className="textbox">
                        <h3 className="heading">{mapContent.mapHeader}</h3>
                        <p className="paragraph">{mapContent.mapParagraph1}</p>
                    </div>
                </div>

                {/* RIGHT: 3 International Images with Hover Text */}
                <div className="international-column">
                <div className="international-image-box">
                    <img className="image" loading="lazy" src="assets/intLocations/loc1.jpg" alt="Paris" />
                    <div className="overlay-on-hover">
                        <h3 className="heading">Paris, France</h3>
                        <p className="paragraph">Romantic cityscapes, cinematic shots, timeless storytelling.</p>
                    </div>
                </div>

                <div className="international-image-box">
                    <img className="image" loading="lazy" src="assets/intLocations/loc2.jpg" alt="New York" />
                    <div className="overlay-on-hover">
                        <h3 className="heading">New York, USA</h3>
                        <p className="paragraph">Concrete jungles, urban energy, powerful narratives.</p>
                    </div>
                </div>

                <div className="international-image-box">
                    <img className="image" loading="lazy" src="assets/intLocations/loc3.jpg" alt="Tokyo" />
                    <div className="overlay-on-hover">
                        <h3 className="heading">Tokyo, Japan</h3>
                        <p className="paragraph">Futuristic vibes, cultural fusion, unforgettable frames.</p>
                    </div>
                </div>
                </div>
            </div>
            <generateInternationalCards cards={mapContent.mapImages} />
        </section>
    );

    function generateInternationalCards({ cards }){
        if (!Array.isArray(stats) || cards.length === 0) return null
        return (
            <div className="international-image-box">
                {cards.map((card, index) => (
                    <><Image src={card.image.url} alt={card.image.alt} loading='lazy'/><div className="overlay-on-hover" key={cards.index}>
                        <h3 className="heading">{card.heading}</h3>
                        <p className="paragraph">{card.paragraph}</p>
                    </div></>
                ))}
            </div>
        );
    }

    function generatePins({ locations }) {
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
                const { xPercent, yPercent } = latLonToPercent(location.latitude, location.longitude);
                    return (
                    <>    
                        <div
                            key={index}
                            className="map-pin"
                            style={{
                                left: `${xPercent}%`,
                                top: `${yPercent}%`,
                            }}
                            data-location={location.name}
                            data-link={location.link}
                            onClick={() => window.location.href = location.link}
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