import type { CollectionConfig } from 'payload'

export const Post: CollectionConfig = {
  slug: 'Posts',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'Categories',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
    },
    {
      name: 'Tags',
      type: 'relationship',
      relationTo: 'Tags',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
