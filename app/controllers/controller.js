angular.module('jmdApp.controllers', [])

.controller('jmdSites', ['$scope', 'jmdSharedResource', 'jmdSharedFactory', function ($scope, jmdSharedResource, jmdSharedFactory) {

    jmdSharedFactory.getSites().success(function (data) {

        $scope.sites = data;

        setTimeout(function () {
            $(window).trigger("reload"); // hello mr hack!
        }, 500);

    }).error(function () {
        alert("error, sorry.");
    });

    $scope.months = [
        "dec",
        "nov",
        "oct",
        "sep",
        "aug",
        "jul",
        "jun",
        "may",
        "apr",
        "mar",
        "feb",
        "jan"
    ];

}]);