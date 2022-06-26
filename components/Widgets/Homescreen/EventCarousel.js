import Link from 'next/link';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
/* eslint-disable import/no-unresolved --
 * Eslint rule causing problem with swiper
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import RenderResult from 'next/dist/server/render-result';

/* eslint-enable import/no-unresolved */



const EventCarousel = ({height}) => {
  let title = "";
  if(typeof document != "undefined") title = document.title;

  const inputRef = useRef(0);

  const getHeight = () => {
    // var height = document.getElementById('image').clientHeight;
    var height = inputRef.current.clientHeight;
    return height;
  }
  const getWidth = () => {
    return window.innerWidth;
  }

  const getAdjustedFontSize = (param) => {
    var devide = 60;
    if (window.innerWidth < 400) devide = 70;
    return (parseFloat(window.innerWidth) / devide + (param?param:0))+ 'px';
  }

  const useCurrentWidth = () => {
    // save current window width in the state object
    let [width, setWidth] = useState(getHeight());
  
    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => {
          setWidth(getHeight());
          if (parseFloat(getAdjustedFontSize().replace('px','')) > 700) return;
            //.rate-item
          console.log(getAdjustedFontSize());
          let sizeArr = document.querySelectorAll('._auto_size, .quotation-title.font-bold');
          for (let i = 0; i < sizeArr.length; i++) {
            let element = sizeArr[i];
            element.style.fontSize = getAdjustedFontSize();
          }
          let lineArr = document.querySelectorAll('li.rate-item');
          for (let i = 0; i < lineArr.length; i++) {
            let element = lineArr[i];
            element.style.height = getAdjustedFontSize(2);
          }
          let imgArr = document.querySelectorAll('.rate-icon2');
          for (let i = 0; i < imgArr.length; i++) {
            let element = imgArr[i];
            element.style.width = getAdjustedFontSize();
            element.style.height = getAdjustedFontSize();
          }
        
        }, 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
      window.addEventListener('load', resizeListener);
  
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
        window.removeEventListener('load', resizeListener);
      }
    }, [])
  
    return width;
  }
  
  var iHeight = 0;
  iHeight = useCurrentWidth();
  height(iHeight);

  useEffect(() => {
    var image = getHeight();
    console.log(image);
    height(image);
  }, []);

  return (
  <div data-v-4654f51e className='banner-index-poster' style={{background:"gray", height:'100%'}} id="image" ref={inputRef}>
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
</div>);
  
};

export default EventCarousel;
