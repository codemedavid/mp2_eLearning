module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Course;
  };
  