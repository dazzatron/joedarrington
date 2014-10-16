angular.module('AngularPrimes', [
    'ngAnimate'
])

.controller('AngularPrimesCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    // function to work out primes
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
    
    // init
    $scope.model = {};
    $scope.model.primeCount = 10; // default
    $scope.model.maxPrimes = 30; // max amount we allow in table - work out what this should be screen wise?
    $scope.model.maxCalc = 1000000; // max we will calculate full stop - we could work this out with a perf analysis

    // watch for changes to prime count
    $scope.$watch('model.primeCount', function (newValue, oldValue) {

        // if valid
        if (newValue) {

            // set vars
            $scope.model.loading = true;
            var primes = $scope.model.primes = [];
            var i = 0
            var n = 1;

            // allow UI refresh
            $timeout(function () {

                // would be nice if we could cache already looked up numbers
                // loop and calc primes
                while (i < $scope.model.primeCount) {

                    n++;

                    if (isPrime(n)) {
                        primes.push(n);
                        i++;
                    }

                }

                // reset screen
                $scope.model.loading = false;
                $scope.model.primes = primes;

            }, 0);

        }

    }, true);

}]);