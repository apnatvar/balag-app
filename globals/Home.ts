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
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text'},
        { name: 'videos', type: 'array', required: true, maxRows: 5,
          fields: [
            { name: 'video', type: 'upload', relationTo: 'media' },
          ]
        },
      ],
    },
    {
      name: 'trailers',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'trailer', type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'link', type: 'text'},
            { name: 'categories', type: 'group',
              fields: [
                {name: 'category', type:'select', required: true,
                  options: ['favourites', 'international', 'celebrities', 'classics']}
              ]
            },
          ]
        },
        { name: 'next', type: 'text'},
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
        { name: 'mapParagraph', type: 'textarea' },
        { name: 'highlightImages', type: 'array', maxRows: 3, minRows: 3,
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'paragraph', type: 'textarea' },
          ],
        },
      ],
    },
    {
      name: 'workSummary',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea',},
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
  ]
};

