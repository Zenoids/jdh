import React from 'react'

function LeadershipCard(props) {
  return (
   <>
   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
<img class="rounded-full w-24 mt-4 mx-auto text-center h-24 border-2 border-black" src="/docs/images/examples/image-4@2x.jpg" alt="image description"/>

    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>
   </>
  )
}

export default LeadershipCard