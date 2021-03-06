'use strict';

/**
 * @ngdoc overview
 * @name inclusionApp
 * @description
 * # inclusionApp
 *
 * Main module of the application.
 */
angular
  .module('inclusionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-toArrayFilter',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider, $locationProvider) {

    // $analyticsProvider.setUsername('UA-68605107-1');

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        reloadOnSearch: false,
      })
      .when('/node/:nodeId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        reloadOnSearch: false,
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/feedback', {
        templateUrl: 'views/contact.html',
      })
      // .when('/initiatives', {
      //   templateUrl: 'views/initiatives.html',
      //   controller: 'InitiativesCtrl',
      //   controllerAs: 'initiatives'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
