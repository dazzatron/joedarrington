/// <reference path="vendor/jquery-1.9.1.min.js" />

angular.module('imgPuzzleApp', [])

  .controller('Controller', ['$scope', function ($scope) {

  }])

  .directive('imgPuzzle', function ($timeout) {
      return {
          template: '<div class="options">Moves: {{ moves.length }}</div>' +
                '<div ng-click="flip(image)" ng-repeat="image in images" ng-class="{ flipped: image.flipped, completed: completed }" ' +
                'class="image-wrapper" style="width:{{image.width}}px;height:{{image.height}}px;left:{{image.left}}px;top:{{image.top}}px">' +
                '<img style="left:-{{image.left}}px;top:-{{image.top}}px" ng-alt="{{image.alt || image.src }}" ng-src="{{image.src}}">' +
              '</div>',
          link: function (scope, element) {


              var hoz = 2;
              var ver = 2;
              var total;
              var width;
              var height;
              var imageWidth;
              var imageHeight;
              var img;

              scope.flip = function (image) {

                  var completed = true;
                  scope.moves.push(image);

                  image.flipped = !image.flipped;
                
                  for (var c = 0; c < total; c++) {

                      var currentimage = scope.images[c];

                      if (currentimage.row == image.row && currentimage.col == (image.col + 1) | currentimage.col == (image.col - 1) || currentimage.col == image.col && currentimage.row == (image.row + 1) | currentimage.row == (image.row - 1)) {
                          currentimage.flipped = !currentimage.flipped;
                      }

                      // check if it's completed

                      if (currentimage.flipped) {
                          completed = false;
                      }

                  }

                  if (completed) {

                      scope.completed = true;

                      $timeout(function () {
                          scope.init();
                      }, 2000);

                  }

              };

              scope.init = function () {

                  scope.completed = false;

                  hoz = hoz+=1;
                  ver = ver+=1;
                  total = hoz * ver;
                  width = 500;
                  height = 300;
                  imageWidth = width / hoz;
                  imageHeight = height / ver;
                  img = '/img/mount-fuji.jpg';
                  scope.images = [];
                  scope.moves = [];

                  for (var a = 0; a < hoz; a++) {

                      for (var b = 0; b < ver; b++) {

                          scope.images.push({
                              width: imageWidth,
                              height: imageHeight,
                              left: b * imageWidth,
                              top: a * imageHeight,
                              src: img,
                              row: a,
                              col: b
                          });

                      }

                  }

              };

              scope.init();

          }

      };

  });