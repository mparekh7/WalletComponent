angular.module('demoApp')
    .filter('temperature', [function () {
        return function (temperature) {
            if (temperature === undefined || temperature === null) {
                return '';
            }
            temperature = temperature.replace(" C", " °C");
            temperature = temperature.replace(" F", " °F");
            return temperature;
        };
    }]);