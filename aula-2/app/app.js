'use strict';

// Declare app level module which depends on views, and components
// angular.module('enejApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var enejApp = angular.module('enejApp', [
  'ngRoute',
  'enejApp.input-mask'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lecture', {
    templateUrl: 'lecture/lecture.html',
    controller: 'lectureController'
  });
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// .config(['$routeProvider', function ($routeProvider) {
  // $routeProvider.when('/lecture', {
  //   templateUrl: 'lecture/lecture.html',
  //   controller: 'lectureController'
  // });
// }]);