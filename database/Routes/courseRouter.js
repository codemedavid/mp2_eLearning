const courseController = require('../controllers/courseController')
const topicController = require('../controllers/topicController')

const router = require('express').Router()

router.post('/addCourse', courseController.addCourse)

router.put('/updateCourse/:id', courseController.updateCourse)

router.delete('/deleteCourse/:id', courseController.deleteCourse)

router.get('/allCourses', courseController.getAllCourse)

router.get('/course/:id', courseController.getOneCourse)

router.get('/publishedCourse', courseController.getPublishedCourse)


router.post('/addTopic/:id', topicController.addTopic)

router.put('/updateTopic/:id', topicController.updateTopic)

router.delete('/deleteTopic/:id', topicController.deleteTopic)

router.get('/allTopics', topicController.getAllTopic)

router.get('/topic/:id', topicController.getOneTopic)

router.get('/courseTopics/:id', courseController.getCourseTopics)
module.exports = router