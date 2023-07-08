const db = require('../models')



const Topic = db.topics


const addTopic = async (req, res) => {
    let info = {
        title: req.body.title ? req.body.title : 'No title',
        description: req.body.description ? req.body.description : 'No Descriptions',
    }


    const topics = await Topic.create(info)

    res.status(200).send(topics)
}


const getAllTopic = async (req, res) => {

    let topics = await Topic.findAll({})
    res.status(200).send(topics)
}


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


module.exports = {
    addTopic, 
    getAllTopic,
    getOneTopic,
    updateTopic,
    deleteTopic
}