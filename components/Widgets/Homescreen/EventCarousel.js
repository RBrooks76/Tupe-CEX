import Link from 'next/link';

/* eslint-disable import/no-unresolved --
 * Eslint rule causing problem with swiper
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
/* eslint-enable import/no-unresolved */

const EventCarousel = () => (
  <div data-v-4654f51e className='banner-index-poster' style={{background:"gray", height:'100%'}}>
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      speed={800}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        type: 'bullets',
      }}
    >
      <SwiperSlide>
        <Link href='/articles/eliteProgram'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/1116HD-Recruit-banner-pc-en.jpeg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/covdr-token'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0225-COVDR-banner-pc-en.jpg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/onino-launch'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0215-ONI-banner-pc-en.jpg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/bnbback-launch'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0216-BNBBACK-banner-pc-en.jpeg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/cryptopro-launch'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0217-CPRO-banner-pc-en.jpeg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/kzn-launch'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0221-KZN-banner-pc-en.jpeg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='/articles/bts-launch'>
          <img
            data-v-4654f51e
            src='/images/home/annoucements/0223-BTS-banner-pc-en.jpeg'
            alt='carousel.png'
            className='banner-index-poster-img'
            data-xblocker='passed'
            data-nsfw-filter-status='sfw'
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default EventCarousel;
