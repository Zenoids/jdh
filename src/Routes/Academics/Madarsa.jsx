import React from 'react'
import Board from './Board';


function Madarsa() {
  const backgroundImageUrl = '/Events/bg.png'; // Replace this with the actual path to your image

  const containerStyle = {
    background: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', // Set the width and height as needed
    height: '100%',
  };

  const mapbackgroundimageurl = '/Events/map.png'
  const mapStyle = {
    background: `url(${mapbackgroundimageurl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', // Set the width and height as needed
    height: '100%',
  };
  return (
    <>
      <div className='relative bg-gray-200'>
        <img className=' w-full mx-auto  h-screen' src="/Events/madra.png" alt="" />
        <h1 className=" absolute bottom-12 left-44 text-6xl  text-red-800 text-center">Madarsa</h1>
      </div>
      {/* <h1 className='border-b border-b-green-200 w-full'>Academics</h1> */}
      {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}


      <div className="flex w-full my-auto">
        <div className="flex flex-wrap bg-[#F6F1EE] flex-col align-center w-3/5 h-96 justify-center">
          <div className='mx-auto w-3/5 py-auto'>
            <h1 className='text-6xl pt-8'>Madarsa <span className='text-6xl block'>Jamia Darul Huda</span></h1>
            <div class="h-1 w-20 mt-4 bg-indigo-500 rounded"></div>
            <p className='py-auto pb-10  my-8'>Mulk wa Beron-e-Mulk Hifz-o-Nazra k hazaron Madaris banam "Madrasa-tul-Madina" (Boys, Girls, Short Time, Rehaishi) qaim hain. Dawat-e-Islami k Madrasa-tul-Madina se abtak majmoi taur per lakhon Bachay aur Bachiyan Quran-e-Kareem Hifz karne ki saadat pa chuke hain jabkay Nazra mukammal karne walon ki tadad bhi lakhon mey hai</p>
          </div>
        </div>
        <div className='w-2/3 '>
          {/* image here  */}
          <img src="/Events/taruf.jpg" alt="" />
        </div>

      </div>

      <div style={containerStyle} className="">
        <div>
          <h1 className=' text-4xl text-center'>Our Services</h1>
          <div className="flex border-2 justify-evenly border-black">
            <Board im="/Events/board.png" p="Hifz Academy" />
            <Board im="/Events/board.png" p="Aalimiyat Studies" />
            <Board im="/Events/board.png" p="Image Gallery" />
          </div>
        </div>
      </div>

      <div style={mapStyle} className="flex mt-12 w-full container mx-auto ">

        <div className='w-1/2 mx-auto '>
          {/* youtube */}
          <iframe width="700" height="315" src="https://www.youtube.com/embed/RuLlCXpKeU4?si=9Tmre5I3VAwgQ2Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        <div className=' w-1/2 flex flex-col justify-evenly py-auto '>
          <h1 className='text-6xl pt-8'>Madarsa <span className='text-6xl block'>Jamia Darul Huda</span></h1>
          <div class="h-1 w-20 mt-8 bg-indigo-500 rounded"></div>
          <p className='py-auto pb-10 my-4'>Mulk wa Beron-e-Mulk Hifz-o-Nazra k hazaron Madaris banam "Madrasa-tul-Madina" (Boys, Girls, Short Time, Rehaishi) qaim hain. Dawat-e-Islami k Madrasa-tul-Madina se abtak majmoi taur per lakhon Bachay aur Bachiyan Quran-e-Kareem Hifz karne ki saadat pa chuke hain jabkay Nazra mukammal karne walon ki tadad bhi lakhon mey hai</p>
        </div>

      </div>

      <section class="text-gray-600 body-font">
        <div class="   flex flex-wrap">
          <div class="flex w-full mb-10 flex-wrap">
            <h1 class="sm:text-3xl text-6xl  title-font mx-auto text-gray-900 text-center lg:mb-0">Events Captured at our Islamic Studies Department</h1>
            {/* <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}

export default Madarsa

{/* <div className="flex flex-wrap w-full">
<div className='flex flex-wrap justify-center mx-4 py-8 mt-24  w-1/4'>

  <div class="p-4 sm:w-1/2 ">
    <h2 class="font-medium title-font tracking-widest border-b  text-gray-900 mb-4 text-sm text-center sm:text-left">Our Campus</h2>
    <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
      <a className='  hover:text-[#E37A08]  hover:border-b-green-500 '>
        <span class="bg-indigo-100  text-indigo-500 hover:cursor-pointer hover:bg-blue-500   border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Hostel
      </a>
      <a className='border-b'>
        <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Ammenities
      </a>
      <a>
        <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Gallery
      </a>
      <a>
        <span class="bg-indigo-100 text-indigo-500  border-b  border-b-gray-300  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Infrastructure
      </a>


    </nav>
  </div>
</div>
</div> */}


