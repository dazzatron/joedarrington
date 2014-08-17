angular.module('jmdApp.controllers')

.controller('jmdMenu', ['$scope', '$location', function ($scope, $location) {

    $scope.menuoptions = [
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

    var url = $location.absUrl();
    var urlLastIndex = url.lastIndexOf("/");
    url = url.substr(urlLastIndex, url.length - urlLastIndex);

    for (var i = 0, length = $scope.menuoptions.length; i < length; i++) {

        if ($scope.menuoptions[i].url == url) {
            $scope.menuoptions[i].active = true;
        } else {
            $scope.menuoptions[i].active = false;
        };

    };

}]);