(function() {
'use strict';

angular.module('MenuApp')
    .controller('MenuItemDetailsController', MenuItemDetailsController);

MenuItemDetailsController.$inject = ['menuItemsResponse', '$stateParams'];
function MenuItemDetailsController(menuItemsResponse, $stateParams) {
    var detailsCtrl = this;

    detailsCtrl.menuItem = menuItemsResponse.data.menu_items[$stateParams.menuIndex];
    console.log('clicked item: ', detailsCtrl.menuItem);
}

}());
