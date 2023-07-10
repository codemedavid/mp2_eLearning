import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function UpdateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:8000/eLearning/course/${id}`, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      setTitle(data)
    })
    .catch(err => console.error(err))
  }, [])
  const updateCourseHandler = () => {
    const data = {
      title: title,
      description: description,
      published: true
    };

    fetch(`/eLearning/updateCourse/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        setTitle('');
        setDescription('');
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    updateCourseHandler(); 
  
  };


  

  return (
    <>
      <Container className='p-5'>
        <h2>Update Course</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={title.title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} type='text' placeholder={title.description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default UpdateCourse;
