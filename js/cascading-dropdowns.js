angular.module('CascadingDropdownsApp', ['LocalStorageModule'])

.controller('CascadingDropdownsCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    // watch and save changes to LS
    $scope.$watch('model', function (newValue, oldValue) {

        if (newValue) {
            localStorageService.set('boom', newValue);
        }

    }, true);

    // check LS
    var LS = localStorageService.get('boom');

    // cleanup 
    localStorageService.clearAll();

    if (LS) {
        $scope.model = LS;
    }
    else {

        // no LS

        $scope.model = {
            continents:
            [

                {
                    id: 0,
                    name: 'europe',
                    countries: [
                        {
                            id: 1, name: 'united kingdom', cities: [
                                'london', 'manchester', 'birmingham'
                            ]
                        },
                        {
                            id: 2, name: 'spain', cities: [
                                'madrid', 'malaga', 'barcelona'
                            ]

                        },
                        {
                            id: 3, name: 'france', cities: [
                                'paris', 'marseille', 'leon'
                            ]

                        }
                    ]

                },
                {
                    id: 4,
                    name: 'asia',
                    countries: [
                        {
                            id: 5, name: 'afghanistan', cities: [
                                'kabul', 'kandahar', 'herat'
                            ]
                        },
                        {
                            id: 6, name: 'bangladesh', cities: [
                                'chittagong', 'rajshahi', 'khulna'
                            ]
                        },
                        {
                            id: 7, name: 'china', cities: [
                                'beijing', 'shanghai', 'hong kong'
                            ]
                        }
                    ]

                }

            ]
        };

        $scope.model.selectedContinent = $scope.model.continents[0];

        angular.forEach($scope.model.continents, function (continent) {

            continent.selectedCountry = continent.countries[0]

            angular.forEach(continent.countries, function (country) {
                country.selectedCity = country.cities[0]
            });

        });

    }

}]);