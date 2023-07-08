import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import Topic1 from '../../../../assets/images/topic1.png'
import './inlineCourseCard.css'

function InlineCourseCard() {
  return (
    <div>
      <Row className='my-3'>
        <Col lg="3">
        <img src={Topic1} className="topic__img px-2" alt="" />
        </Col>
        <Col lg="8">
            <h3 className='fs-5 text-white'>
                Step 1: Apply For The 1% 
                Community Group Coaching 
                Program
            </h3>
            
        </Col>
      </Row>
    </div>
  )
}

export default InlineCourseCard
