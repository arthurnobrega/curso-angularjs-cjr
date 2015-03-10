'use strict';

angular.module('enejApp', ['ngRoute', 'ngResource'])

.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/registration'});
});