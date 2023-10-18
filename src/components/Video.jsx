import ReactPlayer from 'react-player'
import ReactModal from 'react-modal';
import React, { useState } from 'react';



const Video = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    

    return (
        <>
            <div className='mt-12 flex container mx-auto  h-[450px]'>

                          
            {/* <div className="flex  mx-auto mt-20  ">
                {/* video player  */}
                {/* <div className=" mx-12 w-1/2 border-black shadow-2xl ">
                    
                    <ReactPlayer className="" url={'https://www.youtube.com/watch?v=CCuZUId4xtY'} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />

                </div> */} 





  
    <div className="flex mx-auto mt-20">
      {/* Clickable image */}
      <div className="mx-12 w-[500px] border-black shadow-2xl">
        <img 
          src="/Events/22.jpg"
          alt="Click to play video"
          style={{ cursor: 'pointer' }}
          onClick={openModal}
        />
      </div>

      {/* Modal with video player */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
      >
        <button onClick={closeModal}>Close</button>
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=CCuZUId4xtY'}
          controls={true}
          onPlay={() => console.log('video is playing')}
          onPause={() => console.log('video is paused')}
        />
      </ReactModal>
    </div>
  





                {/* Matter related to the video */}
                <div className="flex flex-col w-1/2 justify-around  ">

                    <h1 className="text-5xl text-[#5E3625] font-semibold p-2">Take pride in  how far you've come.</h1>
                    <h4 className="p-4 text-justify">To provide quality education with islamic orientation Promote excellent manners & high moral values Development of overall personality of the students and optimum nourishment of their natural talents Prepare students to render their obligations towards society as an ambassador of islam.The institution is having competent and well balanced staff to train the students overall personality. Spiritual growth is addressed by the "ULAMA-E-DEEN" qualified from reputed Islamic Universities. Sate syllabus is being taught by the trained graduates, post graduates. Where as Karate, Cricket coach and physical education. <span><p className=" text-xl mt-4 underline underline-offset-1 hover:cursor-pointer	 text-[#5E3625]">READ MORE</p></span></h4>

                </div>

            </div>
            



        </>
    )
}
export default Video


{/* <video class="w-96" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> */}