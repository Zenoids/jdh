import { Link } from "react-router-dom"
const CalltoAction = () => {
    return(
        <>
        {/* <h1> This is call to action</h1> */}
        <div className="flex flex-col py-2 bg-neutral-700 text-white justify-between align-center">
            <h1 className="text-center text-4xl my-auto py-2">Admission are in progress for the Academic Year 2022-2023</h1>
            <p className="text-center px-12 text-xl mx-auto my-4">A wide range of activities are conducted for the all round development of the Child.</p>

            <div className="flex flex-row justify-center align-center mt-8 mx-auto pb-6 text-white ">
            <Link to="/inquiryform">
                <button className="px-12 mx-4 py-4  hover:text-white hover:bg-green-700 text-black bg-[#DCDFB1] rounded-full">INQUIRY FORM</button>
                </Link>

                <Link to="/contact">
                <button className=" px-12 py-4 mx-4  text-neutral-200 bg-green-900 rounded-full hover:border-dashed hover:text-white hover:bg-[#a1514e] hover:border-green-400 ">CONTACT US</button>
                </Link>
            </div>

        </div>
       
        
        </>
    )
}
export default CalltoAction