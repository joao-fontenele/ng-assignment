(function() {
'use strict';

angular.module('public')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['InfoService', '$http', 'ApiPath'];
function SignUpController(InfoService, $http, ApiPath) {
    var vm = this;

    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
    vm.shortName = '';
    vm.validShortName = false;
    vm.saved = false;

    vm.publish = publish;
    vm.isValidShortName = isValidShortName;

    function publish() {
        var info = {};
        info.firstName = vm.firstName;
        info.lastName = vm.lastName;
        info.email = vm.email;
        info.phone = vm.phone;
        info.shortName = vm.shortName;

        InfoService.publish(info);
        console.log(InfoService.get());
        vm.saved = true;
    }

    function isValidShortName() {
        $http.get(ApiPath + 'menu_items/' + vm.shortName + '.json')
            .then(function(response) {
                console.log('response: ', response);
                vm.validShortName = true;
            })
            .catch(function(err) {
                console.log('failed to get shortName', vm.shortName, err);
                vm.validShortName = false;
                vm.saved = false;
            });

    }
}

}());
