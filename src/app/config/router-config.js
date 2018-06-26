app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'ROUTE', 'GLOBAL',
    function ($stateProvider, $locationProvider, $urlRouterProvider, ROUTE, GLOBAL) {

        $urlRouterProvider.otherwise('/404error');
        $urlRouterProvider.when('', '/');

        $stateProvider
            .state(ROUTE.appGroup, {
                abstract: true,
                views: {
                    'content': {
                        templateUrl: GLOBAL.viewPath + '/view.html',
                        controller: 'appCtrl'
                    }
                }
            })

            .state(ROUTE.home, {
                url: '/',
                data: {
                    pageTitle: 'Home'
                },
                views: {
                    'view': {
                        templateUrl: GLOBAL.viewPath + '/general/home.html'
                    }
                }
            })

            .state(ROUTE.page_not_found, {
                url: '/404error',
                data: {
                    pageTitle: 'Page Not Found'
                },
                views: {
                    'view': {
                        templateUrl: GLOBAL.viewPath + '/general/page-not-found.html'
                    }
                }
            });

    }
]);
