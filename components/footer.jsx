import React from 'react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import Link from 'next/link';
import Image from 'next/image';

export default async function Footer() {
  const payload = await getPayload({ config });
  const content = await payload.findGlobal({ slug: 'footer' });
  return (
    <footer className="footer">
      <div className="footer-content">
        <Image
          src={content?.logo?.url}
          alt={content?.logo?.alt || 'Logo'}
          width={100}
          height={100}
        />
        <p className='main-text'>{content?.mainText}</p>
        <p className='owner-text'>Made with ❤️ by <Link href="https://example.com" className='owner-link'>BrownSmith Dynamics</Link></p>
      </div>
      <div className="footer-links">
        <RenderLinks links={content?.links} />
      </div>
    </footer>
  );

  function RenderLinks({ links }) {
    if (!Array.isArray(links) || links.length === 0) return null
    return (
      <ul className="links-container">
        {links.map((item, index) => (
          <li key={index}><Link href={item.link} className='link' target='_blank'>{item.placeholder}</Link></li>
        ))}
      </ul>
    )
  }
};

