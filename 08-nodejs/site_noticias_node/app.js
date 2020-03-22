let app = require('./configs/server')

app.get('/', function(req, resp){
    resp.send("<html><body>Portal de notícias</body></html>")
});

let rotaAdmin = require('./app/routes/admin');
rotaAdmin(app);

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaNoticia = require('./app/routes/noticia');
rotaNoticia(app);

let rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

app.listen(3000, function(){
    console.log("servidor ON")
});