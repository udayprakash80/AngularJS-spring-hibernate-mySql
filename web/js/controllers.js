angular.module('printAdmin.controllers', [])
.controller("AngularAppController", function($scope, $http, $rootScope) {
})
.controller("TermsController", function($scope, $http, $rootScope) {
})
.controller("FergotController", function($scope, $http, $rootScope) {
})
.controller('LandingController', function($scope,$http,$location, LoginService) {
    if(!LoginService.isLoggedIn) $location.path( 'login' );
})
.controller('RegisterController', function($scope, LoginService) {
   $scope.$on('$viewContentLoaded', function(){
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
  });
  $scope.loginId = "";
  $scope.loginMail = "";
  $scope.loginPass = "";
  $scope.loginRePass = "";
})

.controller('LoginController', function($scope, $location, $timeout, LoginService) {
    $scope.$on('$viewContentLoaded', function(){
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
  });
    
    $scope.ifDanger = true;
    $scope.submitLogin = function(){
        
        if($scope.loginId == '' ||  $scope.loginPass == '' || typeof $scope.loginId == 'undefined' ||  typeof $scope.loginPass == 'undefined' ){
            $scope.errorMsg = "Username & Password required";
            $scope.ifDanger = false;
            $timeout(function() {
                $scope.ifDanger = true;
              }, 2000);
            return false;
        }
        
        
        LoginService.LoginCheck($scope.loginId,$scope.loginPass).success(function (data, status, headers, config) {
           if(data.result=='success'){
               LoginService.isLoggedIn = true;
               $location.path( 'landing' );
           }else{
               $scope.errorMsg = "Invalid Username & Password";
               $scope.ifDanger = false;
               $scope.loginId = '';
               $scope.loginPass = '';
               $timeout(function() {
                $scope.ifDanger = true;
              }, 2000);
           }
       })
    };
});


