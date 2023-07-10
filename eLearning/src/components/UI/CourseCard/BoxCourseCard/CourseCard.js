import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Onepercent from '../../../../assets/images/onepercent.png';
import User from '../../../../assets/images/instructor.jpg';
import './courseCard.css'
import Course from '../../../../assets/objects/CourseList'
const CourseCard = ({task}) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='courseCard'>
    {Course.title}
      <motion.div
        style={{ width: '14rem' }}
        variants={cardVariants}
        whileHover="hover"
      >
       <Link to={`/topics/${task.id}`} style={{ cursor: 'pointer' }} className='no-text-decoration'>
        <Card>
          <Card.Img variant="top" src={task.img} style={{height: "150px", objectFit: "cover" }}/>
          <Card.Body className="bg-white shadow-lg">
            <Card.Title className="text-black no-text-decoration card__title title__height">{task.title}</Card.Title>
            <Card.Text className="card__text no-text-decoration">
              {
                task.description.split(' ').slice(0, 8).join(' ')
              }
            </Card.Text>

          </Card.Body>
          <Card.Footer className="bg-black">
            <Row>
              <Col lg="3">
                <img src={User} alt="" className="user__icon" />
              </Col>
              <Col lg="7">
              <div className="d-flex align-items-center justify-content-center">
              <p className="author__name no-text-decoration text-white">John Angelo David</p>
              </div>
              </Col>
              <Col></Col>
            </Row>
          </Card.Footer>
        </Card>
        </Link>
      </motion.div>
    </div>
  );
};

export default CourseCard;
