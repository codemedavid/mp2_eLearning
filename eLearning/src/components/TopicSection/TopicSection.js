import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstructorCard from '../UI/InstructorCard.js/InstructorCard';
import InlineCourse from '../UI/InlineCourse/InlineCourse';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './topicSection.css';

function TopicSection() {
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/eLearning/courseTopics/${id}`, {headers: {
          'Authorization': `Bearer ${token}` }
        });
        setCourseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className='mt-4 margin-bottom'>
      <Row className='gap-2 p-2'>
        <Col className='p-0 instructor__profile' lg="4">
          <InstructorCard />
        </Col>

        <Col className='bg-primary' lg="7">
          {courseData ? (
            courseData.map(task => (
              <InlineCourse key={task.courseId} task={task} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TopicSection;
