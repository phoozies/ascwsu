'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface EventSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface EventCarouselProps {
  events: EventSlide[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
  return (
    <div className="w-full max-w-full overflow-visible relative">
      <div className="relative px-16">
        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev-event absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          className="swiper-button-next-event absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--old-gold)] hover:bg-[var(--old-gold)] hover:text-white transition-all duration-300" 
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev-event',
            nextEl: '.swiper-button-next-event',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{ paddingBottom: '50px' }}
        >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl max-w-full mx-0 sm:mx-0">
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
      </div>
    </div>
  );
}
