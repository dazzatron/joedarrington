angular.module('jmdApp.directives', [])

.directive('jmdSite', ['jmdSharedResource', function (jmdSharedResource) {

    return {
        link: function (scope, element) {

            scope.top = $(element).offset().top;
            scope.bottom = $(element).offset().top + $(element).outerHeight(true);

            $(window).on("load scroll", function () {

                var scrollTop = $(window).scrollTop();
                var scrollBottom = scrollTop + jmdSharedResource.windowHeight;

                if (scope.top < scrollBottom && scope.bottom > scrollBottom) {

                    scope.$apply(function () {
                        jmdSharedResource.month = scope.site.month;
                        jmdSharedResource.bgcolour = scope.site.bgcolour;
                    });

                };

            });

        }

    }

}]);