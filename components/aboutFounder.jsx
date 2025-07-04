import React from "react";

export default function AboutFounderSection() {
    return (
        <section className="founder-section">
            <h2 className="heading">Founders</h2>
            <div className="founders">
                <div className="founder">
                    <img 
                        className="image"
                        loading="lazy"
                        src="/assets/about-us/neeraj-singh.jpg"
                        alt="Neeraj Singh" />
                    <h4 className="name">Neeraj "Guddu" Singh</h4>
                    <p className="designation">Founder</p>
                </div>
                <div className="founder">
                    <img 
                        className="image"
                        loading="lazy"
                        src="/assets/about-us/vinod-singh.jpg"
                        alt="Vinod Singh" />
                    <h4 className="name">Vinod Singh</h4>
                    <p className="designation">Co-Founder</p>
                </div>
            </div>
        </section>
    );
}