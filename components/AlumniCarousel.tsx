'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface AlumniProfile {
  name: string;
  class: string;
  position: string;
  quote: string;
  image: string;
}

interface AlumniCarouselProps {
  alumni: AlumniProfile[];
}

export default function AlumniCarousel({ alumni }: AlumniCarouselProps) {
  return (
    <div className="w-full relative">
      <div className="relative px-16">
        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev-custom-alumni absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          className="swiper-button-next-custom-alumni absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom-alumni',
          nextEl: '.swiper-button-next-custom-alumni',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          el: '.swiper-pagination-custom-alumni',
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
        className="alumni-carousel pb-0"
      >
        {alumni.map((alumnus, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]">
                <Image
                  src={alumnus.image}
                  alt={alumnus.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block mb-2 px-3 py-1 bg-[var(--old-gold)] rounded-full text-xs font-semibold">
                  {alumnus.class}
                </span>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {alumnus.name}
                </h3>
                <p className="text-sm text-gray-100 drop-shadow-md mb-2">
                  {alumnus.position}
                </p>
                <p className="text-sm text-gray-100 drop-shadow-md italic line-clamp-3">
                  &ldquo;{alumnus.quote}&rdquo;
                </p>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--old-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
      {/* Custom Pagination */}
      <div className="swiper-pagination-custom-alumni"></div>
    </div>
  );
}
