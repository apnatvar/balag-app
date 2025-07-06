import dynamic from 'next/dynamic';

const BlogPost = dynamic(() => import('@/components/blogTemplate'));

export default async function Page({ params }) {
  const { title } = await params
  return <BlogPost title={title} />
}