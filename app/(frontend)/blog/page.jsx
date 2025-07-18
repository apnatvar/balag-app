import React from "react";
import Link from 'next/link';

import SideMenu from "@/components/sideMenu";

import { getPayload } from 'payload';
import config from '@/payload.config';
import { NotFound } from "payload";

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const { allBlogs } = await payload.find({ collection: 'blogs', slug: 'blog-slug' });
  const content= await payload.findGlobal({ slug: "blog-page" });
  console.log("content", content);
  const blogs = allBlogs[0];

  if (!content || !blogs) {
    return <NotFound />;
  }

  return (
    <html lang="en">
      <body>
        <SideMenu />
        <section className="blog-hero">
          <h1 className="heading">{content.heading}</h1>
          <p className="subheading">{content.subheading}</p>
          <div className="blog-cards">
            {generateBlogCards(blogs)}
          </div>
        </section>
      </body>
    </html>
  );

  function generateBlogCards(blogs) {
    if (!blogs) return <p>Loading...</p>;

    return Object.entries(blogs).map(([slug, blog]) => (
      <div className="card" key={slug}>
        <h2 className="title">{blog.heading}</h2>
        <img
          className="image"
          loading="lazy"
          src={blog.image1.url}
          alt={blog.image1.alt}
        />
        <p className="date">{blog.publishedDate}</p>
        <Link className="description" href={`/blog/${slug}`}>Read More</Link>
      </div>
    ));
  }
}
