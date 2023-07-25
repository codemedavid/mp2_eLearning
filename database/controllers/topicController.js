const db = require('../models')
const Topic = db.topics
const multer = require('multer')
const path = require('path')

const addTopic = async (req, res) => {
    const id = req.params.id
    let info = {
        img: req.file ? req.file.path : 'Images\onepercent.png',
        course_id: id,
        title: req.body.title ? req.body.title : 'No title',
        description: req.body.description ? req.body.description : 'No Descriptions',
        url: req.body.url ? req.body.url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }


    const topics = await Topic.create(info)

    res.status(200).send(topics)
}


const getAllTopic = async (req, res) => {

    let topics = await Topic.findAll({})
    res.status(200).send(topics)
}

const getTopicCourse = async (req, res) => {
  const { course_id } = req.params;

  if (!course_id) {
    return res.status(400).json({ error: 'Topic id and Course ID are required in the URL parameters' });
  }

  try {
    // Find all topic courses that belong to the given course_id
    const topicCourses = await Topic.findAll({ where: { course_id } });

    res.status(200).json(topicCourses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching topic courses' });
  }
};
const getOneTopic = async (req, res) => {
    
    let id = req.params.id

    let topics = await Topic.findOne({where: {id: id}})
    res.status(200).send(topics)
}

const updateTopic = async (req, res) => {
    let id = req.params.id 

    const topics = await Topic.update(req.body, {where: {id: id}})
    res.status(200).send(topics)
}

const deleteTopic = async (req, res) => {
    let id = req.params.id 

    const topics = await Topic.destroy({where: {id: id}})
    res.status(200).send(`topics deleted`)
}



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Images')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({
    storage: storage,
    limits: {fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)
      const extname = fileTypes.test(path.extname(file.originalname))
  
  
      if(mimeType && extname) {
        return cb(null, true)
      }
      cb('Give proper files formate to upload')
    }
  }).single('img')
  

module.exports = {
    addTopic, 
    getAllTopic,
    getOneTopic,
    updateTopic,
    deleteTopic,
    upload,
    getTopicCourse
}