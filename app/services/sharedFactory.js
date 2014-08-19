angular.module('jmdApp.factories', [])

.factory('jmdSharedFactory', ['$http', function ($http) {

    function getSites () {
        return $http({
            method: 'GET',
            url: 'app/json/sites.json'
        });
    }

    return ({
        getSites: getSites
    });

}]);