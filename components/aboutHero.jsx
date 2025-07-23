import React from "react";
import TypewriterAndFadeAnimation from "./typewriterAndFadeAnimation";

export default function AboutHeroSection({heroContent}) {
    return (
        <section className="about-hero">
            <div className="overlay">
                <img className="image" src={heroContent.image.url} alt={heroContent.image.alt}></img>
                <img className="logo" src={heroContent.logo.url} alt={heroContent.logo.alt} />
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