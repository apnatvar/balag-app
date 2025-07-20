import { GlobalConfig } from 'payload';

export const LandingPage: GlobalConfig = {
  slug: 'index',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'overlay',
      type: 'group',
      fields: [
        { name: 'title ', type: 'text' },
        { name: 'subtitle', type: 'text' },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text'},
        { name: 'videos', type: 'array', required: true, maxRows: 10,
          fields: [
            { name: 'video', type: 'upload', relationTo: 'media' },
          ]
        },
      ],
    },
    {
      name: 'workSummary',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'presentStatistic',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'caption', type: 'textarea' },
        { name: 'video', type: 'upload', relationTo: 'media' },
        { name: 'statistics', type: 'array', maxRows: 3,
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'number' },
          ] 
        },
      ],
    },
    {
      name: 'map',
      type: 'group',
      fields: [
        { name: 'sectionHeader', type: 'text' },
        { name: 'mapHeader', type: 'text' },
        { name: 'locations', type: 'array',
          fields: [
            { name: 'city', type: 'text' },
            { name: 'latitude', type: 'number' },
            { name: 'longitude', type: 'number' },
            { name: 'link', type: 'text' },
          ],
        },
        { name: 'mapParagraph1', type: 'textarea' },
        { name: 'mapImages', type: 'array', maxRows: 3, minRows: 3,
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'paragraph', type: 'textarea' },
          ],
        },
      ],
    }
  ]
};

