"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var angularfire2_1 = require('angularfire2');
var ContactService = (function () {
    function ContactService(http, af) {
        this.http = http;
        this.af = af;
    }
    ContactService.prototype.getContacts = function () {
        this.contacts = this.af.database.list('data/contacts');
        this.af.database.list('data/contacts')
            .subscribe(function (data) { return console.log(data); });
    };
    ContactService.prototype.insertContact = function (contact) {
        this.contacts.push(contact);
    };
    ContactService.prototype.deleteContact = function (key) {
        this.contacts.remove(key);
    };
    ContactService.prototype.updateContact = function (key, contact) {
        this.contacts.update(key, contact);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angularfire2_1.AngularFire])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map