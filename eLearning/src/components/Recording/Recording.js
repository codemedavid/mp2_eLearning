import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Container, Col, Row } from 'react-bootstrap';

import './recording.css';
import axios from 'axios';
import Thumbnail from '../../assets/images/onepercent.png';

function Recording() {
  const { id } = useParams();
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const getSingleCourseData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/eLearning/topic/${id}`);
        console.log(data);
        setUrl(data.url);
        setDescription(data.description);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCourseData();
  }, [id]);

  return (
    <div className='recording bg-white'>
      <div className='about__lesson mx-4'>
        <h6 className='text-black'>ABOUT THIS LESSON</h6>
      </div>
      <Container fluid className='m-0 p-0'>
        <Row>
          <Col>
            {url ? (
              <ReactPlayer
                url={url}
                light={true}
                className='video'
                width='100%'
     
              />
            ) : (
              'No Video'
            )}
          </Col>
        </Row>
      </Container>

      <div className='description'>
        <p className='text-black mx-4 py-2 fs-0'>{description}</p>
      </div>
    </div>
  );
}

export default Recording;
