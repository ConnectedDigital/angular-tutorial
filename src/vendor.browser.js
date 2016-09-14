// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
"use strict";
// TODO(gdi2290): switch to DLLs
require('jquery');
require('../node_modules/moment/moment');
require('../node_modules/fullcalendar');
require('../node_modules/jquery-ui-bundle/jquery-ui');
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');
require('@angularclass/hmr');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');
if ('production' === ENV) {
}
else {
}
//# sourceMappingURL=vendor.browser.js.map