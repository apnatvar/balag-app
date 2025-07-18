import { GlobalConfig } from 'payload';

const IndexGlobal: GlobalConfig = {
  slug: 'index',
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'mapHeader', type: 'text' },
        { name: 'mapFooter', type: 'text' },
        { name: 'textboxHeading', type: 'text' },
        { name: 'textboxParagraph', type: 'textarea' },
      ],
    },
    {
      name: 'mapImages',
      type: 'array',
      fields: [
        { name: 'image', type: 'text' },
        { name: 'heading', type: 'text' },
        { name: 'paragraph', type: 'textarea' },
      ],
    },

    {
      name: 'locations',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'lat', type: 'number' },
        { name: 'lon', type: 'number' },
        { name: 'link', type: 'text' },
      ],
    },

    { name: 'overlayTitle', type: 'text' },
    { name: 'overlaySubtitle', type: 'text' },
    { name: 'workSummaryTitle', type: 'text' },
    { name: 'workSummarySubtitle', type: 'text' },
    { name: 'video', type: 'text' },
    { name: 'videoNotPlayableText', type: 'text' },
    { name: 'leftHeading', type: 'text' },
    { name: 'leftParagraph', type: 'textarea' },

    {
      name: 'text',
      type: 'array',
      fields: [
        { name: 'number', type: 'text' },
        { name: 'label', type: 'text' },
      ],
    },
  ],
};

export default IndexGlobal;
