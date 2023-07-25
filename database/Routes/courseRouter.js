const courseController = require('../controllers/courseController');
const topicController = require('../controllers/topicController');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const enrollController = require('../controllers/enrollController')
const router = require('express').Router();
const multerMiddleware = require('../middleware/multer')
// Course routes
router.post('/addCourse', authMiddleware, isAdmin, courseController.upload, courseController.addCourse);
router.put('/updateCourse/:id', authMiddleware, isAdmin, courseController.updateCourse);
router.delete('/deleteCourse/:id', authMiddleware, isAdmin, courseController.deleteCourse);
router.get('/allCourses',  authMiddleware,courseController.getAllCourse);
router.get('/course/:id',  courseController.getOneCourse);
router.get('/publishedCourse',  courseController.getPublishedCourse);
router.get('/courseTopics/:id',  courseController.getCourseTopics);

// Topic routes
router.post('/addTopic/:id', authMiddleware, isAdmin, multerMiddleware, topicController.addTopic);
router.put('/updateTopic/:id', authMiddleware, isAdmin, topicController.updateTopic);
router.delete('/deleteTopic/:id', authMiddleware, isAdmin, topicController.deleteTopic);
router.get('/allTopics',  topicController.getAllTopic);
router.get('/topic/:id',  topicController.getOneTopic);
router.get('/topics/:course_id/',  topicController.getTopicCourse);

// Authentication routes
router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);


//enrollment
router.post('/enroll', enrollController.enrollment)
router.get('/enroll/:userId/:courseId', enrollController.getEachEnrolled);
router.get('/get/enroll/course/:userId', enrollController.getEnrolledUser);
// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
  const userType = req.user.userType;
  console.log(req.user)

  if (userType === 'instructor') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
}

module.exports = router;
