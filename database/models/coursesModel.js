module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
      img: {
        type: DataTypes.STRING
      },
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
  