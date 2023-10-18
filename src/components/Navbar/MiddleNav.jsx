
import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About';

const MiddleNav = () => {
  return (
    <div className=" flex justify-end relative  ">
      <ul className="flex flex-wrap justify-end text-lg w-full mr-64  z-40 text-green-700 bg-white font-normal  ">
        <li className="p-4 hover:cursor-pointer relative group"  ><Link to="/">  Home</Link> </li>

        <li className="p-4 hover:cursor-pointer relative group">About
          <div id="dropdown" class="relative group">
            <div class="hidden group-hover:block absolute top-0 left-0 right-4 bg-white shadow w-24 divide-y divide-gray-100 rounded-lg mt-2 dark:bg-gray-700 z-40 transition-opacity duration-300">
              <ul class="hidden group-hover:block py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                </li>
                <li>
                  <Link  to="/overview" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</Link>
                </li>
                <li>
                  <Link to="/history" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">History</Link>
                </li>
                

                <li>
                  <Link to="/leadership" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Leadership</Link>
                </li>
                <li>

                  <Link to="/careers" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <ul className="hidden absolute left-0 mt-2 z-40 bg-white border text-sm border-gray-300 py-2 px-4 group-hover:block transition-opacity duration-300 ease-in-out rounded-md shadow-lg">
            
<li  className='divide-y  border-b divide-slate-200'>Overview</li>
<li > <a className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' href=""></a>Overview</li>
<li  className='border-b border-gray-300 py-2 hover:bg-red'>History</li>
<li className='border-b border-gray-300 py-2'>Leadership</li>
<li className='hover:text-green-400 hover:bg-black'>Careers </li> {/* Added a new subitem */}
          {/* // </ul> */}


        </li>
        <li className="p-4 hover:cursor-pointer relative group">
          Campus
          <div id="dropdown" class="relative group">
            <div class="hidden group-hover:block absolute top-0 left-0 right-4 bg-white shadow w-24 divide-y divide-gray-100 rounded-lg mt-2 dark:bg-gray-700 z-40">
              <ul class="hidden group-hover:block py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                </li>
                <li>
                  <Link to="/hostel" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hostel</Link>
                </li>
                <li>
                  <Link to="ammenities" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ammenities</Link>
                </li>
                <li>
                  <Link to="/gallery" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gallery</Link>
                </li>
                <li>
                  <Link to="/infrastructure" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Infrastucture</Link>
                </li>
              </ul>
            </div>
          </div>


        
        </li>

        <li className="p-4 hover:cursor-pointer relative group">Academics
          <div id="dropdown" class="relative group">
            <div class="hidden group-hover:block absolute top-0 left-0 right-4 bg-white shadow w-36 divide-y divide-gray-100 rounded-lg mt-2 dark:bg-gray-700 z-40">
              <ul class="hidden group-hover:block py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                </li>
                <li>
                  <Link to="/madarsa" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Madrasa</Link>
                </li>
                
                <li>
                  <Link to="/primaryschool" class="block px-4 border-t border-b py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary School</Link>
                </li>
                <li>
                  <Link to="/highschool" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Secondary School</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <ul className="hidden absolute left-0 mt-2 z-40 bg-white border text-sm border-gray-300 py-2 px-4   group-hover:block transition-opacity duration-300 ease-in-out">
            <li>Madrasa</li>
            <li>Pre-School</li>
            <li>Primary School</li>
            <li>Secondary School</li> {/* Added a new subitem */}
          {/* </ul> */}
        </li>
        <li className="p-4 hover:cursor-pointer relative group">Admissions
          <div id="dropdown" class="relative group">
            <div class="hidden group-hover:block absolute top-0 left-0 right-4 bg-white shadow w-36 divide-y divide-gray-100 rounded-lg mt-2 dark:bg-gray-700 z-40">
              <ul class="hidden group-hover:block py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                </li>
                <li>
                  <Link to="admissionform" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admission Form</Link>
                </li>
                <li>
                  <Link to="admissionprocess" class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admission process</Link>
                </li>
                <li>
                  <Link to="feestructure" class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fee Structure</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <ul className="hidden absolute left-0 mt-2 z-40 bg-white border text-sm border-gray-300 py-2 px-4   group-hover:block transition-opacity duration-300 ease-in-out">
            <li>Admission Form</li>
            <li>Admission process</li>
            <li>Fee Structure</li>
            <li></li> {/* Added a new subitem */}
          {/* </ul> */}
        </li>
        <li className="p-4 hover:cursor-pointer relative group"><Link to="contact">Contact Us</Link>
        

        </li>
        <li className="p-4 hover:cursor-pointer relative group">News
          <div id="dropdown" class="relative group">
            <div class="hidden group-hover:block absolute top-0 left-0 right-4 bg-white shadow w-24 divide-y divide-gray-100 rounded-lg mt-2 dark:bg-gray-700 z-40">
              <ul class="hidden group-hover:block py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                </li>
                <li>
                  <Link to="Events" Link class="block px-4 border-t border-b  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
                </li>
                <li>
                  <Link to="News" Link class="block px-4 border-t  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</Link>
                </li>

              </ul>
            </div>
          </div>
         
        </li>

      </ul>
    </div>
  );
};


