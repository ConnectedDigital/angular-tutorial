"use strict";
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var App = (function () {
    function App(appState) {
        this.appState = appState;
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map