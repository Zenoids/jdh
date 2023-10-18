import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBarHeader from './Navbar/TopBarHeader'
import MiddleNav from './Navbar/MiddleNav'
import Logo from './Navbar/Logo'
import Footer from './Footer'
import LastNav from './LastNav'
import CalltoAction from './CalltoAction'

function Layout() {
  return (
    <>
     <TopBarHeader/>
    <MiddleNav/>
    <Logo/>

    <Outlet/>
    
    <CalltoAction/>

    <Footer/>  
    <LastNav /> 
    </>


    )
}

export default Layout