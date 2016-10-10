(function() {
'use strict';

angular.module('MenuApp')
    .component('menuItemsList', {
        templateUrl: 'src/menu-app/templates/menu-items-list.template.html',
        bindings: {
            menuItems: '<',
        }
    });

}());
