import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Recording from '../components/Recording/Recording'
import RecordingList from '../components/Recording/RecordingList'
import InstructorCard from '../components/UI/InstructorCard.js/InstructorCard'
import Header from '../components/mainComponents/header/Header'
function Lessons() {
  return (
    <div>
    <Header />
    <div className='bg-black'>
    <Container>
    <Row className='gap-2'>
        <Col lg="7" className='my-4'>
          <Recording />
        </Col>
        <Col lg="4" className='my-4 d-flex justify-content-center align-items-center flex-column'>
        <div className="recordings w-100">
          <RecordingList/>
        </div>
        <div className="instructor__card-lesson">
          <InstructorCard />
        </div>
         
        </Col>
      </Row>
      
    </Container>
    </div>
    </div>
  )
}

export default Lessons
