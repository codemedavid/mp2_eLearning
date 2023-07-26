import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Topic1 from '../../../assets/images/topic1.png'
import { Link, useParams } from 'react-router-dom'
import './lessonCard.css'
function LessonCard({lesson, course_id }) {
 
  return (
    <div>
        <Row className='my-3 d-flex justify-content-center align-items-center px-2'>
        <Link to={`/lessons/${course_id}/${lesson.id}`} className='no-decoration w-100 h-100'>
<div className="lesson__img-box">
       <img src={`http://localhost:8000/${lesson.img}`} className="lesson__img  lesson" alt="" />
       </div>
        
     
            <h3 className='fs-0  text-white lesson__desc'>
                {
                  lesson.title
                }
            </h3>
            
</Link>
      
      </Row>
        
       
    </div>
  )
}

export default LessonCard
