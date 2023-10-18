import React from 'react'
import { Link } from 'react-router-dom';
import MissionComp from "./MissionComp"
import Team from "./Team";

function Overview() {
  const openImageInNewWindow = () => {
    window.open('/Gallery/4.jpg', '_blank');
  };
  return (
    <>

      <div className='relative bg-gray-200 flex flex-col items-center justify-center'>
        <img className=' w-full mx-auto  h-screen' src="/Events/pri.png" alt="" />
        <h1 className=" absolute  text-6xl  text-black text-center">Overview
          <span>
            {/* <p className='text-sm  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempora quod cumque dolorum dolores! Eos nemo veritatis, aliquam dolor quia ratione quisquam! Doloribus perferendis aut blanditiis ipsa similique, eos asperiores vel pariatur quas! Soluta veritatis praesentium deserunt, id sint autem fugiat aliquid voluptates! Repellendus similique at autem vitae odit vero?</p> */}
            <button class=" flex mx-auto mt-8 px-8 py-2  text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">TAKE A TOUR</button>
          </span>
        </h1>

      </div>
      {/* <h1>About Us</h1> */}

      <div className='flex w-full flex-row '>
        <div class="flex flex-wrap justify-center mx-4    w-1/4">

          <div class="p-4 sm:w-1/2 ">
            <h2 class="title-font tracking-widest  text-gray-900  text-4xl text-center sm:text-left">About Us</h2>
            <div class="h-1 w-[1540px] mt-4 bg-green-900 rounded"></div>

            <nav class="flex flex-col sm:items-start sm:text-left text-center mt-8 items-center -mb-1 space-y-2.5">
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
        <div className="flex w-3/5 my-auto mt-28 mr-8 ">
          <iframe width="100%" height="450" src="https://www.youtube.com/embed/RuLlCXpKeU4?si=ADgZ1rSW_RwtiMln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
      <div className="container mx-auto w-full">
        <div className="w-1/2">

        </div>
        <div class="flex flex-col pl-4 w-3/5 mx-auto  mb-8  justify-end">
          <MissionComp vis="Vision" mis="We envision an inspiring school community of thriving, high-achieving critical thinkers, collaborative lifelong learners and compassionate human beings who are responsible citizens dedicated to the common good and to making India and our world more equitable, tolerant, democratic, peaceful, and prosperous yet sustainable." />
          <MissionComp vis="Mission" mis="Our mission is to bring our vision to life by empowering young people to meet global challenges with confidence and skills of a high order acquired through innovative learning and technology, and to inculcate in them the values and mindsets of independent, engaged and thoughtful world citizens." />
          <MissionComp vis="Philosophy" mis="We believe in the power of education to change individuals and whole societies for the better. Consequently, our philosophy is to educate ‘The Whole Child’ through a framework that develops the key areas essential for shaping a balanced and all-rounded personality. Our holistic system of learning sets quality benchmarks that prepare our students for success in navigating a dynamic, volatile world." />
        </div>

      </div>

      {/* teachers */}
      <div class="flex flex-col text-center w-full  bg-orange-100">
        <h1 class="text-4xl font-medium title-font mb-4 my-auto mt-10 text-gray-900 tracking-widest">MEET OUR DYNAMIC TEAM</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-sm">The institution is having competent and well balanced staff to train the students overall personality. Spiritual growth is addressed by the "ULAMA-E-DEEN" qualified from reputed Islamic Universities. Sate syllabus is being taught by the trained graduates, post graduates. Where as Karate, Cricket coach and physical education. Teacher concentrate on self defense and physical fitness of the wards</p>
      </div>
      <div className="grid grid-cols-4 mx-auto my-auto gap-8 py-16 bg-orange-100">

      <Team/>
      <Team/>
      <Team/>
      <Team/>
      <Team/>
      <Team/>
      <Team/>
      <Team/>
      </div>
      </>


)
}

      export default Overview