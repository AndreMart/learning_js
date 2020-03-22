let dbConnection = require('../../configs/dbConnection')
module.exports = function(app) {
    app.get('/noticias', function(req, resp){ 
        connection = dbConnection();
        connection.query('select * from noticias', function(error, response){
            resp.render("noticias/noticias",{
                noticias:response
            }); 
        });
    });
};
