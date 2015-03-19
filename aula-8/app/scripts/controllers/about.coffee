'use strict'

###*
 # @ngdoc function
 # @name aula8App.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the aula8App
###
angular.module 'aula8App'
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
