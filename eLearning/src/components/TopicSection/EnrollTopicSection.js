import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstructorCard from '../UI/InstructorCard.js/InstructorCard';
import InlineCourse from '../UI/InlineCourse/InlineCourse';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './topicSection.css';

function EnrollTopicSection() {
  const navigate = useNavigate();
  const notify = () =>
    toast.success('🦄 Thank you for enrolling in this course', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const errorEnrolling = () =>
    toast.warn('⚠️ Already Enrolled in this course', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const { id } = useParams();
  const userId = localStorage.getItem('userId');

  const enrollCourse = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/eLearning/enroll`, {
        user_id: userId,
        course_id: id,
      });
      navigate('/');
      notify();
    } catch (error) {
      console.error(error);
      navigate(`/topics/${id}`)
      errorEnrolling();
    }
  };

  const handleEnrollClick = () => {
    const confirmEnroll = window.confirm('Are you sure you want to enroll in this course?');
    if (confirmEnroll) {
      enrollCourse();
    }
  };

  return (
    <Container className='mt-4 margin-bottom'>
      <Row className='gap-2 p-2'>
        <Col className='p-0 instructor__profile' lg='4'>
          <InstructorCard />
        </Col>

        <Col className='' lg='7'>
          <button className='btn btn-success' onClick={handleEnrollClick}>
            Enroll in this course
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default EnrollTopicSection;
