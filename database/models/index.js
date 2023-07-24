const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log(`Error: ${err}`)
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.courses = require('./coursesModel')(sequelize, DataTypes)
db.topics = require('./topicsModel')(sequelize, DataTypes)
db.user = require('./userModel')(sequelize, DataTypes)
db.enroll = require('./enrollModel')(sequelize, DataTypes)
db.sequelize.sync({force: false})
.then(() => {
    console.log('syncing done')
})


db.courses.hasMany(db.topics, {
    foreignKey: 'course_id',
    as: 'topics'
  });
  
  db.topics.belongsTo(db.courses, {
    foreignKey: 'course_id',
    as: 'course'
  });
  

module.exports = db