// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Logo from './Navbar/Logo'



const card =  
    [
    { imgurl: "./",  },
    
  ];


const FirstLook = () => {
    return (
        <>
        <div className='  z-0'>
        <h1 className='text-center text-2xl'></h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        //   autoplay={{
        //     delay: 2000,
        //     disableOnInteraction: false,
        //   }}
        >
            <div className='border-2 border-indigo-400  '>
         
          <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/build.png" alt="" /> </SwiperSlide>
          <SwiperSlide  className=''><img className='border-2 border-red-500 w-[1892px] h-screen' src="/Gallery/2.jpg" alt="" /></SwiperSlide>
           <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/5.jpg"  alt="" /> </SwiperSlide>
          <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide> <img className=' w-[1892px] h-screen' src="/Gallery/1.jpg" alt="" /></SwiperSlide>
          </div>
         
          
        </Swiper>

        

        </div>


        </>
      );
}
export default FirstLook