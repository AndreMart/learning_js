module.exports = function(app) {
    app.get('/noticia', function(req, resp){ 
        resp.render("noticias/noticia"); 
    });
};

