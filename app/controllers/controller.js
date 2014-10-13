angular.module('jmdApp.controllers', [])

.controller('jmdSites', ['$scope', 'jmdSharedResource', 'jmdSharedFactory', '$timeout', function ($scope, jmdSharedResource, jmdSharedFactory, $timeout) {

    jmdSharedFactory.getSites().success(function (data) {

        $scope.sites = data;

        $timeout(function () {
            $(window).trigger("reload");
        }, 0);

    }).error(function () {
        alert("Error, sorry. Try again later perhaps!");
    });

    $scope.months = jmdSharedFactory.getMonths();

}]);