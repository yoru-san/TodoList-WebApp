describe('directive: browser-detector', function () {

    beforeEach(angular.mock.module("webapp"));

    var $compile, $rootScope, tpl, $scope, templateAsHtml;

    var browser_detector;

    beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;

        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();

        tpl = $compile("<div browser-detector></div>")($scope);

        $scope.$digest();

        templateAsHtml = tpl[0].outerHTML;

    }));

    describe('browser-detector attributes check', function () {

        it('should have browser defined', function () {

            expect(tpl.attr('browser')).toBeDefined();

        });

        it('should have browser-version defined', function () {

            expect(tpl.attr('platform')).toBeDefined();

        });

        it('should have platform defined', function () {

            expect(tpl.attr('browser-version')).toBeDefined();

        });

    });

    describe('browser-detector output check', function () {

        it('should have browser to be identified', function () {

            expect(tpl.attr('browser')).toMatch('\(opera)|\(chrome)|\(edge)|\(opr)|\(safari)|\(opera)|\(mozilla)');

        });

        it('should have platform to be identified', function () {

            expect(tpl.attr('platform')).toMatch('\(ipad)|\(iphone)|\(android)|\(windows phone)|\(win)|\(mac)|\(linux)|\(cros)');

        });

        it('should have browser-version to be identified', function () {

            expect(tpl.attr('browser-version')).toMatch('\(v-)\[0-9]');

        });

    });

});
