import React from 'react'

function Board(props) {
  return (
    <div className="flex flex-col ">
            <img src={props.im} alt="" />
            <h3 className='text-center'>{props.p}</h3>
          </div>
    
  )
}

export default Board