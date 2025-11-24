import { Button, Container } from '@/components/ui';
import ImageSlideshow from '@/components/ImageSlideshow';
import { client } from '@/sanity/lib/client';
import type { GalleryImage } from '@/types/sanity';
import Link from 'next/link';

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
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
    
    if (allImages.length > 0) {
      return allImages;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

export default async function LandingSection() {
  const images = await getGalleryImages();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen Image Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        <ImageSlideshow images={images} autoplayDelay={5000} showPagination={true} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center" style={{ paddingTop: '64px' }}>
        <Container>
          <div className="max-w-3xl mx-auto text-center px-4">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8 drop-shadow-2xl">
              Asian Student{' '}
              <span className="text-[var(--old-gold-light)] whitespace-nowrap">Conference</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-2xl w-full sm:w-auto">Join Us</Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
