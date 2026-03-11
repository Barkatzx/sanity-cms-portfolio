// schemas/jobApplication.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobApplication',
  title: 'Job Applications',
  type: 'document',
  fields: [
    defineField({
      name: 'job',
      title: 'Position Applied For',
      type: 'reference',
      to: [{type: 'careers'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'applicantName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
    }),

    defineField({
      name: 'portfolio',
      title: 'Portfolio / Website',
      type: 'url',
    }),

    defineField({
      name: 'linkedin',
      title: 'LinkedIn Profile',
      type: 'url',
    }),

    defineField({
      name: 'github',
      title: 'GitHub Profile',
      type: 'url',
    }),

    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'string',
      options: {
        list: [
          {title: '0-1 years', value: '0-1'},
          {title: '1-3 years', value: '1-3'},
          {title: '3-5 years', value: '3-5'},
          {title: '5-8 years', value: '5-8'},
          {title: '8+ years', value: '8plus'},
        ],
      },
    }),

    defineField({
      name: 'currentCompany',
      title: 'Current Company',
      type: 'string',
    }),

    defineField({
      name: 'currentRole',
      title: 'Current Role',
      type: 'string',
    }),

    defineField({
      name: 'noticePeriod',
      title: 'Notice Period',
      type: 'string',
      options: {
        list: [
          {title: 'Immediate', value: 'immediate'},
          {title: '1 week', value: '1week'},
          {title: '2 weeks', value: '2weeks'},
          {title: '1 month', value: '1month'},
          {title: '2+ months', value: '2plus'},
        ],
      },
    }),

    defineField({
      name: 'expectedSalary',
      title: 'Expected Salary',
      type: 'object',
      fields: [
        defineField({
          name: 'amount',
          title: 'Amount',
          type: 'number',
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              {title: 'USD ($)', value: 'USD'},
              {title: 'EUR (€)', value: 'EUR'},
              {title: 'GBP (£)', value: 'GBP'},
              {title: 'BDT (৳)', value: 'BDT'},
            ],
          },
        }),
        defineField({
          name: 'period',
          title: 'Period',
          type: 'string',
          options: {
            list: [
              {title: 'Per Year', value: 'year'},
              {title: 'Per Month', value: 'month'},
              {title: 'Per Hour', value: 'hour'},
            ],
          },
        }),
      ],
    }),

    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'resume',
      title: 'Resume / CV',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    }),

    defineField({
      name: 'additionalDocs',
      title: 'Additional Documents',
      type: 'array',
      of: [{type: 'file'}],
    }),

    defineField({
      name: 'howDidYouHear',
      title: 'How did you hear about us?',
      type: 'string',
      options: {
        list: [
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Indeed', value: 'indeed'},
          {title: 'Company Website', value: 'website'},
          {title: 'Referral', value: 'referral'},
          {title: 'Job Board', value: 'jobboard'},
          {title: 'Social Media', value: 'social'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'referral',
      title: 'Referral (if applicable)',
      type: 'string',
    }),

    defineField({
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Under Review', value: 'review'},
          {title: 'Shortlisted', value: 'shortlisted'},
          {title: 'Interview Scheduled', value: 'interview'},
          {title: 'Technical Test', value: 'test'},
          {title: 'Offer Extended', value: 'offered'},
          {title: 'Hired', value: 'hired'},
          {title: 'Rejected', value: 'rejected'},
          {title: 'On Hold', value: 'hold'},
        ],
      },
      initialValue: 'new',
    }),

    defineField({
      name: 'interviewNotes',
      title: 'Interview Notes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'date',
              title: 'Date',
              type: 'datetime',
            }),
            defineField({
              name: 'interviewer',
              title: 'Interviewer',
              type: 'string',
            }),
            defineField({
              name: 'notes',
              title: 'Notes',
              type: 'text',
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              options: {
                list: [1, 2, 3, 4, 5],
              },
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'internalComments',
      title: 'Internal Comments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'author',
              title: 'Author',
              type: 'reference',
              to: [{type: 'team'}],
            }),
            defineField({
              name: 'comment',
              title: 'Comment',
              type: 'text',
            }),
            defineField({
              name: 'timestamp',
              title: 'Timestamp',
              type: 'datetime',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),

    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: 'applicantName',
      subtitle: 'job.title',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection

      const statusEmojis: Record<string, string> = {
        new: '🆕',
        review: '📋',
        shortlisted: '⭐',
        interview: '📅',
        test: '💻',
        offered: '🎉',
        hired: '✅',
        rejected: '❌',
        hold: '⏸️',
      }

      return {
        title,
        subtitle: subtitle || 'No job specified',
        media: () => statusEmojis[status] || '📄',
      }
    },
  },
})
