angular.module('jmdApp.factories', [])

.factory('jmdSharedFactory', ['$http', function ($http) {

    var getSites = function() {
        return $http({
            method: 'GET',
            url: 'app/json/sites.json'
        });
    }

    var getMonths = function () {
        return [
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
    }

    return ({
        getSites: getSites,
        getMonths: getMonths
    });

}]);