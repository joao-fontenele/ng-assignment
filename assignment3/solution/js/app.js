(function(){
'use strict';

angular.module('NarrowItDownApp', []);

angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    // .constant('baseApiUrl', 'https://davids-restaurant.herokuapp.com/');
    .constant('baseApiUrl', 'http://localhost:8888/');

function FoundItemsDirective() {
    var ddo = {
        templateUrl: './templates/found-items.html',
        scope: {
            items: '<',
            onRemove: '&',
        },
        controller: FoundItemsController,
        controllerAs: 'ctrlr',
        bindToController: true,
    };

    return ddo;
}

function FoundItemsController() {
    var ctrlr = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    console.log('starting NarrowItDownController');
    var nitCtrlr = this;

    nitCtrlr.searchString = '';
    nitCtrlr.message = '';
    nitCtrlr.foundItems = [];

    nitCtrlr.narrowItDown = narrowItDown;
    nitCtrlr.removeItem = removeItem;

    function narrowItDown() {
        var str = nitCtrlr.searchString.trim();
        if (str) {
            var promise = MenuSearchService.getMatchedMenuItems(str);

            promise.then(function (result) {
                nitCtrlr.foundItems = result;
                console.log('found items: ', nitCtrlr.foundItems);

                nitCtrlr.message = (nitCtrlr.foundItems.length) ?
                    '' : 'Whoops, no matches found for you budy ;)';
            })
            .catch(function (err) {
                nitCtrlr.message = 'Whoops, failed to retrieve found items :(';
                console.log('Whoops, failed to retrieve found items', err);
            });
        } else {
            console.log('search string is empty!');
            nitCtrlr.message = 'Whoops, type a query first';
        }
    }

    function removeItem(index) {
        if (index === undefined || nitCtrlr.foundItems[index] === undefined) {
            throw new Error('Invalid index (' + index +
                '), for foundItems: ', nitCtrlr.foundItems);
        }
        var item = nitCtrlr.foundItems.splice(index, 1);
        console.log('removing item, with index(' + index + '): ', item);
        return item;
    }
}

MenuSearchService.$inject = ['$http', '$q','baseApiUrl'];
function MenuSearchService($http, $q, baseApiUrl) {
    var service = this;

    service.getMatchedMenuItems = getMatchedMenuItems;

    var menuItems; // menuItems cache

    function getMenuItems() {
        if (!menuItems) {
            console.log('getting menuItems from server');
            var response = $http({
                method: 'GET',
                url: (baseApiUrl + 'menu_items.json'),
                params: {},
            });
            return response;
        } else {
            console.log('getting menuItems from cache');
            var deferred = $q.defer();
            deferred.resolve({
                data: {
                    menu_items: menuItems,
                },
            });

            return deferred.promise;
        }
    }

    function checkForMatch(menuItems, str) {
        var found = []; // array of matches to be returned

        // this is not exactly I/O bound, so does it even help to be async?
        for (var i = 0; i < menuItems.length; i++) {
            var item = menuItems[i];
            if (item.description.indexOf(str) != -1) {
                found.push(item);
            }
        }
        return found;
    }

    function getMatchedMenuItems(str) {
        var deferred = $q.defer();

        var promise = getMenuItems();
        promise.then(function(response) {
            menuItems = response.data.menu_items;
            var foundItems = checkForMatch(menuItems, str);
            deferred.resolve(foundItems);
        })
        .catch(function(err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
}

})();
