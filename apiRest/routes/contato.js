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

    app.delete('/contatos/:id', function (request, response) {
        var id = request.params.id;
        console.log('DELETE - id: ', id);
        // Contato.deleteOne({ _id: id }, function (error, contato) {
        //     if (error) {
        //         console.log('DELETE - error: ', error);
        //         response.json(error);
        //     } else {
        //         console.log('DELETE success id: ', id);
        //         response.send(`removido id ${id}`);
        //     }
        // });

        Contato.findById(id, function (erro, contato) {
            if (erro) {
                console.info("Erro: " + erro);
                response.send(erro);
            } else {
                if (contato) {
                    contato.deleteOne();
                    response.send('removido');
                } else {
                    console.log('contato não definido');
                    response.send('contato não definido');
                }
            }
        });
    });
};
