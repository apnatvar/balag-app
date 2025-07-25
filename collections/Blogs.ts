import { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: { useAsTitle: 'heading' },
  fields: [
    { name: 'slug', type: 'text', required: true, unique: true, },
    { name: 'heading', type: 'text', required: true, defaultValue: 'Blog Post', },
    { name: 'subheading', type: 'text', required: true, defaultValue: 'Blogs', },
    { name: 'brief', type: 'textarea', required: true, },
    { name: 'publishedDate', type: 'date', required: true, defaultValue: () => {
        const today = new Date(); return today.toISOString().split('T')[0];
      },},
    { name: 'paragraph1', type: 'textarea' },
    { name: 'paragraph2', type: 'textarea' },
    { name: 'paragraph3', type: 'textarea' },
    { name: 'paragraph4', type: 'textarea' },
    { name: 'image1', type: 'upload', relationTo: 'media' },
    { name: 'image2', type: 'upload', relationTo: 'media' },
    { name: 'image3', type: 'upload', relationTo: 'media' },
    { name: 'video', type: 'upload', relationTo: 'media' },
  ],
};
