angular.module('printAdmin.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'public_html/login.html',
            controller: 'LoginController'
        })
        .state('landing', {
            url: '/landing',
            templateUrl: 'public_html/landing.html',
            controller: 'LandingController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'public_html/register.html',
            controller: 'RegisterController'
        })
        .state('terms', {
            url: '/terms',
            templateUrl: 'public_html/terms.html',
            controller: 'TermsController'
        })
        .state('fergot', {
            url: '/fergot',
            templateUrl: 'public_html/fergot.html',
            controller: 'FergotController'
        })
        

});