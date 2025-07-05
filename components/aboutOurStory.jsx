import { s } from "framer-motion/client";
import React from "react";

export default function AboutOurStorySection({ storyContent }) {

  if (!storyContent) return <p>Loading...</p>;

  return (
    <section className="our-story">
      <h2 className="heading">{storyContent.heading}</h2>
      <div className="content">
        <img
          className="image"
          loading="lazy"
          src={storyContent.image}
          alt={storyContent.alt} />
        <p className="paragraph">
          {storyContent.paragraph} 
        </p>
      </div>
    </section>
  );
}