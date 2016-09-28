(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.foodList = '';
    $scope.result = '';
    $scope.resultStatus = ''; // class of the result box

    $scope.checkIfTooMuch = checkIfTooMuch;

    function checkIfTooMuch() {
        var menu = splitFoodList();
        console.log('found ' + menu.length + ' itens on the input box');

        if (menu.length === 0) {
            $scope.result = 'Please enter data first';
            $scope.resultStatus = 'error';
        } else {
            $scope.resultStatus = 'ok';

            if (menu.length <= 3) {
                $scope.result = 'Enjoy!';
            } else {
                $scope.result = 'Too Much!';
            }
        }
    }

    function splitFoodList(sep) {
        sep = sep || ','; // default separator is ','

        var menu = $scope.foodList.split(sep);
        menu = menu.filter(function(e) {
            return (e.trim() ? true : false);
        });

        return menu;
    }
}

})();
