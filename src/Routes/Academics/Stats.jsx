import React from 'react'
import { useState,useEffect } from "react"
import UniqueComp from '../../components/uniquecomp'

import buil from "/Events/buil.jpg"


function Stats() {
  
    const uniqueStyle={ backgroundImage: `url(${buil})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "rgba(47, 109, 67, 1)" }

    const [count, setCount] = useState(0);
    useEffect(() => {
        let intervalId;
        if (count < 1984) {
            intervalId = setInterval(() => {
              setCount((prevCount) => prevCount + 1);
            }, 1000);
          }
      
          // Clean up the interval when the component unmounts
          return () => clearInterval(intervalId);
        }, [count]);

        const [dept, setDept] = useState(0);
        useEffect(() => {
            let intervalId;
            if (dept < 200) {
                intervalId = setInterval(() => {
                  setDept((prevDept) => prevDept + 1);
                }, 1000);
              }
          
              // Clean up the interval when the component unmounts
              return () => clearInterval(intervalId);
            }, [dept]);;
            
            // Excellence
            const [excel, setExcel] = useState(0);
            useEffect(() => {
                let intervalId;
                if (excel < 2890) {
                    intervalId = setInterval(() => {
                      setExcel((prevExcel) => prevExcel + 1);
                    }, 1000);
                  }
              
                  // Clean up the interval when the component unmounts
                  return () => clearInterval(intervalId);
                }, [excel]);;

                  // Teachers
            const [teach, setTeach] = useState(0);
            useEffect(() => {
                let intervalId;
                if (teach < 86) {
                    intervalId = setInterval(() => {
                      setTeach((prevTeach) => prevTeach + 1);
                    }, 1000);
                  }
              
                  // Clean up the interval when the component unmounts
                  return () => clearInterval(intervalId);
                }, [teach]);;
                   // Board
            const [board, setBoard] = useState(0);
            useEffect(() => {
                let intervalId;
                if (excel < 12) {
                    intervalId = setInterval(() => {
                      setBoard((prevBoard) => prevBoard + 1);
                    }, 1000);
                  }
              
                  // Clean up the interval when the component unmounts
                  return () => clearInterval(intervalId);
                }, [board]);;
            
                  // award
            const [award, setAward] = useState(0);
            useEffect(() => {
                let intervalId;
                if (award < 12) {
                    intervalId = setInterval(() => {
                      setAward((prevAward) => prevAward + 1);
                    }, 1000);
                  }
              
                  // Clean up the interval when the component unmounts
                  return () => clearInterval(intervalId);
                }, [award]);;
            
        
    
       
    return (
        <>
            {/* <h1> Unique JDH here</h1> */}
            <div className=" h-[400px] bg-blend-multiply " style={uniqueStyle} >
              <div className=" flex items-center justify-start flex-col my-12">
                <h1 className="text-center font-bold text-4xl py-12  text-white">Our Stats Speaks</h1>
                
                <div className="inline-flex flex-row gap-24 container mt-[-89px] justify-evenly  ">
                <UniqueComp num={count} title="Year Founded"/>
                <UniqueComp  num={dept} title="CERTIFIED TEACHERS

"/>
                <UniqueComp  num={excel} title="GRADUATED STUDENTS

"/>
                <UniqueComp  num={teach} title="AWARDS WINNER

"/> 
                
                
                </div>
            </div>

            </div>
            

           

        </>
  )
}

export default Stats