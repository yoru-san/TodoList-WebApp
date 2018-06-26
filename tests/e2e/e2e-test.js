describe('single page application using angularjs and requirejs', function () {

    it('should get the h1 value', function () {

        browser.get('/');

        var getParagraphText = function () {
            return element(by.css('.landing-page .m-ctnt p')).getText();
        }

        expect(getParagraphText()).toEqual('A Simple Skeleton for AngularJS application');

    });

});
