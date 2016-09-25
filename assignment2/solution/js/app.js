(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('checkOffService', ShoppingListCheckOffService);

// TODO
ToBuyShoppingController.$inject = ['$scope', 'checkOffService'];
function ToBuyShoppingController($scope, checkOffService) {
    var toBuyCtrlr = this;

}

// TODO
AlreadyBoughtShoppingController.$inject = ['$scope', 'checkOffService'];
function AlreadyBoughtShoppingController($scope, checkOffService) {
    var boughtCtrlr = this

}

})();
