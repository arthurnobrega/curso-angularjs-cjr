'use strict';

angular.module('enejApp', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/registration'});
});