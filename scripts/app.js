app = angular.module('googleFunStuffApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "partials/login.html",
        controller: 'LoginCtrl'
      })
      .state('home', {
        url: "/home",
        templateUrl: "partials/home.html",
        controller: 'HomeCtrl'
      });
      $urlRouterProvider.otherwise("login");
});
