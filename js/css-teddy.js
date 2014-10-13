
angular.module('BearApp', [])

.controller('BearCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.bears = ['teddy', 'panda'];//, 'hybrid'];
    $scope.bear = $scope.bears[0];
    $scope.animate = false;

    $scope.$watch('bear', function () {

        $scope.animate = false;

        $timeout(function () {
            $scope.animate = true;
        }, 50);

        //if ($scope.bear === 'hybrid') {
        //    alert("hybrid");
        //}

    });

}]);

