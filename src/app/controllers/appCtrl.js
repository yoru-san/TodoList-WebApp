'use strict';

app.controller('appCtrl', [
    '$scope',
    '$window',
    function ($scope, $window) {

        $scope.$on('cfpLoadingBar:loading', function () {
            angular.element($window.document.body).addClass('mou-events');
        });

        $scope.$on('cfpLoadingBar:completed', function () {
            angular.element($window.document.body).removeClass('mou-events');
            angular.element($window.document.body).addClass('loaded');
        });

    }
]);
