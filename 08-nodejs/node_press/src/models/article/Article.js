const Sequelize = require("sequelize")
const connection = require("../../database/connection")
const Category = require("../category/Category")

const Article = connection.define('article', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)
Article.belongsTo(Category)

Article.sync({force:false}).then(()=>{})
module.exports = Article