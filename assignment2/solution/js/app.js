(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('checkOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['checkOffService'];
function ToBuyShoppingController(checkOffService) {
    var toBuyCtrlr = this;

    toBuyCtrlr.buy = checkOffService.buy;

    toBuyCtrlr.toBuyList = checkOffService.getToBuyList();
    console.log('initial toBuyList:', toBuyCtrlr.toBuyList);
}

AlreadyBoughtShoppingController.$inject = ['checkOffService'];
function AlreadyBoughtShoppingController(checkOffService) {
    var boughtCtrlr = this;

    boughtCtrlr.boughtList = checkOffService.getBoughtList();
    console.log('initial boughtList:', boughtCtrlr.boughtList);
}

function ShoppingListCheckOffService() {
    var service = this;

    service.addToBuy = addToBuy;
    service.buy = buy;
    service.getBoughtList = function() {
        return bought;
    };
    service.getToBuyList = function() {
        return toBuy;
    };

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

    function addToBuy(item) {
        if (!item.name || !item.quantity) {
            throw new Error('Invalid item, need "name" and "quantity"' +
                ' properties.', item);
        } else {
            toBuy.push(item);
        }
    }

    function buy(index) {
        if (index === undefined || toBuy[index] === undefined) {
            throw new Error('Invalid index to buy(' + index + ')');
        } else {
            var item = toBuy.splice(index, 1)[0];
            bought.push(item);

            console.log('on checkOffService, \n\titem with index(' + index +
                  ') bought:', item);
            console.log('\tupdated toBuyList:', toBuy);
            console.log('\tupdated boughtList:', bought);
        }
    }
}

})();
