'use strict'

###*
 # @ngdoc function
 # @name aula8App.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the aula8App
###
angular.module 'aula8App'
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
