module.exports = function (app) {
    var Schema = require('mongoose').Schema;

    var usuario = Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true }
    });

    //return db.model('usuarios', usuario);
    var mongoose = require('mongoose');
    return mongoose.model('usuarios', usuario);
}