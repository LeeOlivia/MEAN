/**
 * Created by LJ196 on 2016/8/16.
 */
angular.module('users').factory('Authentication',[
    function () {
        this.user=window.user;
        return {
            user:this.user
        };
    }
]);