{/* <ul className="hidden absolute left-0 mt-2 z-40 bg-white border text-sm border-gray-300 py-2 px-4 group-hover:block transition-opacity duration-300 ease-in-out rounded-md shadow-lg">
            
<li  className='divide-y  border-b divide-slate-200'>Overview</li>
<li > <a className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' href=""></a>Overview</li>
<li  className='border-b border-gray-300 py-2 hover:bg-red'>History</li>
<li className='border-b border-gray-300 py-2'>Leadership</li>
<li className='hover:text-green-400 hover:bg-black'>Careers </li> {/* Added a new subitem */}
// </ul>


// import React, { useState } from 'react';

// const MiddleNav = () => {
//   const [submenus, setSubmenus] = useState(Array(8).fill(false));

//   const toggleSubmenu = (index) => {
//     const updatedSubmenus = [...submenus];
//     updatedSubmenus[index] = !updatedSubmenus[index];
//     setSubmenus(updatedSubmenus);
//   };

//   return (
//     <div className="pe-24 flex justify-end">
//       <ul className="flex flex-wrap text-lg text-[#5E3625] font-semibold">
//         <li
//           className={`relative group p-4 hover:cursor-pointer ${
//             submenus[0] ? 'text-blue-600' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(0)}
//           onMouseLeave={() => toggleSubmenu(0)}
//         >
//           Home
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[0] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem 1</li>
//             <li>Subitem 2</li>
//             <li>Subitem 3</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         <li
//           className={`relative p-4 hover:cursor-pointer ${
//             submenus[1] ? 'text-blue-600' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(1)}
//           onMouseLeave={() => toggleSubmenu(1)}
//         >
//           Campus
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[1] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem A</li>
//             <li>Subitem B</li>
//             <li>Subitem C</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         <li
//           className={`relative p-4 hover:cursor-pointer ${
//             submenus[2] ? 'text-blue-600' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(2)}
//           onMouseLeave={() => toggleSubmenu(2)}
//         >
//           About
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[2] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem X</li>
//             <li>Subitem Y</li>
//             <li>Subitem Z</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         <li
//           className={`relative p-4 hover:cursor-pointer ${
//             submenus[3] ? 'text-blue-600' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(3)}
//           onMouseLeave={() => toggleSubmenu(3)}
//         >
//           Academics
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[3] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem I</li>
//             <li>Subitem II</li>
//             <li>Subitem III</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         {/* Add more list items with submenus here */}
//       </ul>
//     </div>
//   );
// };

export default MiddleNav;

// import React, { useState } from 'react';

// const MiddleNav = () => {
//   const [submenus, setSubmenus] = useState(Array(8).fill(false));

//   const toggleSubmenu = (index) => {
//     const updatedSubmenus = [...submenus];
//     updatedSubmenus[index] = !updatedSubmenus[index];
//     setSubmenus(updatedSubmenus);
//   };

//   return (
//     <div className="pe-24 flex justify-end">
//       <ul className="flex flex-wrap text-lg text-[#5E3625] font-semibold">
//         <li>Home</li>
//         <li
//           className={`p-4 hover:cursor-pointer relative ${
//             submenus[0] ? 'group' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(0)}
//           onMouseLeave={() => toggleSubmenu(0)}
//         >
//           Campus
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[0] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem 1</li>
//             <li>Subitem 2</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         <li
//           className={`p-4 hover:cursor-pointer relative ${
//             submenus[1] ? 'group' : ''
//           }`}
//           onMouseEnter={() => toggleSubmenu(1)}
//           onMouseLeave={() => toggleSubmenu(1)}
//         >
//           About
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               submenus[1] ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem A</li>
//             <li>Subitem B</li>
//             {/* Add more subitems here */}
//           </ul>
//         </li>
//         {/* Add more list items with submenus here */}
//       </ul>
//     </div>
//   );
// };

