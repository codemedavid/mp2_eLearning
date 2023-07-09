import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import Topic1 from '../../../../assets/images/topic1.png'
import './inlineCourseCard.css'
import { Link } from 'react-router-dom'
function InlineCourseCard(task) {
  return (
    <div>
    <Link to={`/lessons/${task.id}`}>
    <Row className='my-3'>
        <Col lg="3">
        <img src={Topic1} className="topic__img px-2" alt="" />
        </Col>
        <Col lg="8">
            <h3 className='fs-5 text-white d-flex align-items-center h-100 w-100 overflow-hidden'>
                {
                  task.name + task.task
                }
            </h3>
            
        </Col>
      </Row>
    </Link>
     
    </div>
  )
}

export default InlineCourseCard
