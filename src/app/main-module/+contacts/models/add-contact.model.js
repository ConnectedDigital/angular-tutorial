"use strict";
var core_1 = require('@angular/core');
var contact_model_1 = require("./contact.model");
var contact_service_1 = require("../../common/services/contact.service");
var router_1 = require("@angular/router");
var avatar_service_1 = require("../../common/services/avatar.service");
var AddContactComponent = (function () {
    function AddContactComponent(contactService, avatarService, router) {
        this.contactService = contactService;
        this.avatarService = avatarService;
        this.router = router;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.placesOfBirt = ['Rzeszow', 'Warsaw',
            'Super Hot', 'Weather Changer'];
        this.contact = new contact_model_1.Contact(null, null, null, null);
        this.submitted = false;
        this.active = true;
        console.log('Contact-form');
    }
    AddContactComponent.prototype.ngOnInit = function () {
        /**
        this.getSurname = this.router
          .routerState
          .map(params => params['surname'] || '');
    */
    };
    AddContactComponent.prototype.onSubmit = function () { this.submitted = true; };
    AddContactComponent.prototype.addNewContact = function (name, surname, tel, birth) {
        event.preventDefault();
        var contact = { name: name, surname: surname, tel: tel, birth: birth };
        this.active = false;
        console.log(contact);
        this.contactService.insertContact(contact);
        this.router.navigateByUrl('/contacts');
    };
    AddContactComponent = __decorate([
        core_1.Component({
            selector: 'add-contact-component',
            template: require('./../templates/add-contact.component.html'),
            styles: [
                "\n      label{\n        display: inline-block;\n        width:150px;\n       }\n      input{\n        width:250px;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, avatar_service_1.AvatarService, router_1.Router])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=add-contact.model.js.map