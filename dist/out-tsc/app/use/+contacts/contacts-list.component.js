var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ContactService } from "../others/services/contact.service";
export var ContactListComponent = (function () {
    function ContactListComponent(contactService) {
        this.contactService = contactService;
        this.selectedContact = null; //contact to operate
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contactService.httpGetContacts();
    };
    ContactListComponent.prototype.onSelect = function (selectedContact) {
        this.selectedContact = selectedContact;
    };
    ContactListComponent = __decorate([
        Component({
            selector: 'my-contact-list-component',
            template: require('./contacts-list.component.html'),
        }), 
        __metadata('design:paramtypes', [ContactService])
    ], ContactListComponent);
    return ContactListComponent;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/+contacts/contacts-list.component.js.map