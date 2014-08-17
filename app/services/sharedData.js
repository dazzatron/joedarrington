angular.module('jmdApp.services', [])

.service('jmdSharedResource', function () {

    var data = {};

    $(window).on("load resize", function () {
        data.windowHeight = $(window).height();
    });

    return data;

});