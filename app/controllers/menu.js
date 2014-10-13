angular.module('jmdApp.controllers')

.controller('jmdMenu', ['$scope', '$location', 'jmdSharedFactory', function ($scope, $location, jmdSharedFactory) {

    $scope.menuoptions = jmdSharedFactory.getMenuOptions();

    var url = $location.absUrl();
    url = url.substr(urlLastIndex, url.length - url.lastIndexOf("/"));
    var found = false;
    var i = $scope.menuoptions.length;

    while (i--) {

        if ($scope.menuoptions[i].url == url) {
            $scope.menuoptions[i].active = true;
            found = true;
        } else {
            $scope.menuoptions[i].active = false;
        };

    };

    if (!found) {
        $scope.menuoptions[0].active = true;
    }

}]);