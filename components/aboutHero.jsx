import TypewriterAndFadeAnimation from "./typewriterAndFadeAnimation";
import React, { useEffect, useState } from 'react';

export default function AboutHeroSection() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/section/about/element/hero')
        .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch section');
            return res.json();
        })
        .then(setContent)
        .catch((err) => console.error(err));
    }, []);

    if (!content) return <p>Loading...</p>;

    return (
        <section className="about-hero">
            <div className="overlay">
                <img className="image" src={content.hero.image}></img>
                <img className="logo" src={content.hero.logo} alt="Logo" />
                <nav className="nav">
                    <a className="nav-buttons" href="#about">About</a>
                    <a className="nav-buttons" href="#work">Work</a>
                    <a className="nav-buttons" href="#team">Team</a>
                    <a className="nav-buttons" href="#gallery">Gallery</a>
                    <a className="nav-buttons" href="#contact">Contact</a>
                </nav>
                <TypewriterAndFadeAnimation text={content.hero.title} speed="1" nameOfClass="title" />
            </div>
        </section>
    );
}