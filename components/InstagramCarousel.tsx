'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface InstagramPost {
  url: string;
  id: string;
}

interface InstagramCarouselProps {
  posts: InstagramPost[];
}

export default function InstagramCarousel({ posts }: InstagramCarouselProps) {
  return (
    <div className="w-full relative">
      <div className="relative px-4 md:px-16">
        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev-instagram absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          className="swiper-button-next-instagram absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev-instagram',
            nextEl: '.swiper-button-next-instagram',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          style={{ 
            paddingBottom: '50px',
            width: '100%',
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe
                src={`${post.url}embed`}
                className="border-0 rounded-lg shadow-lg"
                style={{
                  width: '100%',
                  maxWidth: '540px',
                  minHeight: '680px',
                  height: '680px',
                }}
                frameBorder="0"
                scrolling="no"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
