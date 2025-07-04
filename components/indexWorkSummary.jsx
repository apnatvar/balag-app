import React from "react";
import TypewriterAndFadeAnimation from "./typewriterAndFadeAnimation";

export default function IndexWorkSummarySection() {
  return (
    <section className="work-summary">
      <div className="content">
        <img className="image" src="/assets/Photos/22.jpg"></img>
        <TypewriterAndFadeAnimation text="Has fade in + typewriter animation" speed="300" nameOfClass="heading"/>
        <div className="pinstripe"></div>
        <p className="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore accusamus praesentium nostrum eius odit doloribus veniam mollitia! Placeat minus necessitatibus repudiandae error facere adipisci illo autem, provident cumque, aspernatur nesciunt.</p>
      </div>
    </section>
  );
}