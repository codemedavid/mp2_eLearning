import React, {useState, useEffect}from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../../UI/CourseCard/BoxCourseCard/CourseCard';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios'
import Tabs from 'react-bootstrap/Tabs';
const COURSES = [
  {
    title: "1% Freelancing",
    courseId: 1
  },
  {
    title: "The New Freelancer",
    courseId: 2
  },
  {
    title: "The Business Owner" ,
    courseId: 3
  },
  {
    title: "Skyrocket your Biz",
    courseId: 4
  }
  
]
const MY_COURSE = [
  {
    title: "Introduction to Freelancing",
    courseId: 5
  },
  {
    title: "Freelancer to Business Owner",
    courseId: 6
  },
  {
    title: "The New Agency Owner",
    courseId: 7
  }
]
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
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="My Courses">
            <Container>
              <Row>
              {
                course.map(task => {
                  return(
                    <Col>
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
          <Tab eventKey="profile" title="All Courses">
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
