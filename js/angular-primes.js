angular.module('AngularPrimes', [
    'ngAnimate'
])

.controller('AngularPrimesCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    // function to work out primes
    $scope.isPrime = function (n) {

        var b = Math.sqrt(n);
        var i = 2;

        while (i <= b) {

            if (n % i === 0) {
                return false;
            }

            i++;

        }

        return true;

    };

    // function to calc primes
    $scope.calcPrimes = function () {

        // set vars
        var primes = [];
        var i = 0
        var n = 1;

        // would be nice if we could cache already looked up numbers
        // loop and calc primes
        while (i < $scope.model.primeCount) {

            n++;

            if ($scope.isPrime(n)) {
                primes.push(n);
                i++;
            }

        }

        // set
        $scope.model.primes = primes;

        // reset screen
        $scope.model.loading = false;

    }
    
    // init
    $scope.model = {};
    $scope.model.primeCount = 10; // default, the amount of primes shown per axis
    $scope.model.maxPrimes = 30; // max amount we allow in table axis - work out what this should be screen wise?
    $scope.model.maxCalc = 1000000; // max we will calculate full stop - we could work this out with a perf analysis

    // changes to prime count
    ($scope.primeChange = function () {

        // if valid
        if ($scope.model.primeCount) {

            $scope.model.primes = [];
            $scope.model.loading = true;

            // allow UI refresh
            $timeout(function () {
                $scope.calcPrimes();
            }, 0);

        }

    })(); // self invoke

}]);