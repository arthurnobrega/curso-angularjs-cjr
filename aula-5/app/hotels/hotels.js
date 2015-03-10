angular.module('enejApp')

.config(function($routeProvider) {
    $routeProvider
    .when('/hotels/add', {
        templateUrl: 'hotels/form.html',
        controller: 'hotelFormController',
        controllerAs: 'ctrl'
    });
})

.controller('hotelFormController', function($http, $location, $routeParams, Hotel, Room) {
    var self = this;

    self.hotel = {
        nome: '',
        email: '',
        rooms: []
    };

    Hotel.save({name: 'testando'});
    Hotel.get(function(response) {
        console.log(response);
    });

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
        // if ($routeParams.id) {
        //     $http.put('https://angularjscjr.firebaseio.com/workshops/'+$routeParams.id+'.json', self.workshop).success(function() {
        //         $location.path('/workshops');
        //     });
        // } else {
        //     $http.post('https://angularjscjr.firebaseio.com/workshops.json', self.workshop).success(function() {
        //         $location.path('/workshops');
        //     });
        // }
    };
})

.factory('Hotel', function($resource) {
    return $resource(
        'https://angularjscjr.firebaseio.com/hotels/:idHotel.json', 
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