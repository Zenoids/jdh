const Stage = (props) => {
    return (
        <>
{/* 
            <div className="flex  ">
                <div className="w-full sm:mb-0 mb-6">
                    <div className="rounded-sm h-64 w-80  overflow-hidden">
                        <img alt="content" className="object-cover h-[300px] w-[600px] " src={props.img}/>
                       
                    </div>
                    <p className="bg-yellow-900 text-white w-64 h-8 ">{props.study}</p>
                    
  
                </div>
            </div> */}
            <div className="flex relative">
  <div className="w-full sm:mb-0 mb-6">
    <div className="rounded-sm h-64 w-80  overflow-hidden relative">
      <img alt="content" className="object-cover h-[300px] w-[600px]" src={props.img} />
      <p className="bg-yellow-900 text-white w-64 h-8 absolute bottom-10 text-center left-0">{props.study}</p>
    </div>
  </div>
</div>

         </>
)
}

export default Stage