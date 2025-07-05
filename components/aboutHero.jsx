import TypewriterAndFadeAnimation from "./typewriterAndFadeAnimation";
import React, { useEffect, useState } from 'react';

export default function AboutHeroSection({ heroContent }) {

    if (!heroContent) return <p>Loading...</p>;

    return (
        <section className="about-hero">
            <div className="overlay">
                <img className="image" src={heroContent.image} alt={heroContent.imageAlt}></img>
                <img className="logo" src={heroContent.logo} alt={heroContent.logoAlt} />
                <nav className="nav">
                    {generateNavButtons(heroContent.nav)}
                </nav>
                <TypewriterAndFadeAnimation text={heroContent.title} speed="1" nameOfClass="title" />
            </div>
        </section>
    );

    function generateNavButtons(navButtons) {
        return navButtons.map((button, index) => (
            <a key={index} className="nav-buttons" href={button.href}>{button.text}</a>
        ));
    }
}