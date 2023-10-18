
        
import React, { useState } from "react";
import FacilityCard from "./FacilityCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Facilities = ()=> {
    return (
        <>
        <div className=' mx-auto mt-12 '>
        <h1 className='text-center text-4xl text-[#5E3625]'>Our Facilities</h1>
        <div className=" my-auto mt-8 ">
        <Swiper
// install Swiper modules
modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
spaceBetween={0}
slidesPerView={6}
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


<SwiperSlide><FacilityCard matter="Academic Building" submatter="Use this section to talk about the characteristics of each of the listed items." img="infra.png"/></SwiperSlide>
<SwiperSlide> <FacilityCard matter="Student Accommodations" submatter="Use this section to talk about the characteristics of each of the listed items." img="hostel.png"/></SwiperSlide>
<SwiperSlide>  <FacilityCard matter="Resources & Recreation" submatter="Use this section to talk about the characteristics of each of the listed items." img="lib.png"/></SwiperSlide>
<SwiperSlide><FacilityCard matter="Islamic Studies" submatter="Use this section to talk about the characteristics of each of the listed items." img="madra.png"/></SwiperSlide>
<SwiperSlide> <FacilityCard matter="Beatiful Mosque" submatter="Use this section to talk about the characteristics of each of the listed items." img="campus.png"/></SwiperSlide>
<SwiperSlide>  <FacilityCard matter="Library" submatter="Use this section to talk about the characteristics of each of the listed items."  img="studylib.png"/></SwiperSlide>
<SwiperSlide><FacilityCard matter="Campus Infrastucture" submatter="Use this section to talk about the characteristics of each of the listed items." img="infra.png"/></SwiperSlide>
<SwiperSlide> <FacilityCard matter="Student Events" submatter="Use this section to talk about the characteristics of each of the listed items." img="activity.png"/></SwiperSlide>
<SwiperSlide>  <FacilityCard matter="Academic Building" submatter="Use this section to talk about the characteristics of each of the listed items." img="act.png"/></SwiperSlide>






</Swiper>
        
        </div>
        </div>


        </>
       
    );
}

       
        

export default Facilities

{/* <Swiper
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
>


<SwiperSlide>1 </SwiperSlide>
<SwiperSlide> 2</SwiperSlide>
<SwiperSlide> 3</SwiperSlide>
<SwiperSlide>4 </SwiperSlide>




</Swiper> */}

{/* <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/>
        <FacilityCard/> */}



{/* <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
<div className="w-full relative flex items-center justify-center">
    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonBack>
    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
            <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </Slider>
    </div>
    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonNext>
</div>
</CarouselProvider> */}

// origin 

// <Slide index={1}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={2}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={3}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={4}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={5}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={6}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={7}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={8}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={9}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={10}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>
// <Slide index={11}>
// <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//     <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//         <div className="flex h-full items-end pb-6">
//             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//         </div>
//     </div>
// </div>
// </Slide>

 {/* Carousel for tablet and medium size devices */}
//  <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
//  <div className="w-full relative flex items-center justify-center">
//      <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//          </svg>
//      </ButtonBack>
//      <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//          <Slider>
//              <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
//                  <Slide index={0}>
//                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                          <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
//                              <div className="flex h-full items-end pb-6">
//                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                              </div>
//                          </div>
//                      </div>
//                  </Slide>
                
//              </div>
//          </Slider>
//      </div>
//      <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//          </svg>
//      </ButtonNext>
//  </div>
// </CarouselProvider>