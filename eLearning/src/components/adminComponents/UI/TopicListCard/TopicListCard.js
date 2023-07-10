import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Topic1 from '../../../../assets/images/topic1.png';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopicListCard() {
  const [topicData, setTopicData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/eLearning/courseTopics/${id}`);
        setTopicData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

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
            {topicData.length > 0 &&
              topicData[0].topics.map(topic => (
                <tr key={topic.id}>
                  <td>{topic.id}</td>
                  <td>
                    <img src={Topic1} alt="" style={{ width: '20%' }} />
                  </td>
                  <td style={{ width: '20%' }}>
                    <Link to={`/admin/addTopic/${topic.id}`}>{topic.title}</Link>
                  </td>
                  <td>
                    <div className="d-flex gap-3" style={{ width: '20%' }}>
                      <Link to={`/admin/edit/${topic.id}`}>
                        <div className="edit">
                          <FontAwesomeIcon icon={faPencil} style={{ color: '#11ac06' }} className="fs-4" />
                        </div>
                      </Link>
                      <div className="delete">
                        <FontAwesomeIcon icon={faTrash} style={{ color: '#8f0e05' }} className="fs-4" />
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

export default TopicListCard;
