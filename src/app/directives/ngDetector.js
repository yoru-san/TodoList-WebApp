'use strict';

app.directive('ngDetector', function () {
    return {
        restrict: "A",
        link: function (scope, elm, attr) {
            elm.attr('ng-version', angular.version.full);
        }
    };
});
