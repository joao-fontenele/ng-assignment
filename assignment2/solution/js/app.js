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

function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
        {
            name: 'potato chips',
            quantity: 'a dozen bags',
        },
        {
            name: 'cheese',
            quantity: '100',
        },
        {
            name: 'ham',
            quantity: '100',
        },
        {
            name: 'bread',
            quantity: '100',
        },
        {
            name: 'cola',
            quantity: '10',
        },
    ];
    var bought = [];

    service.buy = function(index) {
        if (index === undefined || toBuy[index] === undefined) {
            throw new Error('Invalid index to buy(' + index + ')');
        } else {
            var item = toBuy.splice(index, 1);
            bought.push(item);
        }
    };

    service.addToBuy = function(item) {
        if (!item.name || !item.quantity) {
            throw new Error('Invalid item, need name and quantity properties.',
                  item);
        } else {
            toBuy.push(item);
        }
    }

    service.getToBuyList() = function() {
        return toBuy;
    };

    service.getBoughtList() = function() {
        return bought;
    };
}

})();
