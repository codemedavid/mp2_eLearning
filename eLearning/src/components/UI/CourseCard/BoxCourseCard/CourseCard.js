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
       <Link to={`/topics/${task.courseId}`} style={{ cursor: 'pointer' }} className='no-text-decoration'>
        <Card>
          <Card.Img variant="top" src={Onepercent} />
          <Card.Body className="bg-white">
            <Card.Title className="text-black no-text-decoration card__title title__height">{task.title}</Card.Title>
            <Card.Text className="card__text no-text-decoration">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <Row>
              <Col lg="3">
                <img src={User} alt="" className="user__icon" />
              </Col>
              <Col lg="7">
              <div className="d-flex align-items-center justify-content-center">
              <p className="author__name no-text-decoration">John Angelo David</p>
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
