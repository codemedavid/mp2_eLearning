import React from 'react'
import './helmet.css'
import { Link } from 'react-router-dom'
import Banner from '../../assets/images/banner.png'
function Helmet(props) {
    const bg = props.backgroundImage
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.5)), url(${bg})`
    }
  return (
    <div>
        <div className="banner" style={backgroundImage}>
      <div className="helmet__title">
        <h2>1% Freelancer Formula Accelerator</h2>
        <p>Apply The 1% Formula faster and stronger through a step-by-step learning and implementation process!</p>
        <button className='btn btn-primary'><Link className="text-white" to={'/lessons/2'}>Resume Course </Link></button>
      </div>
      </div>
    </div>
  )
}

export default Helmet
