import { Button, Container } from '@/components/ui';
import ImageSlideshow from '@/components/ImageSlideshow';
import { client } from '@/sanity/lib/client';
import { GALLERY_IMAGES_QUERY } from '@/lib/sanity/queries';
import type { GalleryImage } from '@/types/sanity';
import Link from 'next/link';

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    console.log('=== SANITY CONNECTION INFO ===');
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
    console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);
    
    // Test connection with a simple query
    const testQuery = `*[_type == "gallery"] {
      _id,
      title,
      "imageUrl": image.asset->url,
      caption,
      eventName,
      date,
      featured
    }`;
    
    const allImages = await client.fetch(testQuery, {}, { next: { revalidate: 0 } });
    console.log('=== QUERY RESULTS ===');
    console.log('Total gallery items found:', allImages.length);
    
    if (allImages.length > 0) {
      console.log('Sample image data:', JSON.stringify(allImages[0], null, 2));
      // Return all images for now (we'll filter later once it works)
      return allImages;
    } else {
      console.warn('⚠️  No gallery items found!');
      console.warn('Possible issues:');
      console.warn('1. Wrong dataset - check if your images are in "production" instead of "development"');
      console.warn('2. Schema not deployed - the gallery schema might not be recognized');
      console.warn('3. Documents not published - make sure images are published, not drafts');
    }
    
    return [];
  } catch (error) {
    console.error('=== ERROR FETCHING IMAGES ===');
    console.error('Error:', error);
    return [];
  }
}

export default async function HeroSection() {
  const images = await getGalleryImages();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen Image Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        <ImageSlideshow images={images} autoplayDelay={5000} showPagination={true} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <Container>
          <div className="max-w-3xl text-center">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              Asian Student{' '}
              <span className="text-[var(--old-gold-light)] whitespace-nowrap">Conference</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-2xl">Join Us</Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
