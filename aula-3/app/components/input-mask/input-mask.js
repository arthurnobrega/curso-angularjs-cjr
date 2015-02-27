'use strict';

angular.module('enejApp.input-mask', [])

.directive('mask', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.mask(attrs.mask);
    }

  }
});
;