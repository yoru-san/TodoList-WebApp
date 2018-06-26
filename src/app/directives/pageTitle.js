'use strict';

app.directive('pageTitle', [
    '$rootScope',
    '$timeout',
    '$transitions',
    function ($rootScope, $timeout, $transitions) {
        return {
            link: function (scope, element) {

                $transitions.onStart({}, function (trans) {

                    var title;
                    title = (trans.to().data && trans.to().data.pageTitle) ? trans.to().data.pageTitle : 'Default Title';
                    title = title + $app.pageTitleSuffix;

                    $timeout(function () {
                        element.text(title);
                    }, 0, false);

                });
            }
        };
    }
]);
