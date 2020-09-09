const Sequelize = require("sequelize")
const connection = require("../../database/connection")

const user = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

//User.sync({force:true}).then(()=>{})
module.exports = user