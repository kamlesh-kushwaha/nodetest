(function(ng) {
    
    'use strict';

    ng.module('ngSailsApp')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/Users', '/Users/list');

            $stateProvider
                .state('Users', {
                    abstract: true,
                    url: '/Users',
                    controller: 'UserCtrl',
                    template: '<div ui-view></div>',
                    resolve: {
                        UserDefinition : function getUserDefinition (SailsResourceDefinitions) {
                            return SailsResourceDefinitions.get('Users');
                        },
                        Users: function UsersListResolve(Restangular) {
                            return Restangular.all('Users').getList();
                        }
                    },
                })
                .state('Users.list', {
                    url: '/list',
                    templateUrl: 'app/User/User-list.html'
                })
                .state('Users.add', {
                    url: '/add',
                    templateUrl: 'app/User/User-add-edit.html'
                })
                .state('Users.info', {
                    url: '/info/:id',
                    controller: 'SingleUserCtrl',
                    templateUrl: 'app/User/User-info.html'
                })
                .state('Users.edit', {
                    url: '/edit/:id',
                    controller: 'SingleUserCtrl',
                    templateUrl: 'app/User/User-add-edit.html'
                });
        });
})(
    window.angular
);
