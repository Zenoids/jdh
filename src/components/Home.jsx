import React from 'react'
import MiddleNav from './Navbar/MiddleNav'

import Video from './Video'
import Unique from './Unique'
import Gallery from './Gallery'
import Facilities from './Facilities'
import CalltoAction from './CalltoAction'
import Footer from './Footer'
import Firstlook from './Firstlook'
import TopBarHeader from './/Navbar/TopBarHeader'
import Stages from './Stages'
import Events from './Events'
import Logo from './Navbar/Logo'
import LastNav from './LastNav'

function Home() {
  return (
    <>
       
   {/* <TopBarHeader/>
    <MiddleNav/>
    <Logo/> */}
    <Firstlook/>
     <Stages/>
    <Video/>
    <Unique/>
   <Events/>
    <Gallery/>
 <Facilities/> 
     {/* <CalltoAction/> */}
    {/* <Footer/>  
    <LastNav />  */}
    
    </>
  )
}

export default Home