"use strict";
var core_1 = require('@angular/core');
var contact_service_1 = require("../../common/services/contact.service");
var router_1 = require("@angular/router");
var ContactListComponent = (function () {
    function ContactListComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
        this.selectedContact = null; //contact to operate
        this.avatarSizeChoise = [50, 200];
        this.avatarSize = this.avatarSizeChoise[0];
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contactService.getContacts();
    };
    ContactListComponent.prototype.onSelect = function (selectedContact) {
        this.selectedContact = selectedContact;
    };
    ContactListComponent.prototype.addNewContact = function () {
        this.router.navigateByUrl('/newContact');
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'my-contact-list-component',
            template: require('./../templates/contacts-list.component.html'),
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contacts-list.model.js.map