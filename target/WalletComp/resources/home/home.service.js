(function () {
    'use strict';

    angular
        .module('demoApp')
        .factory('homeService', homeService);

    homeService.$inject = [];

    function homeService() {
        var service = {
            create: create
        };

        return service;

        function create() {
        }

    }

})();