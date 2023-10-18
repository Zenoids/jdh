import React from 'react'

function Highschoolcard(props) {
  return (
    <section class="text-gray-600 body-font">
  <div class="  ">
    
    <div class="flex  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
          <img src={props.img} alt="" />
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg> */}
        </div>
        <div class="">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{props.head}</h2>
          <p class="leading-relaxed text-sm px-8">{props.para}</p>
          
        </div>
      </div>
     
    </div>
  </div>
</section>
      
  )
}

export default Highschoolcard

{/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
