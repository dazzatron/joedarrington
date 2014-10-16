(function () {

    'use strict';

    describe('controller: angular primes', function () {

        var AngularPrimesCtrl, myScope;

        beforeEach(module('AngularPrimes'));

        beforeEach(inject(function ($controller, $rootScope, $timeout) {

            myScope = $rootScope.$new();

            AngularPrimesCtrl = $controller("AngularPrimesCtrl", {
                $scope: myScope
            });

        }));

        it('should have a model', inject(function () {
            expect(myScope.model).toBeDefined();
        }));

        it('should have a prime count default', inject(function () {
            expect(myScope.model.primeCount).toBeDefined();
        }));
         
        it('should have a max prime to define when the table is not shown', inject(function () {
            expect(myScope.model.maxPrimes).toBeDefined();
        }));

        it('should have a max calc that we wont calculate past', inject(function () {
            expect(myScope.model.maxCalc).toBeDefined();
        }));

        it('should return true for a prime', inject(function () {
            expect(myScope.isPrime(3)).toBeTruthy();
        }));

        it('should return false for a non prime', inject(function () {
            expect(myScope.isPrime(4)).toBeFalsy();
        }));

        it('should change the prime table when the prime count changes', inject(function () {
            
            // check before
            myScope.model.primeCount = 20;
            myScope.calcPrimes();
            myScope.$apply();
            expect(myScope.model.primes.length).toBe(20);
            expect(myScope.model.primes[myScope.model.primes.length-1]).toBe(71);

            // check after
            myScope.model.primeCount = 21;
            myScope.calcPrimes();
            myScope.$apply();
            expect(myScope.model.primes.length).toBe(21);
            expect(myScope.model.primes[myScope.model.primes.length - 1]).toBe(73);

        }));

        it('should set loading to true on prime change', inject(function () {
            myScope.primeChange();
            myScope.$apply();
            expect(myScope.model.loading).toBeTruthy();
        }));

        it('should set loading to false after prime count change', inject(function () {
            myScope.calcPrimes();
            myScope.$apply();
            expect(myScope.model.loading).toBeFalsy();
        }));

    });

}());