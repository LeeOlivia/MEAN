/**
 * Created by LJ196 on 2016/8/17.
 */
angular.module('articles').factory('Articles',['$resource',function ($resource) {
    return $resource('api/articles/:articleId',{
        articleId:'@_id'
    },{update:{
        method:'PUT'
    }});
}]);