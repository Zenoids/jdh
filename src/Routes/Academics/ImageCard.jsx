import React from 'react'

const ImageCard = (props)=> {
  return (
    <div className="relative  hover:border-black hover:border-8  py-1  ">
    <div>
        <img className="relative bg-cover bg-no-repeat h-[310px] w-[492px]  " src={props.img} alt="AirMax Pro" />
    </div>
    <div   className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden   bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 hover:border-8 hover:border-black"></div>
    <div className="absolute bottom-4 left-4 text-left">

        {/* <h1 className="text-lg font-bold text-white">{props.event}</h1> */}

    </div>

</div>

  )
}

export default ImageCard