import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../../UI/CourseCard/BoxCourseCard/CourseCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UnenrolledCourseCard from '../../UI/CourseCard/Unenrolled Card/UnenrolledCourseCard';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolledData, setEnrolledData] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isEnrolledDataFetched, setIsEnrolledDataFetched] = useState(false);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    async function fetchAllCourses() {
      try {
        const response = await fetch('/eLearning/allCourses', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Authorization': `${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setError('You have to log in');
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('You have to login');
        setLoading(false);
      }
    }

    fetchAllCourses();
  }, [token]);

  useEffect(() => {
    // Fetch enrolled courses only if not fetched yet
    if (!isEnrolledDataFetched && userId) {
      async function fetchEnrolledCourses() {
        try {
          const response = await fetch(`eLearning/get/enroll/course/${userId}`, {
            method: 'GET',
            mode: 'cors'
          });

          const data = await response.json();
          setEnrolledData(data);
          setIsEnrolledDataFetched(true);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      }

      fetchEnrolledCourses();
    }
  }, [isEnrolledDataFetched, userId]);

  useEffect(() => {
    // Fetch data for each enrolled course
    const fetchEnrolledCourseData = async () => {
      const fetchRequests = enrolledData.map((data) =>
        fetch(`http://localhost:8000/eLearning/course/${data.course_id}`, {
          method: 'GET',
          mode: 'cors',
        })
      );

      try {
        const responses = await Promise.all(fetchRequests);
        const courseDataArray = await Promise.all(responses.map((response) => response.json()));
        setEnrolledCourses(courseDataArray);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    if (enrolledData.length > 0) {
      fetchEnrolledCourseData();
    }
  }, [enrolledData]);

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
          <Tab eventKey="home" title="All Courses">
            <Container>
              <Row>
                {courses.map(task => (
                  <Col lg={3} md={6} sm={12} key={task.id}>
                    <UnenrolledCourseCard task={task} id={task.id} />
                    <br />
                  </Col>
                ))}
              </Row>
              <br />
            </Container>
          </Tab>
          <Tab eventKey="profile" title="My Courses">
            <Container>
              <Row>
              {enrolledCourses.length > 0 ? (
                  enrolledCourses.map((task, index) => (
                    <Col lg={3} md={6} sm={12} key={index}>
                      <CourseCard task={task} />
                      <br />
                    </Col>
                  ))
                ) : (
                  <p>No enrolled courses yet.</p>
                )}

              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Dashboard;
