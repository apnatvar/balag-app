'use client';
import { useEffect, useState } from "react";

export default function BlogTemplate({ title }) {
  console.log("Blog title:", title);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!title) return;
    fetch(`http://localhost:5000/blog/getblog?title=${title}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setBlog(data);
        }
      })
      .catch(() => setError("Failed to load blog data"));
  }, [title]);

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ maxWidth: "100%" }} />
      <p>{blog.content}</p>
      <video src={blog.video} controls style={{ width: "100%", marginTop: "1rem" }} />
    </div>
  );
}
