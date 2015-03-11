angular.module('jmdApp.controllers', [])

.controller('jmdSites', ['$scope', 'jmdSharedResource', 'jmdSharedFactory', '$timeout', function ($scope, jmdSharedResource, jmdSharedFactory, $timeout) {

    jmdSharedFactory.getSites().success(function (data) {

        $scope.sites = data;

        var techs = [];

        // years
        for (var a = 0, lengtha = data.length; a < lengtha; a++) {

            // sites
            for (var b = 0, lengthb = data[a].site.length; b < lengthb; b++) {

                // techs
                for (var c = 0, lengthc = data[a].site[b].techs.length; c < lengthc; c++) {

                    if (techs.indexOf(data[a].site[b].techs[c]) === -1) {
                        techs.push(data[a].site[b].techs[c]);               
                    }

                }

            };
        };

        $scope.techs = techs;

        $timeout(function () {
            $(window).trigger("reload");
        }, 0);

    }).error(function () {
        alert("Error, sorry. Try again later perhaps!");
    });

    $scope.months = jmdSharedFactory.getMonths();

    $scope.$watch('html5', function () {

        $timeout(function () {
            $(window).trigger("reload");
        }, 0);

    });

}]);