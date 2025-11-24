'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

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
    <div className="w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={30}
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
      >
        {alumni.map((alumnus, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
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
  );
}
