// angular.module("enejApp.registration", [])

enejApp.controller("registrationController",['$location', function ($location) {
  this.user = {};
  this.users = [];
  this.submitted = false;

  this.registerUser = function () {
    myFirebase.set(this.user);
    this.users.push(this.user);
    this.user = {};
    this.submitted = false;
    $location.path('/lecture');
  };

  this.enviarForm = function() {
    console.log('uepa');
  };

}]);