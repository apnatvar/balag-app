"use client";
// This file is used to create a map section with pins for locations in India and international locations

import React, { useEffect, useState, useRef } from 'react';

function GeneratePins() {
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

    const [locations, setLocations] = useState([]);
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchLocations = async () => {
        try {
            const response = await fetch('/assets/jsons/locations.json');
            const data = await response.json();
            setLocations(data);
            console.log('Locations Fetched');
        } catch (err) {
            console.error('Error fetching location data:', err);
        }
        };
        fetchLocations();
    }, []);

    return (
        locations.map((location, index) => {
            const { xPercent, yPercent } = latLonToPercent(location.lat, location.lon);
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
            })
        );
}

export default function IndexMapSection() {

    return (
        <section className="map-and-international-section">
            <div className="header">
                <h2 className="text">Film your story anywhere</h2>
            </div>

            <div className="map-and-international-wrapper">
                {/* LEFT: India Map + Textbox Below */}
                <div className="map-column">
                    <div className="svg-section">
                        <img loading="lazy" src="assets/india.svg" alt="India Map" className="india-map" />
                        <GeneratePins />
                    </div>
                    <div className="textbox">
                        <h3 className="heading">Nationwide Presence</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi consequuntur odit voluptatem laboriosam accusantium explicabo impedit ipsam dolorum voluptatum natus consectetur necessitatibus ab omnis ducimus tempore odio, dolore totam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi consequuntur odit voluptatem laboriosam accusantium explicabo impedit ipsam dolorum voluptatum natus consectetur necessitatibus ab omnis ducimus tempore odio, dolore totam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi consequuntur odit voluptatem laboriosam accusantium explicabo impedit ipsam dolorum voluptatum natus consectetur necessitatibus ab omnis ducimus tempore odio, dolore totam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a suscipit, sed exercitationem vero obcaecati mollitia rem odit incidunt nam quam inventore laudantium maiores molestias voluptas ad sapiente. Tempora, placeat.
                        </p>
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

            <div className="footer">
                <h2 className="text">Where do you want your story written?</h2>
            </div>
        </section>
    );
  }