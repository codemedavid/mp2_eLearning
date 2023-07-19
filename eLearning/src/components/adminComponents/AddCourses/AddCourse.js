import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
function AddCourse() {

  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);

  const addCourseHandler = () => {
    const formData = new FormData();
    formData.append('img', img);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('published', true);
    const token = localStorage.getItem('token');
    fetch('/eLearning/addCourse', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `${token}` 
      }
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response or update the UI accordingly

        // Clear the form fields after a successful submission
        setTitle('');
        setDescription('');
        setImg(null);
        navigate('/')
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourseHandler();
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
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>File</Form.Label>
            <Form.Control type='file' onChange={(e) => setImg(e.target.files[0])} />
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
