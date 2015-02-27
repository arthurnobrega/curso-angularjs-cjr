'use strict';

angular.module('enejApp', [
  'ngRoute',
  'enejApp.input-mask'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/registration'});
}]);