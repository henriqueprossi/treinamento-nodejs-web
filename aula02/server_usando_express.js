var express = require('express');
var app = express();

app.get('/exemplo.html', function(request, response) {
    response.send('<h1>Página de exemplo</h1>');
});

app.listen(3000, function() {
    console.log('Servidor iniciado com sucesso!');
});