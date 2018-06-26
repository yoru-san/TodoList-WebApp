describe('app controller', function () {

    beforeEach(module("webapp"));

    var $controller, appCtrl;
    var $scope = {};

    beforeEach(inject(function (_$controller_, $rootScope) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = $rootScope.$new();

        appCtrl = $controller('appCtrl', { $scope: $scope });
    }));

    it('should initialize the app controller', function () {
        expect(appCtrl).toBeTruthy();
    });

    it('should have Auth service be defined', function () {
        expect($scope).toBeDefined();
    });

});
