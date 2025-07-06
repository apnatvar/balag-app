"use client";

import React, { useState, useEffect } from "react";
import SideMenu from "@/components/sideMenu";

export default function BlogPage() {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/blog/")
      .then((res) => res.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((err) => {
        console.error("Failed to load JSON:", err);
      });
  }, []);

  if (!jsonData.page) return <p>Loading...</p>;

  return (
    <html lang="en">
      <body>
        <SideMenu />
        <section className="blog-hero">
          <h1 className="heading">{jsonData.page.heading}</h1>
          <p className="subheading">{jsonData.page.subheading}</p>
            <div className="blog-cards">
              {generateBlogCards(jsonData.blogs)}
            </div>
        </section>
      </body>
    </html>
  );

  function generateBlogCards(blogs) {
    if (!blogs) return <p>Loading...</p>;

    return Object.entries(blogs).map(([route, blog]) => (
      <div className="card" key={route} >
        <h2 className="title" >{blog.title}</h2>
        <img
          className="image"
          loading="lazy"
          src={blog.image}
          alt={blog.alt}
        />
        <a className="description" href={`/blog/${route}`}>{blog.brief}</a>
      </div>
    ));
  }
}