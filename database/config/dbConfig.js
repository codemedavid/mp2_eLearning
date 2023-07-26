module.exports = {
    HOST: '54.179.147.48',
    USER: 'admin',
    PASSWORD: '123Admin!@#',
    DB: 'wd65p-mp02-grp07',
    dialect: 'mysql',
    secretKey: 'your-secret-key',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}