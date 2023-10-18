import FooterComp from "./FooterComp"
import LastFooter from "./lastfooter"
const Footer = () => {

  return (
    <>
      {/* <h1> Footer components here</h1> */}
      <footer className="text-gray-600 body-font bg-[#DCDFB1]  ">
        <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {/* <img className="h-24" src="/Events/logo.png" alt="" /> */}
              <span className=" text-xl">Jamia Darul Huda</span>
            </a>
            <p className="mt-2 text-medium text-justify text-neutral-700">Developing an environment that creates the commitment for life long learning, The quest for knowledge and excellence. strong ideological and practical adherence to Islam.
            </p>

            {/* //socials */}
            {/* <div className="flex flex-row justify-start my-auto   mt-12">
              <a href="https://www.facebook.com/jamiadarulhuda.in/" >
                <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src=" https://www.vectorlogo.zone/logos/facebook/facebook-official.svg
" />
              </a>&ensp;
              <a href="/" >
                <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" />
              </a>&ensp;
              <a href="https://twitter.com/JIHMarkaz?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" />
              </a>&ensp;
              <a href="https://www.instagram.com/jamiadarulhuda.in/">
                <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" />
              </a>&ensp;

              <a href="https://www.youtube.com/@jamiadarulhuda2924">
                <img width="30px" className=" hover:-translate-y-2 transition-all duration-300 ease-in-out" src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" />
              </a>
            </div> */}
          </div>


          <div className="flex-grow flex flex-wrap pl-20  md:mt-0 mt-10 md:text-left  ">
            <FooterComp main="Main Links"  firstPath="/contact" secondPath="/gallery" thirdPath="/campus" fourthPath="/events"  first="Admissions" second="Gallery" third="Campus" four="Events" />
            <FooterComp main="Quick Links" firstPath="/gallery" secondPath="/campus" thirdPath="/" fourthPath="/assets" first="Infrastucture" second="Campus" third="Terms & Conditions" four="Assets" />
            <FooterComp main="Academic Stages" firstPath="/preschool" secondPath="/primaryschool" thirdPath="/secondaryschool" fourthPath="/madarsa"  first="Pre-School" second="Primary-School" third="Secondary-School" four="Islamic Studies" />
            <FooterComp main="Contact Us" firstPath="/contact" secondPath="/" thirdPath="/" fourthPath="/"  first={`Wadia-e-Huda, Pahadi Shareef Road, Hyderabad, TS.`} second="jdhhighschool@gmail.com" third="7396545068 | 7731929522 " />


          </div>

        </div>
        <LastFooter />
        {/* <LastFooter/> */}
      </footer>


    </>
  )
}
export default Footer