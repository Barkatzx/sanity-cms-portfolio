import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'barkat-portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECTID || 'default-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'default-dataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
