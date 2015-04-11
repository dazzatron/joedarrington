angular.module('jmdSpiralApp', [
   'jmd.controllers',
   'LocalStorageModule'
]);

angular.module('jmd.controllers', []).
    controller('jmdSpiralCtrl', ['$scope', 'localStorageService',
        function ($scope, localStorageService) {

            var mouseX = $(window).width() / 2;
            var mouseY = $(window).height() / 2;
            var $html = $('html');
            var $sp;
            var $pw = $('.page-wrapper');

            // for form generation
            $scope.params = {
                count: { label: 'count', value: 100, max: 400, min: 10, type: 'number' },
                rotation: { label: 'rotation', value: 500, max: 1000, min: 1, type: 'number' },
                translation: { label: 'translation', value: 2, max: 20, min: 1, type: 'number' },
                scale: { label: 'scale', value: 50, max: 50, min: 10, type: 'number' },
                delay: { label: 'delay', value: 10, max: 50, min: 1, type: 'number' }
            };

            // check LS
            var LS = localStorageService.get('spiral1');

            // if in LS
            if (LS) {

                //var oldParams = angular.copy($scope.params); //cache
                $scope.params = LS; // IMPROVE VALIDATION!!!!

                // if form now invalid, revert
                //if (!spiralForm.$valid) {
                //    $scope.params = oldParams;
                //}
                
            }            

            // from: http://static.guim.co.uk/sys-images/Arts/Arts_/Pictures/2012/1/13/1326458117290/Addictive---detail-of-Dam-007.jpg
            var colours = ['#fad8b2', '#67494b',
                '#9d3b2e', '#005c9a', '#f2ab7d',
                '#ffb151', '#8b852f', '#9dab16',
                '#bca300', '#c2cab2', '#f38f77'];

            $scope.$watch('params',

                function (newValue, oldValue) {

                    if (newValue) {

                        var a = -1;

                        $scope.spirals = [];

                        while (a++ < $scope.params.count.value) {
                            $scope.spirals.push({
                                rotation: $scope.params.rotation.value * a,
                                translation: a * $scope.params.translation.value,
                                scale: (a / $scope.params.scale.value),
                                background: colours[Math.ceil(Math.random() * colours.length)]
                            });
                        };

                        // local storage
                        localStorageService.set('spiral1', newValue);

                        // create jquery ref
                        setTimeout(function () {
                            $sp = $('.spiral-wrapper');
                        }, 0);

                    }

                }, true);

            // animate function
            function animate(int, delay, top, left) {

                // leave this native, ang isnt quick enough
                setTimeout(function () {

                    $sp.eq(int).css({
                        top: top,
                        left: left
                    });

                    // can we do with css transition delay?
                }, delay);

            }

            // function to randomize params
            $scope.randomize = function () {

                perf = 0;

                for (var i in $scope.params) {

                    $scope.params[i].value = Math.ceil(Math.random() * $scope.params[i].max);

                    if ($scope.params[i].value < $scope.params[i].min) {
                        $scope.params[i].value = $scope.params[i].min;
                    }

                }

            }


            var ticking = false;

            // to get fps
            var lastCalledTime, delta;
            var stepCheck = 30; // amount of frames before update screen fps
            var steps = 0;
            var perfCheck = 5; // amount of frame sets before perf issue
            var perf = 0;
            $scope.perfSlowFrame = 40;

            // step
            function step() {

                // inc steps
                steps++;

                // get info anyway
                delta = (new Date().getTime() - lastCalledTime) / 1000;
                lastCalledTime = Date.now();

                // update screen
                if (steps >= stepCheck) {

                    steps = 0;
                    $scope.fps = Math.ceil(1 / delta);
                    $scope.$apply();

                    // check perf and change if an issue
                    if ($scope.fps < $scope.perfSlowFrame) {

                        perf++;

                        if (perf > perfCheck) {
                            $scope.randomize();
                        }

                    }

                }


                var b = -1;

                while (b++ < $scope.params.count.value) {
                    animate(b, (b * $scope.params.delay.value), mouseY, mouseX);
                }

                ticking = false;
                requestTick();

            };

            // tick check
            function requestTick() {

                if (!ticking) {
                    requestAnimationFrame(step);
                }

                ticking = true;

            }

            requestTick();

            var overToolBox = false;
            var $tb = $('.tool-box');
            var $tbh = $('.tool-box-hide');

            $tb.mouseenter(function () {
                overToolBox = true;
            });

            $tb.mouseleave(function () {
                overToolBox = false;
            });

            $tbh.click(function (e) {
                e.preventDefault();
                $tb.toggleClass('hidden');
            });

            $html.on('mousemove', function (e) {

                e.preventDefault();

                if (!overToolBox) {
                    mouseX = e.pageX;
                    mouseY = e.pageY;
                } else {
                    mouseX = $(window).width() / 2;
                    mouseY = $(window).height() / 2;
                }

            });

            // touch support
            $html.on('touchmove', function (e) {
                e.preventDefault();
                mouseX = e.originalEvent.targetTouches[0].pageX;
                mouseY = e.originalEvent.targetTouches[0].pageY;
            });

            $html.mousedown(function () {
                $pw.addClass('mousedown');
            });

            $html.mouseup(function () {
                $pw.removeClass('mousedown');
            });

        }]);
