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
        });