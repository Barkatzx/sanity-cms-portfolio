import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectEarning',
  title: 'Project Earnings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Amount (USD)',
      type: 'number',
      description: 'Earning amount in USD',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'date',
      title: 'Earning Date',
      type: 'date',
      description: 'Date when the earning was received',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Earning Type',
      type: 'string',
      options: {
        list: [
          {title: 'Upfront Payment', value: 'upfront'},
          {title: 'Milestone Payment', value: 'milestone'},
          {title: 'Final Payment', value: 'final'},
          {title: 'Monthly Retainer', value: 'retainer'},
          {title: 'Hourly Rate', value: 'hourly'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Upwork', value: 'upwork'},
          {title: 'Limay Media Ltd.', value: 'limay'},
          {title: 'Freelancer', value: 'freelancer'},
          {title: 'Kwork', value: 'kwork'},
          {title: 'Direct Client', value: 'direct'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
      rows: 3,
      description: 'Any additional notes about this earning',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Received', value: 'received'},
          {title: 'Disputed', value: 'disputed'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'received',
    }),
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
    {
      title: 'Amount, High',
      name: 'amountDesc',
      by: [{field: 'amount', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title', // FIXED: was 'project.title'
      amount: 'amount',
      date: 'date',
      type: 'type',
    },
    prepare(selection: {title?: string; amount?: number; date?: string; type?: string}) {
      const {title, amount, date, type} = selection
      return {
        title: title || 'No Project',
        subtitle: `$${amount ?? 0} • ${date ?? 'No Date'} • ${type ?? 'No Type'}`,
      }
    },
  },
})
