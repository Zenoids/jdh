import React from 'react'
import EventCard from '../../components/EventCard'
import CardEvent from './CardEvent'
import Unique from '../../components/Unique'
CardEvent

function EventsPage() {
  return (
    <>
      <div className='relative bg-gray-200'>
        <img className=' w-screen mx-auto  h-[850px]' src="/Gallery/10.png" alt="" />
        <h1 className=" absolute bottom-12 left-36 text-6xl  text-white text-center">Beyond Academics</h1>
      </div>


      <div className='flex w-full flex-row '>
        <div class="flex flex-wrap justify-center mx-4 py-8 mt-2  w-1/4">

          <div class=" sm:w-1/2 ">
            <h2 class="font-medium title-font tracking-widest  text-2xl  text-gray-900 mb-2  text-center sm:text-left">Events and News</h2>
            <div class="h-1 w-[1540px]  bg-green-900 rounded"></div>
            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 mt-4 space-y-2.5">
              <a>
                <span class="bg-indigo-100 text-indigo-500 hover:cursor-pointer hover:text-[#E37A08] hover:bg-blue-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Events
              </a>
              <a>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Latest News
              </a>


            </nav>
          </div>


        </div>

        
        <div className="flex w-3/5 my-auto mt-24 mr-8 ">
          <div className="grid grid-cols-3 gap-8">

            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Events/22.jpg" alt="" /><h1 className='text-center text-xl'>Science Exhibition Trip</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/31.jpg" alt="" /> <h1 className='text-center text-xl'>Annual Sports</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/24.jpg" alt="" /> <h1 className='text-center text-xl'>teahjkfdh</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/26.jpg" alt="" /> <h1 className='text-center text-xl'>Excursion</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/19.jpg" alt="" /> <h1 className='text-center text-xl'>Industrial Trip</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/23.jpg" alt="" /> <h1 className='text-center text-xl'>Field Trip</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/18.jpg" alt="" /> <h1 className='text-center text-xl'>Field Trip</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/20.jpg" alt="" /> <h1 className='text-center text-xl'>Science Exhibition</h1></div>
            <div className='transition-transform transform hover:scale-110 hover:cursor-pointer'><img src="/Gallery/21.jpg" alt="" /> <h1 className='text-center text-xl'>Field Trip</h1></div>

         

          </div>
        </div>

      </div>
      <Unique />




    </>
  )
}

export default EventsPage