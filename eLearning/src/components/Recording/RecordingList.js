import React from 'react'
import LessonCard from './LessonCards/LessonCard'
function RecordingList() {
  return (
    <div className='bg-primary w-100 recording__list d-flex flex-column justify-content-between align-items-center'>
    <div className='lesson__box '>
    <h6 className='px-3 py-2 text-white'>Welcome to the conversion code insider access</h6>
    <div className="lesson__card">
    
      <LessonCard></LessonCard>
      <LessonCard></LessonCard>
      <LessonCard></LessonCard>
      <LessonCard></LessonCard>
      <LessonCard></LessonCard>
      <LessonCard></LessonCard>
    </div>

    
   
    </div>

      <div className="w-50 d-flex align-items-center justify-content-center button__box">
      <button className='btn btn-warning my-3 fs-0'>Next Category</button>
      </div>
      
    </div>
  )
}

export default RecordingList
