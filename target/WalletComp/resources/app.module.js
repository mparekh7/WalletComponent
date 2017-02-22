(function () {
    'use strict';

    angular
        .module('demoApp', ['ui.router',                              'ui.bootstrap'
                             ])
        .config(stateConfig);


    function stateConfig($urlRouterProvider,$stateProvider) {

        $urlRouterProvider.otherwise('/home');
        
         $stateProvider
            .state('/home', {
                url: '/home',
                templateUrl: 'home/home.html',

            });

    }
})();