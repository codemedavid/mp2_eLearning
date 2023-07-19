const courseController = require('../controllers/courseController');
const topicController = require('../controllers/topicController');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const router = require('express').Router();

// Course routes
router.post('/addCourse', authMiddleware, isAdmin, courseController.upload, courseController.addCourse);
router.put('/updateCourse/:id', authMiddleware, isAdmin, courseController.updateCourse);
router.delete('/deleteCourse/:id', authMiddleware, isAdmin, courseController.deleteCourse);
router.get('/allCourses',  authMiddleware,courseController.getAllCourse);
router.get('/course/:id', authMiddleware, courseController.getOneCourse);
router.get('/publishedCourse', authMiddleware, courseController.getPublishedCourse);
router.get('/courseTopics/:id', authMiddleware, courseController.getCourseTopics);

// Topic routes
router.post('/addTopic/:id', authMiddleware, isAdmin, topicController.addTopic);
router.put('/updateTopic/:id', authMiddleware, isAdmin, topicController.updateTopic);
router.delete('/deleteTopic/:id', authMiddleware, isAdmin, topicController.deleteTopic);
router.get('/allTopics', authMiddleware, topicController.getAllTopic);
router.get('/topic/:id', authMiddleware, topicController.getOneTopic);

// Authentication routes
router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

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
