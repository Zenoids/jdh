// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


const card =  
    [
    { imgurl: "./",  },
    
  ];


const Gallery = () => {
    return (
        <>
        <div className='mt-12 mx-auto'>
        <h1 className='text-center text-4xl text-[#5E3625]'>Our Gallery</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        //   autoplay={{
        //     delay: 2000,
        //     disableOnInteraction: false,
        //   }}
        className='mt-8  '>
        
          <SwiperSlide> <img src="/Gallery/1.jpg" alt="" /> </SwiperSlide>
          <SwiperSlide> <img src="/Gallery/2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img className='' src="/Gallery/4.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img className='h-[340px] ' src="/Gallery/5.jpg" alt="" /></SwiperSlide>
        
          <SwiperSlide> <img src="/Gallery/18.jpg" alt="" /></SwiperSlide>

          <SwiperSlide> <img src="/Gallery/19.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/20.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/21.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/22.jpg" alt="" /></SwiperSlide>

          <SwiperSlide> <img src="/Gallery/23.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/24.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/25.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/26.jpg" alt="" /></SwiperSlide>

          <SwiperSlide> <img className='h-[340px] border-black border-2' src="/Gallery/27.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/28.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/29.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/30.jpg" alt="" /></SwiperSlide>

          <SwiperSlide> <img src="/Gallery/31.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/32.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/33.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img src="/Gallery/34.jpg" alt="" /></SwiperSlide>

          
        </Swiper>
        

        </div>


        </>
      );
}
export default Gallery