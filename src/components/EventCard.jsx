const EventCard = (props) => {
    return (
        // w-[480px]  
        <>
            <div className="relative h-[296px] w-1/4  ">
                <div>
                    <img className="relative bg-cover bg-no-repeat h-[298px] w-[492px] " src={props.img} alt="AirMax Pro" />
                </div>
                <div   className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-green-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
                <div className="absolute bottom-4 left-4 text-left">

                    <h1 className="text-lg font-bold text-white">{props.event}</h1>

                </div>

            </div>







        </>
    )
}

export default EventCard


{/* <p className="mt-2 text-sm text-gray-300">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
debitis?
</p>
<button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
View Profile →
</button> */}





//shd
{/* <div className="relative h-[300px] w-[500px] rounded-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50 border-2 border-black">
    <div className="relative max-w-xs  bg-cover bg-no-repeat">
        <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
        <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
    </div>


</div> */}

