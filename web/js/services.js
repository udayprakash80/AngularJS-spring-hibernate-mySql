angular.module('printAdmin.services', [])
.service('LoginService', function($http) {
    this.isLoggedIn = false;
    this.LoginCheck = function(loginId,loginPass) {
       var $httpdataObj = $.param({
           loginId: loginId,
           loginPass: loginPass
       });
       var $httpconfigObj = {
           headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
       };
       return $http.post('/sprinGular/userCheck', $httpdataObj, $httpconfigObj)
       .error(function (data, status, header, config) {
           console.log('Error ->  ',data, status, header, config);
           return data;
       });
     }
});