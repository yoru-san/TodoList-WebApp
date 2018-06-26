'use strict';

app.config(['$httpProvider', function ($httpProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    return $httpProvider.interceptors.push('httpRequestInterceptorCacheBuster');
}])

    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        //cfpLoadingBarProvider.includeBar = true;        
        //cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.includeSpinner = false;
    }])

    // perfomance boosters 
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
    }])

    //removing bind directives and scopes and extra classes and markup in the code created by angularjs
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])

    // prevents possibly unbandled rejection
    .config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])

    .provider('httpRequestInterceptorCacheBuster', function () {
        this.matchlist = [/.*partials.*/, /.*views.*/];
        this.logRequests = false;

        //Default to whitelist (i.e. block all except matches)
        this.black = false;

        //Select blacklist or whitelist, default to whitelist
        this.setMatchlist = function (list, black) {
            this.black = typeof black !== 'undefined' ? black : false;
            this.matchlist = list;
        };

        this.setLogRequests = function (logRequests) {
            this.logRequests = logRequests;
        };

        this.$get = ['$q', '$log', function ($q, $log) {
            var matchlist = this.matchlist;
            var logRequests = this.logRequests;
            var black = this.black;
            if (logRequests) {
                $log.log("Blacklist? ", black);
            }
            return {
                'request': function (config) {
                    //Blacklist by default, match with whitelist
                    var busted = !black;
                    for (var i = 0; i < matchlist.length; i++) {
                        if (config.url.match(matchlist[i])) {
                            busted = black;
                            break;
                        }
                    }
                    if (busted) {
                        var d = new Date();
                        config.url = config.url.replace(/[?|&]__=\d+/, '');
                        config.url += config.url.indexOf('?') === -1 ? '?' : '&';
                        config.url += '__=' + d.getTime();
                    }

                    if (logRequests) {
                        var log = 'request.url =' + config.url;
                        busted ? $log.warn(log) : $log.info(log);
                    }
                    return config || $q.when(config);
                }
            };
        }];
    })

    .config(['httpRequestInterceptorCacheBusterProvider', function (httpRequestInterceptorCacheBusterProvider) {
        httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*themes.*/, /.*api.*/], true);
    }]);
