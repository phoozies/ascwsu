import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN to get fresh data for SSR pages
  token: process.env.SANITY_API_TOKEN, // Add read token
  perspective: 'published', // Only fetch published documents
})
