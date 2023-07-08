import React from 'react'
import Helmet from '../components/helmet/Helmet'
import Banner from '../assets/images/banner.png'
import TopicSection from '../components/TopicSection/TopicSection'
import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
function Topics() {
  return (
    <div>
       <Header></Header>
    <Helmet backgroundImage={Banner}></Helmet>
    <TopicSection></TopicSection>
    </div>
  )
}

export default Topics
