import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../../UI/CourseCard/BoxCourseCard/CourseCard';
import Tab from 'react-bootstrap/Tab';
import './dashboard.css';
import axios from 'axios';
import Tabs from 'react-bootstrap/Tabs';
import UnenrolledCourseCard from '../../UI/CourseCard/Unenrolled Card/UnenrolledCourseCard';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('/eLearning/allCourses', { method: 'GET', mode: 'cors', headers: {
      'Authorization': `${token}` 
    } })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setError('You have to log in');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('An error occurred while fetching the courses');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (courses.length === 0) {
    return <h1>You have to log in</h1>;
  }

  return (
    <div className="mt-5">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled" className="mb-3">
          <Tab eventKey="home" title="My Courses">
            <Container>
              <Row>
              {courses.map(task => {
  console.log('Course:', task);
  return (
    <Col lg={3} md={6} sm={12} key={task.id}>
      {task && task.id ? (
        <CourseCard task={task} />
      ) : (
        <p>You have to log in</p>
      )}
      <br />
    </Col>
  );
})}
              </Row>
              <br />
            </Container>
          </Tab>
          <Tab eventKey="profile" title="All Courses">
            <Container>
              <Row>
              {courses.map(task => {
  console.log('Course:', task);
  return (
    <Col lg={3} md={6} sm={12} key={task.id}>
      {task && task.id ? (
        <UnenrolledCourseCard task={task} />
      ) : (
        <p>Invalid course data</p>
      )}
      <br />
    </Col>
  );
})}
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
