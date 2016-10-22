(function() {
'use strict';

angular.module('common')
    .service('InfoService', InfoService);

function InfoService() {
    var service = this;

    service.info = {};

    service.publish = publish;
    service.get = get;

    function publish(info) {
        service.info = info;
    }

    function get() {
        return service.info;
    }
}

}());
