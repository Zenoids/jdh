import { findDOMNode } from "react-dom"

const UniqueComp = (props) => {
    return (
        <>
            <section className="text-gray-600 ">
                <div className="container px-5 py-36 mx-auto">
                    <div className="flex flex-wrap  ">
                        
                        <div className=" text-white">
                            <h2 className="title-font text-center text-white font-medium sm:text-4xl text-3xl ">{props.num}</h2>
                            <p className=" text-center text-lg ">{props.title}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default UniqueComp;