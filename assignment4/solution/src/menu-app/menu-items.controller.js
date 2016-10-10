(function() {
'use strict';

angular.module('MenuApp')
    .controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItemsResponse'];
function MenuItemsController(menuItemsResponse) {
    var menuCtrl = this;
    
    menuCtrl.categoryName = menuItemsResponse.data.category.name;
    menuCtrl.menuItems = menuItemsResponse.data.menu_items;
}
}());
