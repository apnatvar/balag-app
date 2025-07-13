import React from "react";
import { getPayload } from 'payload';
import config from '@/payload.config';

export default async function AboutStorySection() {
    const payload = await getPayload({ config });
    const content = await payload.findGlobal({ slug: 'about' });
    const storyContent = content.story;

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