import React from "react";
import SideMenu from "@/components/sideMenu";
import { headers } from 'next/headers';

import { getPayload, NotFound } from 'payload';
import config from '@/payload.config';

import '@/app/styles/blog.css'; 

export default async function BlogPost() {
  const requestHeaders = await headers();
  const slug = requestHeaders.get('slug');
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: 'blogs', slug: slug, });
  const post = docs[0];
  if (!post) return <NotFound />;

  return (
    <main>
      <SideMenu />
      <article className="blog-container">
        <section className="blog-image">
          <video autoPlay muted loop>
            <source src={post.video1?.url} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </section>

        <header className="blog-header">
          <h1 className='blog-title'>{post.heading}</h1>
          <h2 className='blog-subtitle'>{post.subheading}</h2>
        </header>

        <section className="blog-image">
          <img src={post.image2?.url} alt={post.image2?.alt}/>
        </section>

        <section className="blog-content">
          <p className="paragraph">{post.paragraph1}</p>
          <p className="paragraph">{post.paragraph2}</p>
        </section>

        <section className="blog-image">
          <img src={post.image3?.url} alt={post.image3?.alt}/>
        </section>

        <section className="blog-content">
          <p className="paragraph">{post.paragraph3}</p>
          <p className="paragraph">{post.paragraph4}</p>
        </section>

        <section className="blog-image">
          <img src={post.image4?.url} alt={post.image4?.alt}/>
        </section>
      </article>
    </main>
  );
}
