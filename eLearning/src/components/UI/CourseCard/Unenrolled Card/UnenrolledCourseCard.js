import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import User from '../../../../assets/images/instructor.jpg';
import './courseCard.css';
import Course from '../../../../assets/objects/CourseList';

const UnenrolledCourseCard = ({ task }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };
  const [enroll, setEnroll] = useState('Unenrolled'); // Initial state set to 'Loading'
  const id = task.id;
  const userId = localStorage.getItem('userId');
  console.log(id);

  useEffect(() => {
    // Check if both id and userId are available before making the API request
    if (id != null && userId != null) {
      fetchData(); // Assuming fetchData is defined in your component
    } else {
      // Handle the case when id or userId is not available
      setEnroll('Unenrolled'); // Set the state to 'Unenrolled' or 'Error' as per your requirement
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/eLearning/enroll/${userId}/${id}`);
  
      // Check if the courseId is present in the response data
      if (response.data && response.data.course_id === id) {
        setEnroll('Enrolled');
      } else {
        setEnroll('Unenrolled');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='courseCard'>
      {Course.title}
      <motion.div style={{ width: '14rem' }} variants={cardVariants} whileHover='hover'>
        <Link to={`/enrolltopic/${task.id}`} style={{ cursor: 'pointer' }} className='no-text-decoration'>
          <Card>
            <Card.Img variant='top' src={task.img} style={{ height: '150px', objectFit: 'cover' }} />
            <Card.Body className='bg-white shadow-lg'>
              <Card.Title className='text-black no-text-decoration card__title title__height'>
                {task.title}
              </Card.Title>
              <Card.Text className='card__text no-text-decoration'>
                {task.description.split(' ').slice(0, 8).join(' ')}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='bg-black'>
              <Row>
                <Col lg='3'>
                  <img src={User} alt='' className='user__icon' />
                </Col>
                <Col lg='9'>
                  <div className='d-flex align-items-center justify-content-center flex-column'>
                    <p className='author__name no-text-decoration text-white'>John Angelo David</p>
                    <p className='bg-success text-white text-center enroll__text rounded'>{enroll}</p>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Link>
      </motion.div>
    </div>
  );
};

export default UnenrolledCourseCard;
