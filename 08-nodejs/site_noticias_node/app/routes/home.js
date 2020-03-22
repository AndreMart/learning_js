module.exports = function(app) {
    app.get('/home', function(req, resp){
        resp.render("home/index"); 
    });
};