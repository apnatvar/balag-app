import React from "react";

export default async function AboutStorySection({storyContent}) {

  return (
    <section className="our-story">
      <h2 className="heading">{storyContent.heading}</h2>
      <div className="content">
        <img
          className="image"
          loading="lazy"
          src={storyContent.image.url}
          alt={storyContent.image.alt} />
        <p className="paragraph">
          {storyContent.paragraph} 
        </p>
      </div>
    </section>
  );
}