var express = require('express');
var load = require('express-load');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
var mongoose_connection = mongoose.connect('mongodb://localhost:27017/dbusuarios');
global.db = mongoose;

mongoose.connection.on('connected', function () {
    console.log('=== Conexão estabelecida com sucesso ===');
});
mongoose.connection.on('error', function (error) {
    console.log('=== Ocorreu um erro: ' + error);
});
mongoose.connection.on('disconnected', function () {
    console.log('=== Conexão finalizada! ===');
});

//app.set('views', __dirname + '/views');
//app.set("view engine", "ejs");
//app.use(express.static(__dirname + '/public'));

load('models')
    //    .then('controllers')
    .then('routes')
    .then('models')
    .into(app);

const port = 3000;

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`);
});