import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: 'dti1wt09',
  dataset: 'products_euphoria',
  apiVersion: '2023-03-07',
  useCdn: true,
};


// Initialize the client
export const client = createClient(config);

// Create a function to generate image URLs
export const urlFor = (source) => createImageUrlBuilder(client).image(source);