import { groq } from 'next-sanity';

// Query to get all featured gallery images for the slideshow
export const GALLERY_IMAGES_QUERY = groq`
  *[_type == "gallery" && featured == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    caption,
    eventName,
    date
  }
`;

// Query to get all gallery images (for future use)
export const ALL_GALLERY_IMAGES_QUERY = groq`
  *[_type == "gallery"] | order(order asc, _createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    caption,
    eventName,
    date,
    featured
  }
`;
