import React, {useState, useEffect}from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../../UI/CourseCard/BoxCourseCard/CourseCard';
import Tab from 'react-bootstrap/Tab';
import './dashboard.css'
import axios from 'axios'
import Tabs from 'react-bootstrap/Tabs';
function Dashboard() {

  const [course, setCourse] = useState([])

  useEffect(() => {
    fetch('/eLearning/allCourses', {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      setCourse(data)
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="mt-5">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled" className="mb-3">
          <Tab eventKey="home" title="My Courses">
            <Container>
              <Row>
              {
                course.map(task => {
                  return(
                    <Col lg={4} md={6} sm={12} >
                  <CourseCard task={task} />
                  <br />

                </Col>
               
                  )
                })
              }
              </Row>
              <br />
            </Container>
          </Tab>
          <Tab eventKey="profile" title="All Courses" >
            <Container>
              <Row>
              {
                course.map(task => {
                  return (<Col>
                  <CourseCard task={task} />
                  <br />
                </Col>)
                  
                })
              }
                
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
