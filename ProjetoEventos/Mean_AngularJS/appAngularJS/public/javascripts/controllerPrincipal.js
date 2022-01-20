angular
    .module("appAngular", [])
    .controller('Principal', ['$http', function ($http) {

        var self = this;
        self.items = [];
        self.novoEvento = {};

        self.listarTodos = function () {
            return $http.get('http://localhost:3200/eventos/')
                .then(function (response) {
                    self.items = response.data;
                }, function (error) {
                    alert('Erro reportado: ' + error);
                });
        };

        self.adicionar = function () {
            $http({
                url: 'http://localhost:3200/eventos/',
                method: 'POST',
                data: self.novoEvento,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                self.novoEvento = {};
            }, function (error) {
                alert('Erro reportado: ' + error);
            }).then(() => self.listarTodos());
        };

        self.listarTodos();
    }]);