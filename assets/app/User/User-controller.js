(function(ng, _) {

    'use strict';

    ng.module('ngSailsApp')
        .controller('UserCtrl', UserCtrl)
        .controller('SingleUserCtrl', SingleUserCtrl);

    function UserCtrl($scope, $state, Users, UserDefinition, SailsResourceService) {
        var resourceService = new SailsResourceService('Users'.toLowerCase());
        
        $scope.Users = Users;
        $scope.model_def = UserDefinition.originalElement;
        $scope.User = {};

        $scope.remove = function remove(User) {
            User = User || $scope.User;
            if (window.confirm('Are you sure you want to delete this User?')) {
                return resourceService.remove(User, $scope.Users);
            }
        };

        $scope.save = function save(User) {
            User = User || $scope.User;
            return resourceService.save(User, $scope.Users)
                .then(function() {
                    $state.go('^.list');
                }, function(err) {
                    console.error('An error occured: ' + err);
                });
        };
    }

    function SingleUserCtrl($scope, $stateParams, Users, UserDefinition) {
        // coerce string -> int
        $stateParams.id = _.parseInt($stateParams.id);
        if (!_.isNaN($stateParams.id)) {
            $scope.User = _.find(Users, {
                id: $stateParams.id
            });
        }
    }

})(
    window.angular,
    window._
);
