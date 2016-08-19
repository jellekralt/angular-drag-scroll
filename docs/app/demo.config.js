(function () {
    'use strict';

    angular.module('DemoApp')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/:orientation?', {
                    templateUrl: 'app/demo.html',
                    controller: 'DemoController',
                    controllerAs: 'vm'
                });
        });

})();
