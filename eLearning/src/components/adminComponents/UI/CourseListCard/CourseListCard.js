import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topic1 from '../../../../assets/images/topic1.png';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function CourseListCard() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

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

  return (
    <div>
      <Container>
        <Table responsive="lg">
          <thead>
            <tr>
              <th>id</th>
              <th>img</th>
              <th>title</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {course.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td><img src={task.img} alt="" style={{ width: "20%" }} /></td>
                <td style={{ width: "20%" }}><Link to={`/admin/addTopic/${task.id}`}>{task.title}</Link></td>
                <td>
                  <div className="d-flex gap-3" style={{ width: "20%" }}>
                    <Link to={`/admin/edit/${task.id}`}>
                      <div className="edit">
                        <FontAwesomeIcon icon={faPencil} style={{ color: "#11ac06" }} className='fs-4' />
                      </div>
                    </Link>
                    <div className="delete" onClick={() => handleDelete(task.id)}>
                      <FontAwesomeIcon icon={faTrash} style={{ color: "#8f0e05" }} className='fs-4' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default CourseListCard;
