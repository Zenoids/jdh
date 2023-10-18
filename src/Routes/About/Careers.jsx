import React from 'react'
import {Link} from "react-router-dom"
import MissionComp from './MissionComp'

function Careers() {
  return (
    <>
    <div className='relative bg-gray-200'>
    <img className=' w-[1600px] mx-auto mt-10 h-[850px]' src="/Events/job.jpg" alt="" />
    <h1 className=" absolute bottom-12 left-48 text-6xl  text-white text-center">Madarsa</h1>
  </div>

  <div className='flex w-full flex-row '>
        <div class="flex flex-wrap justify-center mx-4 py-8   w-1/4">

          <div class="p-4 sm:w-1/2 ">
            <h2 class="title-font tracking-widest border-b  text-gray-900 mb-4 text-4xl text-center sm:text-left">About Us</h2>
            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <Link to="/hostel" className='  hover:text-[#E37A08]  hover:border-b-green-500 '>
                <span class="bg-indigo-100  text-indigo-500 hover:cursor-pointer hover:bg-blue-500   border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Overview
              </Link>
              <Link to="/ammenities" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>History
              </Link>
              <Link to="/gallery" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Leadership 
              </Link>
              <Link to="/infrastructure" className='  hover:text-[#E37A08] '>
                <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Careers
              </Link>


            </nav>
          </div>


        </div>
        <div className="flex w-3/5 my-auto mt-24 mr-8 ">
          <iframe width="100%" height="450" src="https://www.youtube.com/embed/RuLlCXpKeU4?si=ADgZ1rSW_RwtiMln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
      <div class="flex flex-col pl-8 w-1/2 mx-auto   mb-8  justify-end">
          <MissionComp vis="Make Bright Career with Us" mis="Please share your resumes at hr@jdh.com" />
          {/* <MissionComp vis="Mission" mis="Our mission is to bring our vision to life by empowering young people to meet global challenges with confidence and skills of a high order acquired through innovative learning and technology, and to inculcate in them the values and mindsets of independent, engaged and thoughtful world citizens." />
          <MissionComp vis="Philosophy" mis="We believe in the power of education to change individuals and whole societies for the better. Consequently, our philosophy is to educate ‘The Whole Child’ through a framework that develops the key areas essential for shaping a balanced and all-rounded personality. Our holistic system of learning sets quality benchmarks that prepare our students for success in navigating a dynamic, volatile world." /> */}
        </div>

  {/* <h1 className='text-center  text-6xl'>Make a bright Career with Us</h1>

  <h1 className=' text-center'>Please share your resumes hr@jdh.com</h1> */}
  </>
  )
}

export default Careers