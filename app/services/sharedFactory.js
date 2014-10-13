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

    var getMenuOptions = function () {
        return [
            {
                "url": "/index.html",
                "title": "Joe Darrington"
            },
            {
                "url": "/experiments.html",
                "title": "Experiments"
            },
            {
                "url": "/contact.html",
                "title": "Contact"
            }
        ]
    }

    return ({
        getSites: getSites,
        getMonths: getMonths,
        getMenuOptions: getMenuOptions
    });

}]);