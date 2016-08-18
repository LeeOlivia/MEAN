/**
 * Created by LJ196 on 2016/8/16.
 */
angular.module('example').config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{templateUrl:'/example/views/example.client.view.html'}).
    otherwise({redirectTo:'/'});
}]);