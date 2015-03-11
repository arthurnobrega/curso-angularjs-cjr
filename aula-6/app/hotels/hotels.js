angular.module('enejApp')

.config(function($routeProvider) {
    $routeProvider
    .when('/hotels/add', {
        templateUrl: 'hotels/form.html',
        controller: 'hotelFormController',
        controllerAs: 'ctrl'
    })
    .when('/hotels/join', {
        templateUrl: 'hotels/join.html',
        controller: 'hotelJoinController',
        controllerAs: 'ctrl'
    });
})

.controller('hotelFormController', function($http, $location, $routeParams, Hotel, Room) {
    var self = this;

    self.hotel = {
        id: '',
        nome: '',
        email: '',
        rooms: []
    };

    // Hotel.save({name: 'testando'});
    // Hotel.get(function(response) {
    //     console.log(response);
    // });

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
        self.hotel.id = 1;
        Hotel.save(self.hotel);
    };
})

.controller('hotelJoinController', function (Hotel) {
    var self = this;
    self.hotel = Hotel.get();
    console.log(self.hotel);
})

.factory('Hotel', function($resource) {
    return $resource(
        'https://glowing-torch-368.firebaseio.com/hotels/idHotel.json', 
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
                name: ''
            };
            rooms.push(newRoom);
        },
        deleteLastRoom: function() {
            rooms.pop();
        }
    };
})

;