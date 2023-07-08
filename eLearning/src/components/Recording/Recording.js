import React from 'react'
import Thumbnail from '../../assets/images/onepercent.png'
import './recording.css'
function Recording() {
  return (
    <div className='recording bg-white'>
        <div className="about__lesson mx-4">
        <h6 className='text-black'>ABOUT THIS LESSON</h6>
        </div>
        <div className="recording__video">
            <img src={Thumbnail} alt="" className='w-100 object-fit-contain px-3'/>
        </div>
        
        <div className="description">
            <p className='text-black mx-4 py-2 fs-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad asperiores, pariatur error distinctio quis minima dolorem est culpa doloribus quisquam facere. Suscipit officia facere deleniti nisi perferendis, itaque harum!</p>
        </div>
    </div>
  )
}

export default Recording
