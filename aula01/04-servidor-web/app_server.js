var http = require('http');

var requisicao = function(request, response) {
    response.writeHead(404, { "Content-type": "text/html" });
    response.write("<h1>Texto a ser exibido no browser.</h1>");
    response.end();
}

var server = http.createServer(requisicao);
var resultado = function() {
    console.log("Servidor em funcionamento");
}
server.listen(3000, resultado);