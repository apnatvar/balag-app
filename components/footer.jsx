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
          alt={content?.logo?.alt}
          width={100}
          height={100}
        />
        <p className='main-text'>{content?.mainText}</p>
        {/* <p className='owner-text'>Made with ❤️ by <Link href="https://example.com" className='owner-link'>BrownSmith Dynamics</Link></p> */}
      </div>
      <div className="footer-links">
        <ul className="links-container">
          {renderLinks(content?.links)}
        </ul>
      </div>
    </footer>
  );

  function renderLinks({ links }) {
    if (!Array.isArray(links) || links.length === 0) return null
    return links.map((item, index) => (
      <li key={index}><Link href={item.link} className='link' target='_blank'>{item.placeholder}</Link></li>
    ))
  }
};

