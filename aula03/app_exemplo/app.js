var express = require('express');
var load = require('express-load');
var app = express();

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/dbusuarios');

mongoose.connection.on('connected', function () {
    console.log('=== Conexão estabelecida com sucesso ===');
});
mongoose.connection.on('error', function (error) {
    console.log('=== Ocorreu um erro: ' + error);
});
mongoose.connection.on('disconnected', function () {
    console.log('=== Conexão finalizada! ===');
});

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

const port = 3000;

app.get('/exemplo', function (request, response) {
    console.log('monitorando a aplicação');
    response.render("exemplos/app");
});

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`);
});