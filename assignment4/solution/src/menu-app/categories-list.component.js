(function() {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
    templateUrl: 'src/menu-app/templates/categories-list.template.html',
    bindings: {
        categories: '<',
    },
});

}());
