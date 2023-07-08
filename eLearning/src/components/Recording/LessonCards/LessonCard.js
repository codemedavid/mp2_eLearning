import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Topic1 from '../../../assets/images/topic1.png'
import './lessonCard.css'
function LessonCard() {
  return (
    <div>
   
    
  
        <Row className='my-3 d-flex justify-content-center align-items-center px-2'>

       <div className="lesson__img-box">
       <img src={Topic1} className="lesson__img  lesson" alt="" />
       </div>
        
     
            <h3 className='fs-0  text-white lesson__desc'>
                Step 1: Apply For The 1% 
                Community Group Coaching 
                Program
            </h3>
            
      </Row>
        
       
    </div>
  )
}

export default LessonCard
