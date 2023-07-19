module.exports = {
    HOST: 'localhost',
    USER: 'admin',
    PASSWORD: 'admin',
    DB: 'eLearning_db',
    dialect: 'mysql',
    secretKey: 'your-secret-key',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}