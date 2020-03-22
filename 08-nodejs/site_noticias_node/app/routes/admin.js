module.exports = function(app){
    app.get('/admin', function(req, resp){
        resp.render("admin/form_add_noticia"); 
    });    
};
