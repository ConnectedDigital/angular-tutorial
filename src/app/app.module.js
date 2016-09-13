"use strict";
var hmr_1 = require('@angularclass/hmr');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng'); //accordion and accordion tab
var primeng_6 = require('primeng/primeng');
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var angularfire2_1 = require('angularfire2');
var environment_1 = require('./environment');
var app_resolver_1 = require('./app.resolver');
var primeng_7 = require('primeng/primeng');
var app_service_1 = require('./app.service');
var app_component_1 = require('./app.component');
var home_component_1 = require("./main-module/home/home.component");
var contacts_list_model_1 = require("./main-module/+contacts/models/contacts-list.model");
var modify_contact_model_1 = require("./main-module/+contacts/models/modify-contact.model");
var add_contact_model_1 = require("./main-module/+contacts/models/add-contact.model");
var avatar_component_1 = require("./main-module/common/components/avatars/avatar.component");
var contact_service_1 = require("./main-module/common/services/contact.service");
var calendar_service_1 = require("./main-module/common/services/calendar.service");
var avatar_service_1 = require("./main-module/common/services/avatar.service");
var routes_routes_1 = require("./routes.routes");
var calendar_component_1 = require("./main-module/calendar/calendar.component");
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
exports.firebaseConfig = {
    apiKey: "AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw",
    authDomain: "todo-fab5e.firebaseapp.com",
    databaseURL: "https://todo-fab5e.firebaseio.com",
    storageBucket: "todo-fab5e.appspot.com",
};
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', store);
        this.appState._state = store.state;
        this.appRef.tick();
        delete store.state;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        var state = this.appState._state;
        store.state = state;
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.App],
            declarations: [app_component_1.App, contacts_list_model_1.ContactListComponent, modify_contact_model_1.ModifyContactComponent, home_component_1.Home, avatar_component_1.AvatarComponent, add_contact_model_1.AddContactComponent, calendar_component_1.CalendarComponent],
            imports: [angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
                primeng_7.InputTextModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_routes_1.ROUTER_CONFIG),
                common_1.CommonModule,
                http_1.HttpModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                primeng_1.ScheduleModule,
                primeng_2.DialogModule,
                primeng_3.CalendarModule,
                primeng_4.ButtonModule,
                primeng_6.ToggleButtonModule, primeng_5.AccordionModule
            ],
            exports: [contacts_list_model_1.ContactListComponent, modify_contact_model_1.ModifyContactComponent, home_component_1.Home, avatar_component_1.AvatarComponent, add_contact_model_1.AddContactComponent, calendar_component_1.CalendarComponent],
            providers: [environment_1.ENV_PROVIDERS, APP_PROVIDERS, contact_service_1.ContactService, avatar_service_1.AvatarService, calendar_service_1.CalendarService]
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, app_service_1.AppState])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map