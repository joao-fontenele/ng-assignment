'use strict';

(function() {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.foodList = '';
      $scope.result = '';

      function splitFoodList(sep) {
        sep = sep || ','; // default separator is ','

        var menu = $scope.foodList.split(sep);
        menu = menu.filter(function(e) {
            return (e.trim()? true : false);
        });

        return menu;
      }

      $scope.checkIfTooMuch = function() {
        var menu = splitFoodList();

        if (menu.length == 0) {
          $scope.result = 'Please enter data first';
        } else if (menu.length <= 3) {
          $scope.result = 'Enjoy!';
        } else {
          $scope.result = 'Too Much!';
        }
      }
  }
})();
