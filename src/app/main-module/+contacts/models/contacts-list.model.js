"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ContactListComponent = (function () {
    function ContactListComponent(route, router, _contactService) {
        this.route = route;
        this.router = router;
        this._contactService = _contactService;
        this.selectedContact = null; //contact to operate
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactListComponent.prototype.getContacts = function () {
        var _this = this;
        return this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactListComponent.prototype.onSelect = function (selectedContact) {
        this.selectedContact = selectedContact;
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'my-contact-list-component',
            template: "\n<div class=\"form-group\">\n <ul > \n       \n    <li *ngFor=\"let contact of contacts\" [class.clicked]=\"contact === selectedContact\" (click)=\"onSelect(contact)\"  > \n      {{contact.name}} {{contact.surname}}\n    </li>   \n    \n    \n </ul>  \n\n <my-contact-Viev-component *ngIf=\"selectedContact!==null\" [contact]=\"selectedContact\"></my-contact-Viev-component>\n </div>\n    ",
            styleUrls: ["../assets/scss/contact-list.scss"]
        })
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
