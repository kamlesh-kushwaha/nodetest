(function(ng) {
    'use strict';

    ng.module('ngSailsApp')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/', '/main')
                .when('', '/main');

            $stateProvider
                .state('main', {
                    url: '/main',
                    controller: function MainCtrl($scope) {
                        $scope.app = {
                            name: 'ngSailsApp',
                            description: 'An Angular-frontend-based Sails application'
                        };
                    },
                    templateUrl: 'app/main/main.html'
                });
        });
})(
    window.angular
);
