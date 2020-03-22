var http = require('http');

var server = http.createServer(function(req, res){
    var categoria = req.url;
    if(categoria == "/moda") {
        res.end("<html><body>Moda</body></html>")
    } else if(categoria == "/ti") {
        res.end("<html><body>TI</body></html>")
    } else {
        res.end("<html><body>Portal de notícias</body></html>")
    }
});
server.listen(3000)