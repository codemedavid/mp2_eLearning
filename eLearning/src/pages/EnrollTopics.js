import React from 'react'
import Helmet from '../components/mainComponents/helmet/Helmet'
import Banner from '../assets/images/banner.png'
import EnrollTopicSection from '../components/TopicSection/EnrollTopicSection'
import Header from '../components/mainComponents/header/Header'
const EnrollTopics = () => {
  return (
    <>    
    <Header></Header>
    <Helmet backgroundImage={Banner}></Helmet>
    <EnrollTopicSection></EnrollTopicSection>
    </>
  )
}

export default EnrollTopics