import React from 'react'

function MissionComp(props) {
  return (
    <>
    <h2 class="font-medium title-font text-2xl  text-green-900 pb-4 pt-4 ">{props.vis}</h2>
    <p class="leading-relaxed ">{props.mis}</p>
    </>
  )
}

export default MissionComp