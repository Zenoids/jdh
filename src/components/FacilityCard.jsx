// const FacilityCard = (props) => {
//     const cardStyle={
//         backgroundImage:`url(./Events/${props.img})`,
//      backgroundRepeat:"no-repeat", 
//      backgroundSize:"cover"}
//      console.log(props)
     
 


    
//     return(
//         <>
//        {/* <div style={cardStyle}  className="pb-6 flex  px-4 overflow-hidden h-[600px]  opacity-80 hover:opacity-100  transition duration-300 ease-in-out  " > */}
//        {/* <div style={cardStyle}  className="pb-6 flex  px-4 overflow-hidden h-[600px]  transition duration-300 ease-in-out  " >
//         <div className="" style={{backgroundColor:"rgba(0,0,0,0.5)"}}></div> */}
//        <div style={cardStyle}  className=" " >
//         {/* <div className="pb-6 flex  px-4 overflow-hidden h-[600px]  transition duration-300 ease-in-out  hover:opacity-10" style={{backgroundColor:"rgba(0,0,0,0.5)"}}> */}
//         <div className="pb-6 flex flex-col justify-end text-white px-4 overflow-hidden h-[600px]  transition duration-300 ease-in-out  hover:opacity-10" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>

//         {/* </div> */}
//         {/* <div className="flex flex-col justify-end text-white"> */}
//         <div className="z-10 ">
//             <h1 className=" text-xl hover:text-black ">{props.matter}</h1>
//             <h4 className="  text-sm">{props.submatter}</h4>
//             </div>
//         </div>
//        </div>
       
        
//         </>
//     )
// }

// export default FacilityCard;
import React, { useState } from 'react';

const FacilityCard = (props) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundImage: `url(./Events/${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const submatterStyle = {
    transform: hovered ? 'translateY(0%)' : 'translateY(100%)',
    transition: 'transform 0.8s ease-in-out',
    visibility: hovered ? 'visible' : 'hidden',

  };

  return (
    <>
      <div
        style={cardStyle}
        className="pb-6 flex flex-col justify-end text-white px-4 overflow-hidden h-[600px] relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 w-full h-full bg-black opacity-50 hover:opacity-10 transition-opacity duration-300 ease-in-out"
        ></div>
        <div className="z-10">
          <h1 className="text-xl">{props.matter}</h1>
          <div className="submatter" style={submatterStyle}>
            <h4 className="text-sm">{props.submatter}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;



// import React from 'react';

// const FacilityCard = (props) => {
//   const cardStyle = {
//     backgroundImage: `url(./Events/${props.img})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   };

//   return (
//     <>
//       <div
//         style={cardStyle}
//         className="pb-6 flex flex-col justify-end text-white px-4 overflow-hidden h-[600px] transition duration-300 ease-in-out hover:opacity-100 relative"
//       >
//         <div
//           className="absolute inset-0 w-full h-full bg-black opacity-50 hover:opacity-10 transition-opacity duration-300 ease-in-out"
//         ></div>
//         <div className="z-10">
//           <h1 className="text-xl">{props.matter}</h1>
//           <h4 className="text-sm">{props.submatter}</h4>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FacilityCard;

// import React from 'react';

// const FacilityCard = (props) => {
//   const cardStyle = {
//     backgroundImage: `url(./Events/${props.img})`,
//     backgroundRepeat:"no-repeat", 
//      backgroundSize:"cover"
//   };

//   return (
//     <>
//       <div
//         className="pb-6 flex flex-col justify-end text-white px-4 overflow-hidden h-[600px] transition duration-300 ease-in-out hover:opacity-100 relative"
//       >
//         <div
//           style={cardStyle}
//           className="absolute inset-0 w-full h-full bg-black opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
//         ></div>
//         <h1 className="text-xl z-10">{props.matter}</h1>
//         <h4 className="text-sm z-10">{props.submatter}</h4>
//       </div>
//     </>
//   );
// };

// export default FacilityCard;

// import React from 'react';

// const FacilityCard = (props) => {
//   const cardStyle = {
//     backgroundImage: `url(./Events/${props.img})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   };

//   return (
//     <>
//       <div
//         className="pb-6 flex flex-col justify-end text-white px-4 overflow-hidden h-[600px] transition duration-300 ease-in-out hover:opacity-100 relative"
//       >
//         <div
//           style={cardStyle}
//           className="absolute inset-0 w-full h-full bg-black opacity-80 transition-opacity duration-300 ease-in-out"
//         ></div>
//         <h1 className="text-xl z-10">{props.matter}</h1>
//         <h4 className="text-sm z-10">{props.submatter}</h4>
//       </div>
//     </>
//   );
// };

// export default FacilityCard;



// export default FacilityCard
        // <div className="flex items-center justify-center">
        
        //     {/* background image  */}
        //     <div  className="flex h-[844px] w-[390px]">

        //     </div>

        // </div>

//         import React from 'react';

// const FacilityCard = (props) => {
//   const cardStyle = {
//     backgroundImage: `url(./Events/${props.img})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   };

//   const handleMouseEnter = () => {
//     cardStyle.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Black background with opacity
//     cardStyle.opacity = '1'; // Full opacity on hover
//   };

//   const handleMouseLeave = () => {
//     cardStyle.backgroundColor = 'transparent'; // Reset background color
//     cardStyle.opacity = '0.8'; // Default opacity on hover out
//   };

//   return (
//     <>
//       <div
//         style={cardStyle}
//         className="pb-6 flex px-4 overflow-hidden h-[600px] opacity-80 transition duration-300 ease-in-out hover:opacity-100"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="flex flex-col justify-end text-white">
//           <h1 className="text-xl">{props.matter}</h1>
//           <h4 className="text-sm">{props.submatter}</h4>
//         </div>
//       </div>
//     </>
//   );
// };

