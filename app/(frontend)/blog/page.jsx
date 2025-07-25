import React from "react";
import Link from 'next/link';

import SideMenu from "@/components/sideMenu";

import '@/app/styles/blog.css'; 
import '@/app/styles/global.css';

import { getPayload } from 'payload';
import config from '@/payload.config';
import { NotFound } from "payload";

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const blogs = await payload.find({ collection: 'blogs', limit: 0, });
  const content = await payload.findGlobal({ slug: 'blog-page' });
  console.log("blogs", blogs.docs);
  console.log("content", content);

  if (!blogs || !content) return <NotFound />;

  return (
    <main>
      <SideMenu />
      <section className="blog-hero">
        <h1 className="heading">{content?.heading}</h1>
        <p className="subheading">{content?.subheading}</p>
        <div className="blog-cards">
          {generateBlogCards(blogs.docs)}
        </div>
      </section>
    </main>
  );

  function generateBlogCards(blogs) {
    return blogs.map((item, index) => (
      <div className="card" key={index}>
        <Link className="description" href={`/blog/${item?.slug}`}>
          <div className="image-container">
            <img
            className="image"
            src={item?.image1.url}
            alt={item?.image1.alt}
            />
          </div>
          <div className="text-container">
            <h1 className="title">{item?.heading}</h1>
            <p className="date">Published: {item?.publishedDate.split('T')[0]}</p>
            <p className="brief">{item?.brief}</p>
          </div>
        </Link>
      </div>
    ));
  }
}
