import React, {useState, useEffect} from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader'
import TopicListCard from '../components/adminComponents/UI/TopicListCard/TopicListCard';
function AddTopicPage() {
    const {id} = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const addTopicHandler = () => {
      const data = {
        title: title,
        description: description,
        url: url,
        published: true
      };
  
      fetch(`/eLearning/addTopic/${id}`, {
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
          setUrl('')
          
        })
        .catch(err => console.error(err));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      addTopicHandler(); 
    };
  


    
    return (
      <>
      <AdminHeader></AdminHeader>
        <Container className='p-5'>
          <h2>Add Topics</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video Url</Form.Label>
              <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
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


        <TopicListCard></TopicListCard>
      </>
    );
  
}

export default AddTopicPage
