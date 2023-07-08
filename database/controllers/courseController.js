const db = require('../models')


const Course = db.courses
const Topic = db.topics


const addCourse = async (req, res) => {
    let info = {
        title: req.body.title ? req.body.title : 'No title',
        description: req.body.description ? req.body.description : 'No Descriptions',
        published: req.body.published ? req.body.published : false
    }


    const course = await Course.create(info)

    res.status(200).send(course)
}


const getAllCourse = async (req, res) => {

    let course = await Course.findAll({})
    res.status(200).send(course)
}


const getOneCourse = async (req, res) => {
    
    let id = req.params.id

    let course = await Course.findOne({where: {id: id}})
    res.status(200).send(course)
}

const updateCourse = async (req, res) => {
    let id = req.params.id 

    const course = await Course.update(req.body, {where: {id: id}})
    res.status(200).send(course)
}

const deleteCourse = async (req, res) => {
    let id = req.params.id 

    const course = await Course.destroy({where: {id: id}})
    res.status(200).send(`course deleted`)
}

const getPublishedCourse = async (req, res) => {
    const published = await Course.findAll({where: {published: true}})
    res.status(200).send(published)
}


 
const getCourseTopics = async (req, res) => {
    try {
      const data = await Course.findAll({
        include: [{
          model: Topic,
          as: 'topics'
        }],
        where: { id: 2 }
      });
  
      // Return the response with the fetched data
      res.json(data);
    } catch (error) {
      // Handle the error and return an error response
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {
    addCourse, 
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse,
    getPublishedCourse,
    getCourseTopics
}