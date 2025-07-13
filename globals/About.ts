import { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'richText', required: true, },
        { name: 'image', type: 'upload', relationTo: 'media', required: true, },
        { name: 'logo', type: 'upload', relationTo: 'media', required: true, },
        {
          name: 'nav',
          type: 'array',
          fields: [
            { name: 'text', type: 'text', required: true, },
            { name: 'link to', type: 'text', required: true, },
          ],
        },
      ],
    },
    {
      name: 'founder',
      type: 'group',
      fields: [
        { name: 'heading', type: 'richText', required: true, },
        {
          name: 'founders',
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true, },
            { name: 'name', type: 'text', required: true, },
            { name: 'designation', type: 'text', required: true, },
          ],
        },
      ],
    },
    {
      name: 'story',
      type: 'group',
      fields: [
        { name: 'heading', type: 'richText', required: true, },
        { name: 'image', type: 'upload', relationTo: 'media', required: true, },
        { name: 'paragraph', type: 'richText', required: true, },
      ],
    },
    {
      name: 'team',
      type: 'group',
      fields: [
        { name: 'heading', type: 'richText', required: true, },
        {
          name: 'members',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true, },
            { name: 'image', type: 'upload', relationTo: 'media', required: true, },
            { name: 'role', type: 'text', required: true, },
          ],
        },
      ],
    },
    {
      name: 'reviews',
      type: 'group',
      fields: [
        { name: 'heading', type: 'richText', required: true, },
        {
          name: 'cards',
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true, },
            { name: 'review', type: 'richText', required: true, },
            { name: 'name', type: 'text', required: true, },
          ],
        },
      ],
    },
  ],
};
