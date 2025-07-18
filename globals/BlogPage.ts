import { GlobalConfig } from 'payload';

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text', required: true, defaultValue: 'Latest Blogs' },
  ],
};