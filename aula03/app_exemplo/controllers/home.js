module.exports = function (app) {
    var Usuario = app.models.usuarios;
    return {
        index: function (request, response) {
            // definindo um novo usuario
            var nome = "usuario novo";
            var email = "email@impacta.com";
            var usuario = { "nome": nome, "email": email };
            // definindo a resposta
            var resultado;

            Usuario.create(usuario, function (error, usuario) {
                if (error) {
                    resultado = "Ocorreu um erro ao incluir usuário";
                } else {
                    resultado = "Usuário incluído com sucesso";
                }
                response.render('home/index', { titulo: 'Exemplo Express', resultado: resultado });
            });
        }
    };
};