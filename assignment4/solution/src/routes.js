(function() {
'use strict';

angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menu-app/templates/home.template.html',
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menu-app/templates/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categoriesResponse: ['CategoriesService', function(CategoriesService) {
                    console.log('on routes.js resolving CategoriesService.getAllcategories');
                    return CategoriesService.getAllCategories();
                }]
            },
        })

        .state('menu', {
            url: '/menu-items/{categoryShortName}',
            templateUrl: 'src/menu-app/templates/menu-items.template.html',
            controller: 'MenuItemsController as menuCtrl',
            resolve: {
                menuItemsResponse: ['MenuItemsService', '$stateParams', function(MenuItemsService, $stateParams) {
                    console.log('on routes.js resolving MenuItemsService.getMenuItemsByCategoryShortName');
                    return MenuItemsService.getMenuItemsByCategoryShortName($stateParams.categoryShortName);
                }]
            },
        })

        .state('menu.details', {
            url: '/',
            params: {
                menuIndex: null,
            },
            templateUrl: 'src/menu-app/templates/menu-item-details.template.html',
            controller: 'MenuItemDetailsController as detailsCtrl',
        })
    ;
}

}());
