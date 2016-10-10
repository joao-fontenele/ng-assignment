(function() {
'use strict';

angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesResponse'];
function CategoriesController(categoriesResponse) {
    var categoriesCtrl = this;

     categoriesCtrl.categories = categoriesResponse.data;
     console.log('categories: ', categoriesCtrl.categories);
}
}());
