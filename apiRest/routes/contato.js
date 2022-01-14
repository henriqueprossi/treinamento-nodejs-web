module.exports = function (app) {
    var Contato = app.models.contato;

    app.get('/contatos', function (request, response) {
        //response.json('GET todos contatos');
        Contato.find(function (error, contatos) {
            if (error) {
                response.json(error);
            } else {
                response.json(contatos);
            }
        });
    });

    app.get('/contatos/:id', function (request, response) {
        //response.json('GET um contato');
        var id = request.params.id;
        Contato.findById(id, function (error, contatos) {
            if (error) {
                response.json(error);
            } else {
                response.json(contatos);
            }
        });
    });

    app.post('/contatos', function (request, response) {
        //response.json('POST');
        var cpf = request.body.cpf;
        var nome = request.body.nome;
        var telefone = request.body.telefone;
        
        var usuario = {
            cpf,
            nome,
            telefone
        };

        console.log('POST - usuario: ', usuario);
        
        Contato.create(usuario, function (error, contato) {
            if (error) {
                response.json(error);
            } else {
                response.json(contato);
            }
        });
    });

    app.put('/contatos/:id', function (request, response) {
        var id = request.params.id;
        Contato.findById(id, function (error, contato) {
            if (error) {
                response.json(error);
            } else {
                console.log('PUT - contato: ', contato);
                var contato_upd = contato;
                contato_upd.cpf = request.body.cpf;
                contato_upd.nome = request.body.nome;
                contato_upd.telefone = request.body.telefone;
                console.log('PUT - contato_upd: ', contato_upd);
                contato_upd.save(function (error, contato) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(contato);
                    }
                });
            }
        });
    });

    app.delete('/contatos', function (request, response) {
        response.json('DELETE');
    });
};
