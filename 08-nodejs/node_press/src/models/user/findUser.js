const User = require("./User")

exports.findById = (id, cb) => {
    User.findByPk(id)
        .then(user => {
            console.log('está recuperando ########################################### ID')
            cb(null, user.id)
        })
        .catch(() => {
            console.log('NAO está recuperando ########################################### ID')
            new Error(`User ${id} does not exist`)
        })
}

exports.findByUsername = (username, cb) => {
    User.findOne({
        where: {
            email: username.email
        }
    }).then(user => {
        console.log('está recuperando ########################################### USERNAME')
        return cb(null, user)
    }).catch(() => {
        console.log('NAO está recuperando ########################################### USERNAME')
        return cb(null, null)
    })
}