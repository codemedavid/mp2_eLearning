const db = require('../models')
const Enroll = db.enroll


const enrollment = async (req, res) => {
    const course_id = req.params.id
    const enrollData = {
        user_id: req.body.user_id,
        course_id: course_id
    }
    try{
        const enrolled = await Enroll.create(enrollData)
        res.status(200).send(enrolled)
        console.log(enrolled);
    }
    catch{(error) => {
        console.log(error);
    }}
}

module.exports = {
    enrollment
}