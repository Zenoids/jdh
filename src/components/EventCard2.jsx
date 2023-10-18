const EventCard2 = (props) => {
    return (

        <>
            <div className="relative h-[296px] w-1/4">
                <div>
                    <img className="relative bg-cover bg-no-repeat h-[298px] w-[492px] " src={props.img} alt="AirMax Pro" />
                </div>
                <div   className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-[#fa4640] bg-fixed opacity-40 transition duration-300 ease-in-out hover:opacity-0"></div>
                <div className="absolute bottom-4 left-4 text-left">

                    <h1 className="text-lg font-bold text-white">{props.event}</h1>

                </div>

            </div>







        </>
    )
}

export default EventCard2
