module.exports = function (app) {
    var Schema = require('mongoose').Schema;
    var contato = Schema({
        cpf: String,
        nome: String,
        telefone: String
    });
    return db.model('contatos', contato);
    //var mongoose = require('mongoose');
    //return mongoose.model('contatos', contato);
};