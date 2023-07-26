import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Add this line to import useParams

import LessonCard from './LessonCards/LessonCard';

function RecordingList() {
  const [lesson, setLesson] = useState([]);
  const { course_id } = useParams(); // Now useParams is available to use

  useEffect(() => {
    fetch(`/eLearning/topics/${course_id}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        setLesson(data);
      })
      .catch(err => console.error(err));
  }, [course_id]); 
  return (
    <div className='bg-primary w-100 recording__list d-flex flex-column justify-content-between align-items-center'>
    <div className='lesson__box '>
    <h6 className='px-3 py-2 text-white'>Welcome to this course</h6>
    <div className="lesson__card">
    {
      lesson.map(lesson => {
        return  <LessonCard key={lesson.id} lesson={lesson} course_id={course_id} />;
      })
    }
     
    </div>

    
   
    </div>

      <div className="w-50 d-flex align-items-center justify-content-center button__box">
      {/* <Link>
      <button className='btn btn-warning my-3 fs-0'>Next Topic</button>
      </Link> */}
      
      </div>
      
    </div>
  )
}

export default RecordingList
