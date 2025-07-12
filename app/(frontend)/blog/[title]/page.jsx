import dynamic from 'next/dynamic';
import SideMenu from '@/components/sideMenu';

const BlogPost = dynamic(() => import('@/components/blogTemplate'));

export default async function Page({ params }) {
  const { title } = await params
  return (
    <html lang="en">
      <body>
        <SideMenu />
        <BlogPost title={title} />
      </body>
    </html>
  )
}