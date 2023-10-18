import Stage from "./Stage"
const Stages = () => {
    return(
        <>
        {/* <h1> These arethe stages section</h1> */}
        {/* content of academics */}
        <div className="flex container mx-auto  my-16  ">

        
            <div className=" flex flex-col w-1/3   ">

              <h1 className="text-5xl text-[#5E3625] font-semibold -2 pb-6  mx-8">Academic stages</h1>
            <h4 className=" mx-auto text-justify px-8"> Established in 1920, University of El Dorado has long been a home to critical thinking, progressive education, and a conscientious community. This private non-profit university is committed to pushing positive change and creating a caring world for everyone.<span><p className=" text-xl mt-4 underline underline-offset-1	 text-[#5E3625]">READ MORE</p></span> </h4>
           
                </div>
        <div className="flex flex-row justify-evenly  md:w-2/3 w-full my-auto mx-auto ">

        <Stage img="https://images.unsplash.com/photo-1694758375810-2d7c7bc3e84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" study="Madrasa Studies"/>
        <Stage img="https://images.unsplash.com/photo-1588075592405-d3d4f0846961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" study="Primary School"/>
        <Stage img="https://media.istockphoto.com/id/534575991/photo/teacher-with-his-pupils-in-classroom.webp?b=1&s=170667a&w=0&k=20&c=rLiWie4B_Ul90KhrEpLIEuB5N6OV6hHcsRCru-M_Wrs=" study="Secondary School"/>
        </div>
        
        </div>
        </>
        
    )
}
export default Stages

