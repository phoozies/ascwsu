'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface GalleryImage {
  _id: string;
  title: string;
  imageUrl: string;
  caption?: string;
  eventName?: string;
}

interface ImageSlideshowProps {
  images: GalleryImage[];
  autoplayDelay?: number;
  showPagination?: boolean;
}

export default function ImageSlideshow({ 
  images, 
  autoplayDelay = 4000,
  showPagination = false 
}: ImageSlideshowProps) {
  // Fallback images if no Sanity images are available
  const fallbackImages: GalleryImage[] = [
    { _id: '1', title: 'ASC Community', imageUrl: '/asc_logo_white_border.png' },
  ];

  const displayImages = images.length > 0 ? images : fallbackImages;

  // Filter out images without valid URLs
  const validImages = displayImages.filter(img => img.imageUrl && img.imageUrl.trim() !== '');

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={validImages.length > 1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={showPagination ? {
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        } : false}
        speed={1500}
        className="image-slideshow w-full h-full"
      >
        {validImages.map((image) => (
          <SwiperSlide key={image._id}>
            <div className="relative w-full h-full">
              {/* Image with overlay gradient */}
              <div className="relative w-full h-full">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={validImages.indexOf(image) === 0}
                  sizes="100vw"
                />
                {/* Dark gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
