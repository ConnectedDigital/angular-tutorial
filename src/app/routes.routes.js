"use strict";
var home_component_1 = require("./main-module/home/home.component");
var contacts_list_model_1 = require("./main-module/+contacts/models/contacts-list.model");
var modify_contact_model_1 = require("./main-module/+contacts/models/modify-contact.model");
var add_contact_model_1 = require("./main-module/+contacts/models/add-contact.model");
var calendar_component_1 = require("./main-module/calendar/calendar.component");
exports.ROUTER_CONFIG = [
    { path: '', component: home_component_1.Home, pathMatch: 'full' },
    { path: 'contacts', component: contacts_list_model_1.ContactListComponent, pathMatch: 'full' },
    { path: 'newContact', component: add_contact_model_1.AddContactComponent, pathMatch: 'full' },
    { path: 'calendar', component: calendar_component_1.CalendarComponent, pathMatch: 'full' },
    { path: 'editContact', component: modify_contact_model_1.ModifyContactComponent, pathMatch: 'full' },
];
//# sourceMappingURL=routes.routes.js.map