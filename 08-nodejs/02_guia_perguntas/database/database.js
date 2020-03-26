const Sequelize = require("sequelize")

const connection = new Sequelize('node_questions', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection