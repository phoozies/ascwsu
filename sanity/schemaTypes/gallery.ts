import { defineType, defineField } from 'sanity';
import { ImageIcon } from 'lucide-react';

export default defineType({
  name: 'gallery',
  title: 'Gallery Images',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      description: 'A descriptive title for the image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'Optional caption or description for the image',
      rows: 3,
    }),
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
      description: 'Name of the event or occasion',
    }),
    defineField({
      name: 'date',
      title: 'Date Taken',
      type: 'date',
      description: 'When was this photo taken?',
    }),
    defineField({
      name: 'featured',
      title: 'Featured in Slideshow',
      type: 'boolean',
      description: 'Show this image in the homepage slideshow',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventName',
      media: 'image',
    },
  },
});
