(function() {
'use strict';

angular.module('MenuApp')
.service('MenuItemsService', MenuItemsService);

MenuItemsService.$inject = ['$http', 'baseApiUrl'];
function MenuItemsService($http, baseApiUrl) {
    var service = this;
    
    service.getMenuItemsByCategoryShortName = getMenuItemsByCategoryShortName;

    function getMenuItemsByCategoryShortName(shortName) {
        var response = $http({
            method: 'GET',
            url: (baseApiUrl + 'menu_items.json'),
            params: {
                category: shortName,
            }
        });

        return response;
    }
}
}());
