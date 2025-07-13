import { getPayload } from 'payload';
import config from '@/payload.config';
import '@/styles/blog.css'; 

export default async function BlogPost({ params }) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'blogs',
    slug: params.slug,
  });

  const post = docs[0];
  if (!post) return <div className="blog-container">Post not found.</div>;

  return (
    <article className="blog-container">
      <section className="blog-video">
        <video controls>
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
        <img src={post.image2?.url} alt={post.image2?.alt}/>
      </section>

      <section className="blog-content">
        <p className="paragraph">{post.paragraph3}</p>
        <p className="paragraph">{post.paragraph4}</p>
      </section>

      <section className="blog-image">
        <img src={post.image2?.url} alt={post.image2?.alt}/>
      </section>
    </article>
  );
}
