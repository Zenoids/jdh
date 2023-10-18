import React from 'react'
import Board from './Board';
import Highschoolcard from './highschoolcard';
import Unique from '../../components/Unique';
import Stats from './Stats';
import ImageCard from './ImageCard'


const  HighSchool = () => {
  const backgroundImageUrl = '/Events/stu.png'; // Replace this with the actual path to your image

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
      <div className='relative  flex flex-col items-center justify-center'>
        <img className=' w-full mx-auto h-screen' src="/Events/stu.png" alt="" />
        <h1 className=" absolute  text-6xl  text-green-800 text-center">High School
        <span>
        {/* <p className='text-sm  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempora quod cumque dolorum dolores! Eos nemo veritatis, aliquam dolor quia ratione quisquam! Doloribus perferendis aut blanditiis ipsa similique, eos asperiores vel pariatur quas! Soluta veritatis praesentium deserunt, id sint autem fugiat aliquid voluptates! Repellendus similique at autem vitae odit vero?</p> */}
        <button class=" flex mx-auto mt-8 px-8 py-2  text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">TAKE A TOUR</button> 
        </span>
        </h1>
       
      </div>
      
      {/* <h1 className='border-b border-b-green-200 w-full'>Academics</h1> */}
      {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
      <div className=" container mx-auto w-full  ">
         <div className="flex w-full mx-auto ">
           <div className="flex flex-col align-center w-1/2 my-auto ">
      {/* matter */}
               <div className='mx-auto container'>
                  <h1 className='text-6xl pt-8'>Madarsa <span className='text-6xl block'>Jamia Darul Huda</span></h1>
                    <div class="h-1 w-20 mt-8 bg-indigo-500 rounded"></div>
                        <p className='py-auto pb-10 my-4'>Mulk wa Beron-e-Mulk Hifz-o-Nazra k hazaron Madaris banam "Madrasa-tul-Madina" (Boys, Girls, Short Time, Rehaishi) qaim hain. Dawat-e-Islami k Madrasa-tul-Madina se abtak majmoi taur per lakhon Bachay aur Bachiyan Quran-e-Kareem Hifz karne ki saadat pa chuke hain jabkay Nazra mukammal karne walon ki tadad bhi lakhon mey hai</p>
                    </div>
                </div>

    <div className="flex w-1/2">
      {/* images in order */}
      <div className="flex  ">
        <img src="/Events/admission.png" alt="" />
        <div className="flex flex-col">
          <img src="/Events/22.jpg" alt="" />
          <img src="/Events/22.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<Stats/>

{/* faith in students */}
<div  class="text-center mt-8 mb-8">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">We have Faith in our Students</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className='flex align-center mx-auto justify-center'>

    <Highschoolcard img="/Events/react.png" head="Empower" para="Duis autem vel eum iriure dolor" />
    <Highschoolcard img="/Events/engage.png"  head="Engage" para="Duis autem vel eum iriure dolor"/>
    <Highschoolcard img="/Events/grad.png" head="Graduation" para="Duis autem vel eum iriure dolor"/>
    <Highschoolcard img="/Events/award.png" head="Awarding" para="Duis autem vel eum iriure dolor"/>
 </div>

     

      <div className="flex w-full mt-8">
        <div className="w-1/2 ">
          <img className='' src="/Events/cla.jpg" alt="" />
        </div>

        <div className="w-1/2  ">
          <div className="grid grid-cols-2  ">
           
       <ImageCard img="/Events/22.jpg"/>
       <ImageCard img="/Events/22.jpg" />
       <ImageCard img="/Events/22.jpg" />
       <ImageCard img="/Events/22.jpg" />
          </div>
         
          
        </div>
      </div>

      <div   className="container mx-auto mb-10 mt-10 bg-orange-500  py-4 text-white border-indigo-300">
        <div className="flex ">

          {/* text */}
          <div className=' flex justify-center mx-auto my-auto mt-12  '>
          <img src="/Events/medal.png" alt="" />

          <div className='flex flex-col  '>
            <h1 className='text-4xl mt-8 mx-8'>Our Students are talented</h1>
            <p className='mx-8'>passionate, hard-working and full of good ideas. </p>
          </div>
          </div>

       
        </div>
        <button class=" flex mx-auto mt-8 px-8 py-2  text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button> 
      </div>

      

    </>
 

  )
}

export default HighSchool;


{/* <div className="flex w-full">
        <div className="flex flex-wrap bg-[#F6F1EE] flex-col align-center w-3/5 h-96 justify-center">
          <div className='mx-auto w-3/5 py-auto'>
            <h1 className='text-6xl pt-8'>Madarsa <span className='text-6xl block'>Jamia Darul Huda</span></h1>
            <div class="h-1 w-20 mt-4 bg-indigo-500 rounded"></div>
            <p className='py-auto pb-10  my-8'>Mulk wa Beron-e-Mulk Hifz-o-Nazra k hazaron Madaris banam "Madrasa-tul-Madina" (Boys, Girls, Short Time, Rehaishi) qaim hain. Dawat-e-Islami k Madrasa-tul-Madina se abtak majmoi taur per lakhon Bachay aur Bachiyan Quran-e-Kareem Hifz karne ki saadat pa chuke hain jabkay Nazra mukammal karne walon ki tadad bhi lakhon mey hai</p>
          </div>
        </div>
        <div className='w-2/3 '>
          {/* image here  */}
      //     <img src="/Events/taruf.jpg" alt="" />
      //   </div>

      // </div>

      // <div style={containerStyle} className="">
      //   <div>
      //     <h1 className=' text-4xl text-center'>Our Services</h1>
      //     <div className="flex border-2 justify-evenly border-black">
      //       <Board im="/Events/board.png" p="Hifz Academy" />
      //       <Board im="/Events/board.png" p="Aalimiyat Studies" />
      //       <Board im="/Events/board.png" p="Image Gallery" />
      //     </div>
      //   </div>
      // </div>

      // <div style={mapStyle} className="flex mt-12 w-full container mx-auto ">
      
      //   <div className='w-1/2 mx-auto '>
      //     {/* youtube */}
      //     <iframe width="700" height="315" src="https://www.youtube.com/embed/RuLlCXpKeU4?si=9Tmre5I3VAwgQ2Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      //   </div>
      //   <div className=' w-1/2 flex flex-col justify-evenly py-auto '>
      //     <h1 className='text-6xl pt-8'>Madarsa <span className='text-6xl block'>Jamia Darul Huda</span></h1>
      //     <div class="h-1 w-20 mt-8 bg-indigo-500 rounded"></div>
      //     <p className='py-auto pb-10 my-4'>Mulk wa Beron-e-Mulk Hifz-o-Nazra k hazaron Madaris banam "Madrasa-tul-Madina" (Boys, Girls, Short Time, Rehaishi) qaim hain. Dawat-e-Islami k Madrasa-tul-Madina se abtak majmoi taur per lakhon Bachay aur Bachiyan Quran-e-Kareem Hifz karne ki saadat pa chuke hain jabkay Nazra mukammal karne walon ki tadad bhi lakhon mey hai</p>
      //   </div>

      // </div> */}