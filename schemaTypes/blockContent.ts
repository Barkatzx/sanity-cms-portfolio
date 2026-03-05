import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}, // matches <ol> in PortableText
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'}, // font-bold
          {title: 'Emphasis', value: 'em'}, // italic
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              }),
            ],
          },
        ],
      },
    }),

    // Image block — matches types.image in PortableText (with caption support)
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility and SEO',
          validation: (Rule) => Rule.required().warning('Alt text is recommended'),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption shown below the image',
        }),
      ],
    }),

    // Code Block — for copyable code snippets
    defineArrayMember({
      title: 'Code Block',
      name: 'codeBlock',
      type: 'object',
      icon: () => '📝',
      fields: [
        defineField({
          name: 'code',
          type: 'text',
          title: 'Code',
          description: 'Paste your code here',
          validation: (Rule) => Rule.required().error('Code is required'),
          rows: 10,
        }),
        defineField({
          name: 'language',
          type: 'string',
          title: 'Language',
          description: 'Select programming language for syntax highlighting',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'Python', value: 'python'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JSX', value: 'jsx'},
              {title: 'TSX', value: 'tsx'},
              {title: 'JSON', value: 'json'},
              {title: 'Markdown', value: 'markdown'},
              {title: 'Bash/Shell', value: 'bash'},
              {title: 'SQL', value: 'sql'},
              {title: 'Text', value: 'text'},
            ],
            layout: 'dropdown',
          },
          initialValue: 'text',
        }),
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title (Optional)',
          description: 'Display a title above the code block',
        }),
        defineField({
          name: 'showLineNumbers',
          type: 'boolean',
          title: 'Show Line Numbers',
          initialValue: false,
        }),
      ],
      preview: {
        select: {
          title: 'title',
          language: 'language',
          code: 'code',
        },
        prepare({title, language, code}) {
          return {
            title: title || 'Code Block',
            subtitle: `${language || 'text'} — ${code?.substring(0, 50)}${code?.length > 50 ? '...' : ''}`,
          }
        },
      },
    }),
  ],
})
