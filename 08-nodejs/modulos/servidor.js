// importando modulo interno do nodejs
const http = require('http')
http.createServer((req, res)=>{
    res.write("Olá boa tarde")
    res.end()

}).listen(8080)