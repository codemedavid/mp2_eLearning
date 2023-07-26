import React, {useEffect} from 'react'
import Helmet from '../components/mainComponents/helmet/Helmet'
import Banner from '../assets/images/banner.png'
import TopicSection from '../components/TopicSection/TopicSection'
import Header from '../components/mainComponents/header/Header'
import { useNavigate } from 'react-router-dom'
function Topics() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);
  return (
    <div>
       <Header></Header>
       <Helmet backgroundImage={Banner}></Helmet>
       <TopicSection></TopicSection>
    </div>
  )
}

export default Topics
