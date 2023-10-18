import { Link } from "react-router-dom"

const LastFooter = () => {
  return (
    <>
      {/* <div class="bg-[#DCDFB1]">
                <div class="container mx-auto py-4 px-5 flex flex-wrap justify-around flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 All Rights Reserved —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Jamia Darul Huda</a>
                    </p>
                    
          <div className="flex flex-row justify-start my-auto   mt-12">
      <a href="https://www.facebook.com/jamiadarulhuda.in/" >
    <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src=" https://www.vectorlogo.zone/logos/facebook/facebook-official.svg
" />
  </a>&ensp;
      <a href="/" >
    <img width="30px"  className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" />
  </a>&ensp;
  <a href="https://twitter.com/JIHMarkaz?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
    <img width="30px"  className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" />
  </a>&ensp;
  <a href="https://www.instagram.com/jamiadarulhuda.in/">
    <img width="30px"  className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" />
  </a>&ensp;

  <a href="https://www.youtube.com/@jamiadarulhuda2924">
  <img width="30px"  className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" />
  </a>
      </div>
                </div>
            </div >  */}


      <div class="bg-[#DCDFB1]">
        <div class="container mx-auto py-4 align-end px-5 flex flex-wrap flex-col sm:flex-row">
          {/* <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 All Rights Reserved —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Jamia Darul Huda</a>
                    </p> */}
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

            <Link to="https://www.facebook.com/jamiadarulhuda.in/" class="ml-3 text-gray-500 hover:-translate-y-4 transition-all duration-300 ease-in-out">
             <img src="/icons/fb.png" alt="" />

            </Link>
            <Link to="https://www.youtube.com/@jamiadarulhuda2924" class="ml-3 text-gray-500 hover:-translate-y-4 transition-all duration-300 ease-in-out">
            <img src="/icons/utbe.png" alt="" />


            </Link>
            <Link to="/contact" class="ml-3 text-gray-500 hover:-translate-y-4 transition-all duration-300 ease-in-out">
            <img src="/icons/link.png" alt="" />

            </Link>
            <Link to="/contact" class="ml-3 text-gray-500 hover:-translate-y-4 transition-all duration-300 ease-in-out">
             <img src="icons/inst.png" alt="" />
            </Link>
            <Link to="https://twitter.com/JIHMarkaz?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="ml-3 text-gray-500 hover:-translate-y-4 transition-all duration-300 ease-in-out">
             <img src="icons/tw.png" alt="" />
            </Link>
          </span>
        </div>
      </div >

    </>


  )
}

export default LastFooter

{/* <div class="bg-gray-100">
<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
<p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
<a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
</p>
<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
<a class="text-gray-500">
  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  </svg>
</a>
<a class="ml-3 text-gray-500">
  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  </svg>
</a>
<a class="ml-3 text-gray-500">
  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
</a>
<a class="ml-3 text-gray-500">
  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
    <circle cx="4" cy="4" r="2" stroke="none"></circle>
  </svg>
</a>
</span>
</div> */}

{/* </div>
         <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
        </div> */}