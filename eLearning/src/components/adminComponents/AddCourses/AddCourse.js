import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AddCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addCourseHandler = () => {
    const data = {
      title: title,
      description: description,
      published: true
    };

    fetch('/eLearning/addCourse', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response or update the UI accordingly

        // Clear the form fields after a successful submission
        setTitle('');
        setDescription('');
        
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addCourseHandler(); // Call the addCourseHandler function
  };

  return (
    <>
      <Container className='p-5'>
        <h2>Add Courses</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddCourse;
