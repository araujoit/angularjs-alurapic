angular.module('minhasDiretivas', [])
        .directive('meuPainel', function() {
            var ddo = {};

            // É utilizada para dizer onde a diretiva é válida: Elemento, Atributo ou Comentário
            ddo.restrict = "AE";

            // É utilizada quando precisamos que a diretiva mantenha elementos filhos do nosso componente.
            ddo.transclude = true;

            // Utilizada para capturar informações da diretiva. Diretivas reutilizáveis devem ter o escopo isolado.
            ddo.scope = {
                titulo: '@'
            };

            // ddo.template = ''; // utilizada para toda a marcação HTML da diretiva, contendo a marcação em si.
            // utilizada para toda a marcação HTML da diretiva, indicando apenas o caminho do arquivo.
            ddo.templateUrl = 'js/directives/meu-painel.html';

            return ddo;
        })
        .directive('minhaFoto', function() {
            var ddo = {};

            ddo.restrict = "AE";

            ddo.transclude = false;

            ddo.scope = {
                url: '@',
                titulo: '@'
            };

            // Utilizada a diretiva ng-src no lugar de src, para evitar a geração de mensagens estranhas no console do navegador (devido a politica agressiva do browser no carregamento de imagens).
            ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

            return ddo;
        })
        .directive('meuBotaoPerigo', function() {
            var ddo = {};
            ddo.restrict = "E";
            ddo.scope = {
                nome: '@',
                acao: '&'
            };
            ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
            return ddo;
        });