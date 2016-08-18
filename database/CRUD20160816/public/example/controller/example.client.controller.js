/**
 * Created by LJ196 on 2016/8/16.
 */
angular.module('example').controller('ExampleController',['$scope','Authentication',
function ($scope,Authentication) {
    $scope.authentication=Authentication;
}]);