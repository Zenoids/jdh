import React from 'react'
import { Link } from 'react-router-dom';

function Infrastructure() {
  const openImageInNewWindow = () => {
    window.open('/Gallery/4.jpg', '_blank');
  };
  return (
    <>
     <div className='relative bg-gray-200'>
        <img className=' w-[1600px] mx-auto mt-10 h-[850px]' src="/Gallery/13.png" alt="" />
        <h1 className=" absolute bottom-12 left-48 text-6xl  text-white text-center">JDH InfraStructure</h1>
      </div>


      <div className='flex w-full flex-row '>
        <div class="flex flex-wrap justify-center mx-4   w-1/4">

          <div class="p-4 sm:w-1/2 ">
          <h2 class="title-font tracking-widest  text-gray-900  text-4xl text-center sm:text-left">Campus</h2>
            <div class="h-1 w-[1540px] mt-4 bg-green-900 rounded"></div>
            <nav class="flex flex-col sm:items-start mt-8 sm:text-left text-center items-center -mb-1 space-y-2.5">
              <Link to="/hostel" className='  hover:text-[#E37A08]  hover:border-b-green-500 '>
                <span class="bg-indigo-100  text-indigo-500 hover:cursor-pointer hover:bg-blue-500   border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Hostel
              </Link>
              <Link to="/ammenities" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Ammenities
              </Link>
              <Link to="/gallery" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Gallery
              </Link>
              <Link to="/infrastructure" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Infrastructure
              </Link>


            </nav>
          </div>


        </div>
        <div className="flex w-3/5 my-auto mt-24 mr-8 ">
          <div className="grid grid-cols-3 gap-8">

            <div className=''><img onClick={openImageInNewWindow} className='w-[492px] h-[270px] hover:cursor-pointer hover:scale-110 transition-transform duration-300' src="/Events/campus.png" alt="" /><h1 className='text-center text-xl'>Main Building</h1></div>
            <div className=''><img  className=' hover:scale-110 transition-transform duration-300 hover:cursor-pointer'  src="/Gallery/4.jpg" alt="" /> <h1 className='text-center text-xl'>Excursion</h1></div>
            <div className=''><img className='w-[492px] hover:scale-110 transition-transform duration-300 hover:cursor-pointer ' src="/Gallery/5.jpg" alt="" /> <h1 className='text-center text-xl'>Assembly Ground</h1></div>
            <div className=''><img   className=' hover:scale-110 transition-transform duration-300 hover:cursor-pointer' src="/Gallery/33.jpg" alt="" /> <h1 className='text-center text-xl'>Beautiful Masjid</h1></div>
            <div className=''><img  className=' hover:scale-110 transition-transform duration-300 hover:cursor-pointer'  src="/Gallery/34.jpg" alt="" /> <h1 className='text-center text-xl'>Prayer Hall</h1></div>
            <div className=''><img  className=' hover:scale-110 transition-transform duration-300 hover:cursor-pointer'  src="/Gallery/23.jpg" alt="" /> <h1 className='text-center text-xl'>Field Trip</h1></div>

         

          </div>
        </div>

      </div>
   

</>
  )
}

export default Infrastructure