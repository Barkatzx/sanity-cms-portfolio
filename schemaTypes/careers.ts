// schemas/careers.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careers',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          {title: 'Engineering', value: 'engineering'},
          {title: 'Design', value: 'design'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Sales', value: 'sales'},
          {title: 'Product', value: 'product'},
          {title: 'Operations', value: 'operations'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          {title: 'Remote', value: 'remote'},
          {title: 'Hybrid', value: 'hybrid'},
          {title: 'On-site', value: 'onsite'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'fulltime'},
          {title: 'Part-time', value: 'parttime'},
          {title: 'Contract', value: 'contract'},
          {title: 'Internship', value: 'internship'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          {title: 'Entry Level', value: 'entry'},
          {title: 'Mid Level', value: 'mid'},
          {title: 'Senior Level', value: 'senior'},
          {title: 'Lead', value: 'lead'},
          {title: 'Manager', value: 'manager'},
        ],
      },
    }),

    defineField({
      name: 'salary',
      title: 'Salary Range',
      type: 'object',
      fields: [
        defineField({
          name: 'min',
          title: 'Minimum',
          type: 'number',
        }),
        defineField({
          name: 'max',
          title: 'Maximum',
          type: 'number',
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              {title: 'USD ($)', value: 'USD'},
              {title: 'BDT (৳)', value: 'BDT'},
            ],
          },
        }),
      ],
    }),

    defineField({
      name: 'summary',
      title: 'Job Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'skills',
      title: 'Required Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'closingDate',
      title: 'Application Closing Date',
      type: 'datetime',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Position',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'applicationsCount',
      title: 'Applications Received',
      type: 'number',
      readOnly: true,
      initialValue: 0,
    }),

    defineField({
      name: 'hiringManager',
      title: 'Hiring Manager',
      type: 'reference',
      to: [{type: 'team'}],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
    },
    prepare(selection) {
      const {title, department, location} = selection
      return {
        title,
        subtitle: `${department} • ${location}`,
        media: () => '💼',
      }
    },
  },
})
