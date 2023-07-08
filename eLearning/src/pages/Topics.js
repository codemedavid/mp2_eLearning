import React from 'react'
import Helmet from '../components/mainComponents/helmet/Helmet'
import Banner from '../assets/images/banner.png'
import TopicSection from '../components/TopicSection/TopicSection'
import Header from '../components/mainComponents/header/Header'
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
