describe('ng-detector directive', function () {

    beforeEach(angular.mock.module("webapp"));

    var $compile, $rootScope, tpl, $scope, templateAsHtml;

    beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;

        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();

        tpl = $compile("<div ng-detector></div>")($scope);

        $scope.$digest();

        templateAsHtml = tpl[0].outerHTML;

    }));

    it('should check for presence of ng-version attribute', function () {

        expect(templateAsHtml).toContain(angular.version.full);

    });

    it('should check the angular version number', angular.mock.inject(function () {

        expect(tpl.attr('ng-version')).toEqual(angular.version.full);

    }));

});
