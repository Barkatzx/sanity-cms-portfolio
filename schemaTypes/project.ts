import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'feature',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Full Stack', value: 'Full Stack'},
          {title: 'WordPress', value: 'WordPress'},
          {title: 'Flutter Apps', value: 'Flutter Apps'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'livelink',
      title: 'Live Link',
      type: 'url',
    }),
    defineField({
      name: 'clientlink',
      title: 'Client Repo',
      type: 'url',
    }),
    defineField({
      name: 'serverlink',
      title: 'Server Repo',
      type: 'url',
    }),
  ],
})
