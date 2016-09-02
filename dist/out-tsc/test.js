import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
// Prevent Karma from running prematurely.
__karma__.loaded = function () { };
Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
])
    .then(function (_a) {
    var testing = _a[0], testingBrowser = _a[1];
    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
})
    .then(function () { return require.context('./', true, /\.spec\.ts/); })
    .then(function (context) { return context.keys().map(context); })
    .then(__karma__.start, __karma__.error);
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/test.js.map