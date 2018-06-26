var $app = $app || {
    apiEndPoint: 'frontEndApi/',
    debugMode: true,
    logLevel: ['info', 'debug', 'log', 'error', 'warn'],
    waitSeconds: 120,
    env: 'dev',
    baseUrl: '/',
    theme: 'new',
    pageTitleSuffix: ' | Single Page Application using AngularJS',
    urlArgs: "_dp=" + (new Date()).getTime(),
    apiToken: 'api-client',
    version: '1.0.0',
    adminRole: 'administrator',
    cookieOptions: {
        path: '/',
        domain: '.angwebapp.com'
    }
};

$app.loadCss = function (url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
};

$app.log = function () {
    if ($app.debugMode && !($app.logLevel.indexOf('log') < 0)) {
        console.log.apply(console, arguments);
    }
};

$app.debug = function () {
    if ($app.debugMode && !($app.logLevel.indexOf('debug') < 0)) {
        console.debug.apply(console, arguments);
    }
};

$app.error = function () {
    if ($app.debugMode && !($app.logLevel.indexOf('error') < 0)) {
        console.error.apply(console, arguments);
    }
};

$app.info = function () {
    if ($app.debugMode && !($app.logLevel.indexOf('info') < 0)) {
        console.info.apply(console, arguments);
    }
};

$app.warn = function () {
    if ($app.debugMode && !($app.logLevel.indexOf('warn') < 0)) {
        console.warn.apply(console, arguments);
    }
};

$app.getPathFromUrl = function (url) {
    return url.split("?")[0];
};

window.$app = $app;
