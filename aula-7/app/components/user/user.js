angular.module('enejApp')

.factory('User', function () {
  return {
    getCurrentUser: function () {
      return {
        userName: 'Uriel Bonitão',
        email: 'meuemail@email.com'
      }
    }
  }
});