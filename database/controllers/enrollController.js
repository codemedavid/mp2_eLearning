const db = require('../models')
const Enroll = db.enroll


const enrollment = async (req, res) => {
    const {user_id, course_id} = req.body
    const isEnrolled = await Enroll.findOne({ where: { user_id, course_id } });
    if(isEnrolled){
        return res.status(400).json({ error: 'Already enrolled to this course' });
    }
    const enrollData = {
        user_id: req.body.user_id ? req.body.user_id  : "error",
        course_id: req.body.course_id ? req.body.course_id : 1
    }
   
        const enrolled = await Enroll.create(enrollData)
        res.status(200).send(enrolled)
        console.log(enrolled);
 
}

const getEachEnrolled = async (req, res) => {
    try {
      const { userId, courseId } = req.params; // Get userId and courseId from the URL parameters
  
      if (!userId || !courseId) {
        return res.status(400).json({ error: 'userId and courseId are required in the URL parameters' });
      }
  
      const isEnrolled = await Enroll.findOne({ where: { user_id: userId, course_id: courseId } });
  
      if (isEnrolled) {
        res.status(200).send(isEnrolled);
      } else {
        res.status(404).json({ error: 'Not enrolled in the course' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const getEnrolledUser = async (req, res) => {
    try {
      const { userId } = req.params; // Get userId from the URL parameters
  
      if (!userId) {
        return res.status(400).json({ error: 'userId is required in the URL parameters' });
      }
  
      const isEnrolled = await Enroll.findAll({ where: { user_id: userId } });
  
      if (isEnrolled && isEnrolled.length > 0) {
        res.status(200).send(isEnrolled);
      } else {
        res.status(404).json({ error: 'Not enrolled in any course' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = {
    enrollment,
    getEachEnrolled,
    getEnrolledUser
}