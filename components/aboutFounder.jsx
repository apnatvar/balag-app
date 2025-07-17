import React from "react";

export default function AboutFounderSection({founderContent}) {

    return (
        <section className="founder-section">
            <h2 className="heading">{founderContent.heading}</h2>
            <div className="founders">
            {generateFounderCards(founderContent.founders)}
            </div>
        </section>
    );

    function generateFounderCards(founders) {

        return founders.map((founder, index) => (
            <div className="founder" key={index}>
                <img 
                    className="image"
                    loading="lazy"
                    src={founder.image.url}
                    alt={founder.image.alt} />
                <h4 className="name">{founder.name}</h4>
                <p className="designation">{founder.designation}</p>
            </div>
        ));
    }
}