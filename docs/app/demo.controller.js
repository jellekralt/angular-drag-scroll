(function () {
    'use strict';

    angular
    .module('DemoApp')
    .controller('DemoController', DemoController);

    DemoController.$inject = ['$scope', '$routeParams'];

    /* @ngInject */
    function DemoController($scope, $routeParams) {
        var vm = this;

        vm.showSidebar = false;
        vm.orientation = $routeParams.orientation || 'x';

    }

})();
