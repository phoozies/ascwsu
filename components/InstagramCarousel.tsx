'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Script from 'next/script';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface InstagramPost {
  url: string;
  id: string;
}

interface InstagramCarouselProps {
  posts: InstagramPost[];
}

export default function InstagramCarousel({ posts }: InstagramCarouselProps) {
  return (
    <>
      <div className="w-full relative">
        <div className="relative px-16">
          {/* Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev-custom-instagram absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="swiper-button-next-custom-instagram absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom-instagram',
              nextEl: '.swiper-button-next-custom-instagram',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
              el: '.swiper-pagination-custom-instagram',
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="instagram-carousel pb-0"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="flex items-center justify-center">
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink={`${post.url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px auto',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: 'calc(100% - 2px)'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom-instagram"></div>
      </div>
      
      {/* Load Instagram embed script */}
      <Script 
        async 
        src="//www.instagram.com/embed.js" 
        strategy="lazyOnload"
      />
    </>
  );
}
