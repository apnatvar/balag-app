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
        { name: 'title', type: 'text',  },
        { name: 'image', type: 'upload', relationTo: 'media',  },
        { name: 'logo', type: 'upload', relationTo: 'media',  },
        { name: 'nav',
          type: 'array',
          fields: [
            { name: 'text', type: 'text',  },
            { name: 'link to', type: 'text',  },
          ],
        },
      ],
    },
    {
      name: 'founder',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text',  },
        { name: 'founders',
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media',  },
            { name: 'name', type: 'text',  },
            { name: 'designation', type: 'text',  },
          ],
        },
      ],
    },
    {
      name: 'story',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text',  },
        { name: 'image', type: 'upload', relationTo: 'media',  },
        { name: 'paragraph', type: 'textarea',  },
      ],
    },
    {
      name: 'team',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text',  },
        {
          name: 'members',
          type: 'array',
          fields: [
            { name: 'name', type: 'text',  },
            { name: 'image', type: 'upload', relationTo: 'media',  },
            { name: 'role', type: 'text',  },
          ],
        },
      ],
    },
    {
      name: 'reviews',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text',  },
        {
          name: 'cards',
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media',  },
            { name: 'review', type: 'textarea',  },
            { name: 'name', type: 'text',  },
          ],
        },
      ],
    },
  ],
};
