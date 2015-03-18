angular.module('enejApp')

.config(function ($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'registration/registration.html',
    controller: 'registrationCtrl',
    controllerAs: 'ctrl'
  }).when('/registrated', {
    templateUrl: 'registration/confirmation.html',
    controller: 'registrationCtrl'
  })
})

.controller('registrationCtrl', function ($http, $location) {
  this.user = {
    nome: 'a',
    cpf: '333.333.333-93',
    email: 'asdsad@asd.sd'
  };

  this.sendForm = function() {
    $http.post('https://angularjscjr.firebaseio.com/users.json', this.user);
    this.user = {};
    $location.path('/registrated');
  };

});