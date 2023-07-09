
module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('topics', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Topic
}