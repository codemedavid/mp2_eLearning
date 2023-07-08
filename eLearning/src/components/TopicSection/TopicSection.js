import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Instructor from '../../assets/images/instructor.jpg'
import InstructorCard from '../UI/InstructorCard.js/InstructorCard'
import InlineCourse from '../UI/InlineCourse/InlineCourse'
import './topicSection.css'
function TopicSection() {
  return (
   <Container className=' mt-4 margin-bottom'>
    <Row className='gap-2 p-2'>
        <Col className='p-0 instructor__profile' lg="4">
        <InstructorCard />
        </Col>

        <Col className=' bg-primary ' lg="7">
        <InlineCourse />
        <InlineCourse />
        <InlineCourse />
        </Col>
    </Row>
   </Container>
  )
}

export default TopicSection