// export default MiddleNav;

// import React, { useState } from 'react';

// const MiddleNav = () => {
//   const [isCampusDropdownOpen, setIsCampusDropdownOpen] = useState(false);

//   const toggleCampusDropdown = () => {
//     setIsCampusDropdownOpen(!isCampusDropdownOpen);
//   };

//   return (
//     <div className="pe-24 flex justify-end ">
//       <ul className="flex flex-wrap text-lg text-[#5E3625] font-semibold">
//         <li>Home</li>
//         <li
//           className={`p-4 hover:cursor-pointer relative ${isCampusDropdownOpen ? 'group' : ''}`}
//           onMouseEnter={toggleCampusDropdown}
//           onMouseLeave={toggleCampusDropdown}
//         >
//           Campus
//           <ul
//             className={`absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 ${
//               isCampusDropdownOpen ? 'block' : 'hidden'
//             } z-40`}
//           >
//             <li>Subitem 1</li>
//             <li>Subitem 2</li>
//             <li>Subitem 3</li>
//             <li>Subitem 4</li> {/* Added a new subitem */}
//           </ul>
//         </li>
//         <li className="p-4 hover:cursor-pointer">About</li>
//         <li className="p-4 hover:cursor-pointer">Academics</li>
//         <li className="p-4 hover:cursor-pointer">Admissions</li>
//         <li className="p-4 hover:cursor-pointer">Contact Us</li>
//         <li className="p-4 hover:cursor-pointer">News</li>
//         <li className="p-4 hover:cursor-pointer">Admissions</li>
//       </ul>
//     </div>
//   );
// };

// export default MiddleNav;



// import React from 'react';

// const MiddleNav = () => {
//   const handleMouseEnter = (event) => {
//     event.currentTarget.querySelector('ul').classList.add('block');
//   };

//   const handleMouseLeave = (event) => {
//     event.currentTarget.querySelector('ul').classList.remove('block');
//   };

//   return (
//     <div className="pe-24 flex justify-end ">
//       <ul className="flex flex-wrap text-lg text-[#5E3625] font-semibold">
//         <li
// >
//           Home

//         </li>
//         <li className="p-4 hover:cursor-pointer">Campus
//         <ul className="hidden absolute left-0 mt-2 bg-white border text-sm border-gray-300 py-2 px-4 group-hover:block z-40">
//             <li>Subitem 1</li>
//             <li>Subitem 2</li>
//             <li>Subitem 3</li>
//             <li>Subitem </li>
//           </ul>
//         </li>
//         <li className="p-4 hover:cursor-pointer">About</li>
//         <li className="p-4 hover:cursor-pointer">Academics</li>
//         <li className="p-4 hover:cursor-pointer">Admissions</li>
//         <li className="p-4 hover:cursor-pointer">Contact Us</li>
//         <li className="p-4 hover:cursor-pointer">News</li>
//         <li className="p-4 hover:cursor-pointer">Admissions</li>
//       </ul>
//     </div>
//   );
// };

// export default MiddleNav;


// const MiddleNav = () => {
//     return (
//         <>

//                 <div className=" pe-24 flex justify-end " >

//                     <ul className="flex flex-wrap text-lg text-[#5E3625] font-semibold ">

//                         <li className="p-4  hover:cursor-pointer "> Home
//                             <ul className="hidden">
//                             <li>dsfa</li>
//                             <li>fd</li>
//                             <li>dfas</li>
//                             <li>ds</li>
//                             <li>dfa</li></ul>

//                         </li>
//                         <li className="p-4 hover:cursor-pointer">Campus</li>
//                         <li className="p-4 hover:cursor-pointer">About</li>
//                         <li className="p-4 hover:cursor-pointer">Academics</li>
//                         <li className="p-4 hover:cursor-pointer">Admissions</li>
//                         <li className="p-4 hover:cursor-pointer">Contact Us</li>
//                         <li className="p-4 hover:cursor-pointer">News</li>
//                         <li className="p-4 hover:cursor-pointer">Admissions</li>
//                     </ul>
//                 </div>






//         </>

//     )
// }
// export default MiddleNav


{/* <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown
                                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>

                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}