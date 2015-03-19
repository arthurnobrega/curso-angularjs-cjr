'use strict'

###*
 # @ngdoc overview
 # @name aula8App
 # @description
 # # aula8App
 #
 # Main module of the application.
###
angular
  .module 'aula8App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/workshop',
        templateUrl: 'views/workshop.html'
        controller: 'WorkshopCtrl'
      .when '/hotel',
        templateUrl: 'views/hotel.html'
        controller: 'HotelCtrl'
      .otherwise
        redirectTo: '/'

