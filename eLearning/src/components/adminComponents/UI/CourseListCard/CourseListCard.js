import React, {useState, useEffect} from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Topic1 from '../../../../assets/images/topic1.png'
import {faPencil, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CourseListCard() {
    const [course, setCourse] = useState([])

  useEffect(() => {
    fetch('/eLearning/allCourses', {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      setCourse(data)
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <div>
    <Container>
    <Table responsive="lg">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>title</th>
            <th>action  </th>
           
          </tr>
        </thead>
        <tbody>
        {
                course.map(task => {
                  return(
                    <tr>
                        <td>{task.id}</td>
                        <td><img src={task.img} alt=""  style={{width: "20%"}}/></td>
                        
                        <td style={{width: "20%"}}><Link to={`/admin/addTopic/${task.id}`}>{task.title}</Link></td>
                        <td>
                            <div className="d-flex gap-3" style={{width: "20%"}}>
                            <Link to={`/admin/edit/${task.id}`}>
                            <div className="edit">
                            <FontAwesomeIcon icon={faPencil} style={{color: "#11ac06",}} className='fs-4' />
                            </div>
                            </Link>
                           
                            <div className="delete">
                            <FontAwesomeIcon icon={faTrash} style={{color: "#8f0e05",}} className='fs-4'/>
                            </div>
                            </div>
                            </td>  
                        </tr>
                  )
                })
              }
          
        </tbody>
      </Table>
    </Container>
    </div>
  )
}

export default CourseListCard
