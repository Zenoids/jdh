import { Link } from "react-router-dom"



const FooterComp = (props) => {
  

    return(

        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-3 ">{props.main}</h2>
        <nav class="list-none mb-10">
         <li>
          {/* <img src={props.icon1} alt="Icon" className="w-6 h-6 mr-2 inline-block" /> */}
            <Link to={props.firstPath} className="text-neutral-700 text-lg hover:translate-x-4 hover:text-white  hover:mx-5 transition-all duration-300 ease-in-out hover:cursor-pointer ">{props.first}</Link>
           </li>
           <li>
           {/* <img src={props.icon2} alt="Icon" className="w-6 h-6 mr-2 inline-block" /> */}
             <Link to={props.secondPath}class="text-neutral-700hover:translate-x-4 text-lg hover:text-white   hover:mx-5  transition-all duration-300 ease-in-out  hover:cursor-pointer   ">{props.second}</Link>
           </li>
           <li>
          {/* <img src={props.icon3} alt="Icon" className="w-6 h-6 mr-2 inline-block" /> */}
            <Link to={props.thirdPath} class="text-neutral-700 text-lg hover:translate-x-4 hover:text-white  hover:mx-5   transition-all duration-300 ease-in-out  hover:cursor-pointer   ">{props.third}</Link>
          </li>
           <li>
            <Link to={props.fourthPath} class="text-neutral-700  text-lg hover:translate-x-4 hover:text-white  hover:mx-5   transition-all duration-300 ease-in-out  hover:cursor-pointer  ">{props.four}</Link>
           </li>
        

          
          
        </nav>
      </div>
    )
}

export default FooterComp

// ext-gray-300 text:xs sm:text-sm text-mygray hover:translate-x-2 hover:text-white transition-all duration-300 ease-in-out"
