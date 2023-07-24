import React, {useState, useEffect} from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader'
import TopicListCard from '../components/adminComponents/UI/TopicListCard/TopicListCard';
import { useNavigate } from 'react-router-dom';
function AddTopicPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check the userType in localStorage
    const userType = localStorage.getItem('userType');

    // If userType is not "admin", redirect to the logout page or any other appropriate page
    if (userType !== 'instructor') {
      navigate('/login'); // Replace '/logout' with the appropriate logout page URL
    }
  }, []);
    const {id} = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const token = localStorage.getItem('token');
    const [img, setImg] = useState()

    const addTopicHandler = () => {
      const formData = new FormData();
      formData.append('img', img);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('url', url);
      formData.append('published', true);
    
      fetch(`/eLearning/addTopic/${id}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': `${token}` 
        },
        body: formData, // Set the formData as the request body
      })
        .then((response) => response.json())
        .then((result) => {
          // Handle the response or update the UI accordingly
          // Clear the form fields after a successful submission
          setTitle('');
          setDescription('');
          setUrl('');
          navigate('/')
          console.log(result)
        })
        .catch((err) => console.error(err));
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>File</Form.Label>
            <Form.Control type='file'  name='img' onChange={(e) => setImg(e.target.files[0])} />
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
