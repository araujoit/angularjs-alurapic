/**
 * Módulo principal
 */
angular
    .module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        // Habilitando a History API do HTML5, ao invés da rota padrão do AngularJS (/#/fotos)
        // Quando o navegador não suportar este modo, automaticamente o Angular adotará a estratégia com # (hash)
        $locationProvider.html5Mode(true);

        // Rotas:
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // Rota alternativa, caso o endereço acessado pelo usuário não exista:
        $routeProvider.otherwise({redirectTo: '/fotos'});
    });