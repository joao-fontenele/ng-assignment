(function() {
'use strict';

angular.module('public')
    .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService'];
function MyInfoController(InfoService) {
    var vm = this;

    vm.getInfo = getInfo;

    vm.getInfo();

    function getInfo() {
        var info = InfoService.get();

        if (info === null) {
            return;
        }
        vm.signed = true;

        vm.firstName = info.firstName;
        vm.lastName = info.lastName;
        vm.email = info.email;
        vm.phone = info.phone;
        vm.shortName = info.shortName;
        vm.menuItem = info.menuItem;
    }
}

}());
