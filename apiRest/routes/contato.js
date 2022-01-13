module.exports = function (app) {
    var Contato = app.models.contato;
    
    app.get('/contatos', function (request, response) {
        response.json('todos contatos ok');
    });

    app.post('/contatos', function (request, response) {
        response.json('POST');
    });

    app.put('/contatos', function (request, response) {
        response.json('PUT');
    });

    app.delete('/contatos', function (request, response) {
        response.json('DELETE');
    });
};
