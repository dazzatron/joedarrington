angular.module('AngularPrimes', [
    'ngAnimate'
])

.controller('AngularPrimesCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    var isPrime = function (n) {

        var b = Math.sqrt(n);
        var i = 2;

        while (i <= b) {

            if (n % i === 0) {
                return false;
            }

            i++;

        }

        return true;

    }
    
    $scope.model = {};
    $scope.model.primeCount = 10; // default
    $scope.model.maxPrimes = 30; // max amount we allow - work out what this should be screen wise?
    $scope.model.maxCalc = 1000000; // max we will calculate - we could work this out with a quick perf analysis

    $scope.$watch('model.primeCount', function (newValue, oldValue) {

        if (newValue) {

            $scope.model.loading = true;
            var primes = $scope.model.primes = [];
            var i = 0
            var n = 1;

            // allow UI refresh
            $timeout(function () {

                while (i < $scope.model.primeCount) {

                    n++;

                    if (isPrime(n)) {
                        primes.push(n);
                        i++;
                    }

                }

                $scope.model.loading = false;
                $scope.model.primes = primes;

            }, 0);

        }

    }, true);

}]);