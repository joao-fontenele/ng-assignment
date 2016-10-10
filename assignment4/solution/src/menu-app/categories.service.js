(function() {
'use strict';

angular.module('MenuApp')
    .service('CategoriesService', CategoriesService);

CategoriesService.$inject = ['$http', 'baseApiUrl'];
function CategoriesService($http, baseApiUrl) {
    var service = this;

    service.getAllCategories = getAllCategories;
    function getAllCategories() {
        var response = $http({
            method: 'GET',
            url: (baseApiUrl + 'categories.json'),
            params: {},
        });

        return response;
    }
}

}());
