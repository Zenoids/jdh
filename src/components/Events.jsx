import EventCard from "./EventCard"
import EventCard2 from "./EventCard2"
import EventCard3 from "./EventCard3"

const Events = () => {
    return (
        <>
        <div className="mt-8 2xl:container 2xl:mx-auto">
            <h1 className="text-4xl text-center text-[#5E3625]"> Events and News</h1>

            <div className=" flex w-full mt-8 ">

            <EventCard img="/Events/campus.png" event="Event" style="" />
            
            <EventCard2 img="/Events/22.jpg" event="Gallery"/>
            <EventCard img="/Events/campus.png" event="Campus"/>
            <EventCard3 img="/Events/lib.png" event="Admission"/>
</div>
            <div className=" flex w-full  ">

            <EventCard2 img="/Events/admission.png" event="News"/>
            <EventCard img="/Events/infra.png" event="About Us"/>
            <EventCard3 img="/Events/hostel.png" event="Hostel"/>
            <EventCard img="/Events/madra.png" event="Madrasa"/>




            {/* <div className="  w-full grid grid-cols-4 mt-8 ">

            <EventCard img="/Events/campus.png" event="Event" style="" />
            
            <EventCard2 img="/Events/22.jpg" event="Gallery"/>
            <EventCard img="/Events/campus.png" event="Campus"/>
            <EventCard3 img="/Events/lib.png" event="Admission"/>
            <EventCard2 img="/Events/admission.png" event="News"/>
            <EventCard img="/Events/infra.png" event="About Us"/>
            <EventCard3 img="/Events/hostel.png" event="Hostel"/>
            <EventCard img="/Events/madra.png" event="Madrasa"/> */}




            </div>

            </div>
        </>
    )
}
export default Events