import React from 'react'

function ContactCard(props) {
  return (
    <>
   <div class="w-full max-w-sm bg-white border mt-36 mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-t hover:border-4 hover:border-b-green-500">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3" src={props.im} alt="Bonnie image" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.main}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.submain}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.mail}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <h5>{props.add}</h5>
        </div>
    </div>
</div>


    </>
  )
}

export default ContactCard