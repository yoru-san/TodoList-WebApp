'use strict';

app.directive('browserDetector', ["appBrowser", function (appBrowser) {
    return {
        restrict: "A",
        link: function (scope, elm) {
            // elm.addClass(appBrowser.getPlatform());
            // elm.addClass(appBrowser.getName());
            // elm.addClass('v-' + appBrowser.getVersion());

            elm.attr('browser', appBrowser.getName());
            elm.attr('browser-version', 'v-' + appBrowser.getVersion());
            elm.attr('platform', appBrowser.getPlatform());
        }
    };
}]);
