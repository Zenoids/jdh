
import './App.css'
import MiddleNav from './components/Navbar/MiddleNav'

import Video from './components/Video'
import Unique from './components/Unique'
import Gallery from './components/Gallery'
import Facilities from './components/Facilities'
import CalltoAction from './components/CalltoAction'
import Footer from './components/Footer'
import Firstlook from './components/Firstlook'
import TopBarHeader from './components/Navbar/TopBarHeader'
import Stages from './components/Stages'
import Events from './components/Events'
import Logo from './components/Navbar/Logo'
import LastNav from './components/LastNav'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
function App() {

  return (

    <>
    
     
   <TopBarHeader/>
    <MiddleNav/>
    <Logo/>
    <Firstlook/>
     <Stages/>
    <Video/>
    <Unique/>
   <Events/>
    <Gallery/>
 <Facilities/> 
     <CalltoAction/>
    <Footer/>  
    <LastNav /> 
     

 
    </>
  )
}


export default App
