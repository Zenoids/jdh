import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Campus from './components/Campus.jsx'
import Admission from './components/Admission.jsx'
import Contact from './components/Contact.jsx'
import Overview from './Routes/About/Overview.jsx'
import Leadership from './Routes/About/Leadership.jsx'
import Careers from './Routes/About/Careers.jsx'
import Ammenities from './Routes/Campus/Ammenities.jsx'
import Gallery from './components/Gallery.jsx'
import Infrastructure from './Routes/Campus/Infrastructure.jsx'
import Hostel from './Routes/Campus/Hostel.jsx'
import Madarsa from './Routes/Academics/Madarsa.jsx'
import News from './Routes/NewsEvents/News.jsx'
import Events from './components/Events.jsx'
import preSchool from './Routes/Academics/preSchool.jsx'
import AdmissionForm from './Routes/Admissions/admissionform.jsx'
import Admissionprocess from './Routes/Admissions/admissionprocess.jsx'
import History from './Routes/About/History.jsx'
import InquiryForm from './components/inquiryform.jsx'
import Feestructure from './Routes/Admissions/feestructure.jsx'
import EventsPage from './Routes/NewsEvents/Events.jsx'
import HighSchool from './Routes/Academics/highSchool.jsx'
import PrimarySchool from './Routes/Academics/primarySchool.jsx'
import OurGallery from './Routes/Campus/OurGallery.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[

      {
        path:"/",
        element:<Home/>
      },
      
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/campus",
        element:<Campus/>
      },
      {
        path:"/admissions",
        element:<Admission/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/overview",
        element:<Overview/>
      },
      {
        path:"/history",
        element:<History/>
      },
      {
        path:"/leadership",
        element:<Leadership/>
      },
      {
        path:"/careers",
        element:<Careers/>
      },
      {
        path:"/hostel",
        element:<Hostel/>
      },
      {
        path:"/ammenities",
        element:<Ammenities/>
      },
      {
        path:"/gallery",
        element:<OurGallery/>
      },
      {
        path:"/infrastructure",
        element:<Infrastructure/>
      },
      {
        path:"/madarsa",
        element:<Madarsa/>
      },
      {
        path:"/preschool",
        element:<preSchool/>
      },
      {
        path:"/primaryschool",
        element:<PrimarySchool/>
      },
      {
        path:"/highschool",
        element:<HighSchool/>
      },
      {
        path:"/admissionform",
        element:<AdmissionForm/>
      },
      {
        path:"/admissionprocess",
        element:<Admissionprocess/>
      },
      {
        path:"/feestructure",
        element:<Feestructure/>
      },
      {
        path:"/news",
        element:<News/>
      },
      {
        path:"/events",
        element:<EventsPage/>
      },
      {
        path:"/inquiryform",
        element:<InquiryForm/>
      },
     
     
      {
        path:"/eventspage",
        element:<EventsPage/>
      }

      // {
      //   path:"/",
      //   element:
      // },
      // {

      // }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>


)

// About
// Campus
// Academics
// Admissions
// Contact Us
// News