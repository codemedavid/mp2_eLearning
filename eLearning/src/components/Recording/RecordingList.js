import React, {useState, useEffect} from 'react'
import LessonCard from './LessonCards/LessonCard'
import { Link } from 'react-router-dom'
function RecordingList() {
  const [lesson, setLesson] = useState([])

  useEffect(() => {
    fetch('/eLearning/allTopics', {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      setLesson(data)
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <div className='bg-primary w-100 recording__list d-flex flex-column justify-content-between align-items-center'>
    <div className='lesson__box '>
    <h6 className='px-3 py-2 text-white'>Welcome to the conversion code insider access</h6>
    <div className="lesson__card">
    {
      lesson.map(lesson => {
        return <LessonCard lesson={lesson}/>
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
