import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Modal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  const navigate = useNavigate()
 
  const notify = () =>
  toast.success('🦄 Course Added Successfully Check All Courses To See The Course', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
  const addCourseHandler = () => {
    //ok
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
        notify()
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourseHandler();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`} style={{zIndex: 10}}>
      <div className="bg-gray-800 opacity-75 absolute w-full h-full"></div>
      <div className="bg-white w-1/2 p-6 rounded shadow-lg z-50">
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
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
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


function AddCourse() {

  

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
    <>
      <Container className='p-5 d-flex justify-content-end'>
  
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Course
      </button>

      {/* Pass isOpen and onClose props to the Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

       
      </Container>
    </>
  );
} 

export default AddCourse;
