/**
 * Created by LJ196 on 2016/8/16.
 */
var mainApplicationModuleName='CRUD';
var mainApplicationModule=angular.module(mainApplicationModuleName,['ngResource','ngRoute','users','example','articles']);
mainApplicationModule.config(['$locationProvider',function ($locationProvider) {
   $locationProvider.hashPrefix('!'); 
}]);
if(window.location.hash==='#_=_') window.location.hash='#!';
angular.element(document).ready(function () {
    angular.bootstrap(document,[mainApplicationModuleName]);
});