angular.module('enejApp')

.config(function($routeProvider) {
    $routeProvider
    .when('/hotels/add', {
        templateUrl: 'hotels/form.html',
        controller: 'hotelFormController',
        controllerAs: 'ctrl'
    })
    .when('/hotels/join/:idHotel', {
        templateUrl: 'hotels/join.html',
        controller: 'hotelJoinController',
        controllerAs: 'ctrl'
    });
})

.controller('hotelFormController', function($http, $location, $routeParams, Hotel, Room) {
    var self = this;

    self.hotel = {
        name: '',
        email: '',
        rooms: []
    };

    self.hotel.rooms = Room.getRooms();

    self.addNewRoom = function () {
        Room.addNewRoom();
    }

    self.deleteLastRoom = function () {
        Room.deleteLastRoom();
    }
    // Envia o formulário
    self.sendForm = function () {
        console.log(self.hotel);
        Hotel.save(self.hotel);
    };
})

.controller('hotelJoinController', function (Hotel, $routeParams) {
    var self = this;
    self.hotel = Hotel.get({idHotel: $routeParams.idHotel});
})

.factory('Hotel', function($resource) {
    return $resource(
        'https://glowing-torch-368.firebaseio.com/hotels/:idHotel.json', 
        {idHotel: '@id'},
        {
            'update': {method: 'PUT'}
        }
    );
})

.factory('Room', function() {
    var rooms = [
        {
            numVagas: 13,
            name: 'Quarto 01'
        },
        {
            numVagas: 10,
            name: 'Quarto 02'  
        }
    ];

    return {
        getRooms: function () {
            return rooms;
        },
        addNewRoom: function() {
            var newRoom = {
                numVagas: '',
                name: '',
                guests: []  
            };
            rooms.push(newRoom);
        },
        deleteLastRoom: function() {
            rooms.pop();
        }
    };
})

.directive('hotelInfo', function () {
    return {
        restrict: 'E',
        templateUrl: "hotels/_hotel_info.html",
        scope: {
            'hotel': '='
        }
    }
})

.directive('roomInfo', function (User) {
    return {
        restrict: 'E',
        templateUrl: "hotels/_room_info.html",
        scope: {
            'rooms': '='
        },
        link: function (scope, element, attributes) {
            scope.user = User.getCurrentUser();
            scope.linkUserToRoom = function (room) {
                var user = User.getCurrentUser();
                room.numVagas -= 1;
                room.hasUser = true;
                scope.user.hasRoom = true;
            };
        }
    }
})

;