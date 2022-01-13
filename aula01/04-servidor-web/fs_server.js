var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    try {
        let path = request.url;
        console.log(path);
        fs.readFile(__dirname + path, function (error, html) {
            response.writeHead(200, { "Content-type": "text/html" });
            response.write(html);
            response.end();
        });
    } catch (error) {

    }


    // let html = fs.readFileSync(__dirname + '/index.html');
    // response.writeHead(200, { "Content-type": "text/html" });
    // response.write(html);
    // response.end();
});

server.listen(3000, function () {
    console.log("Servidor em funcionamento");
});