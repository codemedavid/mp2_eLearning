module.exports = (sequelize, DataTypes) => {
 const Enroll = sequelize.define('users_courses', {
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
 })

 return Enroll
}

