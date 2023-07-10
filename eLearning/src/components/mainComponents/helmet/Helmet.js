import { useEffect, useState } from 'react'
import './helmet.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
function Helmet(props) {
  
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
      const getSingleCourseData = async () => {
        const {data} = await axios.get(`http://localhost:8000/eLearning/course/${id}`)
        console.log(data)
        setTitle(data.title)
        setDescription(data.description)
      }
      getSingleCourseData()
    }, [id])


    const bg = props.backgroundImage
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.5)), url(${bg})`
    }
  return (
    <div>
        <div className="banner" style={backgroundImage}>
      <div className="helmet__title">
        <h2>{title} </h2>
        <p className='overflow-hidden' style={{height: "100px"}}>{description}</p>
        <button className='btn btn-primary'><Link className="text-white" to={'/lessons/2'}>Resume Course </Link></button>
      </div>
      </div>
    </div>
  )
}

export default Helmet
