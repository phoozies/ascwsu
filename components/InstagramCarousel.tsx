'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
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
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="flex items-center justify-center max-w-full">
              <iframe
                src={`${post.url}embed`}
                className="w-full max-w-[85vw] sm:max-w-lg border-0 overflow-hidden rounded-lg shadow-lg"
                style={{
                  minHeight: '600px',
                  margin: '0 auto',
                  display: 'block'
                }}
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
