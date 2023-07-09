const express = require('express')
const cors =  require('cors')

const app = express()

 var corOptions = {
    origin: 'http://localhost:3000'
 }

const router = require('./Routes/courseRouter')

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({message: 'hello from api'})
})

app.use('/eLearning', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})