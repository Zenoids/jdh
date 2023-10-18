import student from "../assets/students.png"
import unq from "/Gallery/4.jpg"

import UniqueComp from "./uniquecomp"
import { useState,useEffect } from "react"
const Unique = () => {
    const uniqueStyle={ backgroundImage: `url(${unq})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "rgba(47, 109, 67, 1)" }

    const [count, setCount] = useState(0);
    useEffect(() => {
        let intervalId;
        if (count < 10) {
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
            if (dept < 4) {
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
                if (excel < 10) {
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
                if (excel < 50) {
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
                <h1 className="text-center font-bold text-4xl py-12  text-white">UNIQUE JDH</h1>
                
                <div className="inline-flex flex-row gap-24 container mt-[-89px] justify-evenly  ">
                <UniqueComp num={count} title="Students"/>
                <UniqueComp  num={dept} title="Departments"/>
                <UniqueComp  num={excel} title="Years Excellence"/>
                <UniqueComp  num="1" title="Mission"/> 
                <UniqueComp  num={teach} title="Teaching Faculty"/>
                <UniqueComp  num={board} title="Board Members"/> 
                <UniqueComp  num={award} title="Awards"/>
                
                </div>
            </div>

            </div>
            

           

        </>
    )
}
export default Unique