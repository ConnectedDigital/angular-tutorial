"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var environment_1 = require('./app/environment');
var hmr_1 = require('@angularclass/hmr');
var app_1 = require('./app');
function main() {
  return platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_1.AppModule)
    .then(environment_1.decorateModuleRef)
    .catch(function (err) {
      return console.error(err);
    });
}
exports.main = main;
hmr_1.bootloader(main);
//# sourceMappingURL=main.browser.js.map
