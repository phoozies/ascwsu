'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export interface EventSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface EventCarouselProps {
  events: EventSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function EventCarousel({ 
  events, 
  autoplay = true, 
  autoplayDelay = 5000 
}: EventCarouselProps) {
  return (
    <div className="w-full relative px-16">
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="swiper-button-next-custom" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          el: '.swiper-pagination-custom',
        }}
        loop={true}
        autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
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
        className="event-carousel"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--old-gold)] to-[var(--old-gold-dark)]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {event.date && (
                  <span className="inline-block mb-2 px-3 py-1 bg-[var(--old-gold)] rounded-full text-xs font-semibold">
                    {event.date}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-100 drop-shadow-md line-clamp-3">
                  {event.description}
                </p>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--old-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination */}
      <div className="swiper-pagination-custom"></div>
    </div>
  );
}
