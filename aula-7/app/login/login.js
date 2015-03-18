angular.module('enejApp')

.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'ctrl'
    });
})

.controller('loginCtrl', function(AuthService, $rootScope, Session, $location) {
    var self = this;

    $rootScope.currentUser = Session;

    $rootScope.logout = function () {
        Session.destroy();
        $location.path('/login');
    };

    self.login = function(credentials) {
        AuthService.login(credentials).then(function(data) {
            if (data) {
                $location.path('/workshops');
            }
        });
    };

})

.factory('AuthService', function($http, Session) {
    var authService = {};

    authService.login = function(credentials) {
        return $http.get('https://angularjscjr.firebaseio.com/users/'+credentials.username+'.json')
            .then(function (res) {
                if (credentials.password == res.data.password) {
                    Session.create(credentials.username, res.data);
                    return res.data;
                }
            });
    };

    return authService;
})

.service('Session', function() {
    this.create = function (username, data) {
        this.username = username;
        this.name = data.name;
    }

    this.destroy = function () {
        this.username = null;
        this.name = null;
    }
})