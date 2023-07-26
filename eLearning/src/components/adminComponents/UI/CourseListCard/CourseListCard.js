import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Topic1 from '../../../../assets/images/topic1.png';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './CourseListCard.css'
import { ToastContainer, toast } from 'react-toastify';
import User from '../../../../assets/images/instructor.jpg'
function CourseListCard() {
  const navigate = useNavigate()
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };
  useEffect(() => {
    fetch('/eLearning/allCourses', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCourse(data);
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/eLearning/deleteCourse/${id}`, {
        headers: {
          'Authorization': `${token}`
        }
      });

      // Assuming the server responds with success true/false
      if (response.data.success) {
        // Remove the deleted course from the course state
        setCourse(prevState => prevState.filter(task => task.id !== id));
       
      } else {
        setError('An error occurred while deleting the course');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while deleting the course');
    }
    window.location.reload()
  };
  const warn = () =>
  toast.warn(' Course Has Been Deleted', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
  const handleEnrollClick = (id) => {
    const confirmEnroll = window.confirm('Are you sure you want to delete this course?');
    if (confirmEnroll) {
      handleDelete(id);
      navigate('/')
      warn()
    }
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <Container>
          <Row>
            {course.map(task => (
              <Col lg={3} className='courseCard'>
     
 
     <motion.div style={{ width: '14rem' }} variants={cardVariants} whileHover='hover'>
         <Card>
       <Link to={`/admin/addTopic/${task.id}`} style={{ cursor: 'pointer' }} className='no-text-decoration'>
           <Card.Img variant='top' src={task.img} style={{ height: '150px', objectFit: 'cover' }} />
           <Card.Body className='bg-white shadow-lg'>
             <Card.Title className='text-black no-text-decoration card__title title__height'>
             {task.title.length > 15 ? task.title.slice(0, 15) + '...' : task.title}
             </Card.Title>
             {/* Use the description variable */}
             <Card.Text className='card__text no-text-decoration'>{task.description}</Card.Text>
           </Card.Body>
           </Link>
           <Card.Footer className='bg-black'>
             <Row>
               <div className="d-flex gap-3" style={{ width: "20%" }}>
                   <Link to={`/admin/edit/${task.id}`}>
                     <div className="edit">
                       <FontAwesomeIcon icon={faPencil} style={{ color: "#11ac06" }} className='fs-4' />
                     </div>
                   </Link>
                   <div className="delete" onClick={() => handleEnrollClick(task.id)}>
                     <FontAwesomeIcon icon={faTrash} style={{ color: "#8f0e05" }} className='fs-4' />
                   </div>
                 </div>
             </Row>
           </Card.Footer>
         </Card>
     </motion.div>
   </Col>

            ))}
            </Row>
      </Container>


    

    </div>
  );
}

export default CourseListCard;
