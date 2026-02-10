import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'Tags',
  admin: {
    useAsTitle: 'Tags',
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'Tags',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
