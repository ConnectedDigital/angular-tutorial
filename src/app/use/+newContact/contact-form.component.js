"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var contact_1 = require("./contact");
var contact_service_1 = require("./contact.service");
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.placesOfBirt = ['Rzeszow', 'Warsaw',
            'Super Hot', 'Weather Changer'];
        // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.contact = new contact_1.Contact(null, null, null, null);
        this.submitted = false;
        this.active = true;
        console.log('Contact-form');
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        /**
        this.getSurname = this.router
          .routerState
          .map(params => params['surname'] || '');
    */
    };
    ContactFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactFormComponent.prototype.addNewContact = function (name, surname, tel, birth) {
        event.preventDefault();
        var contact = { name: name, surname: surname, tel: tel, birth: birth };
        this.active = false;
        this.contactService.insertContacts(contact);
        this.router.navigateByUrl('/+contacts');
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form-component',
            templateUrl: require('./contact-form.component.html'),
            styles: [
                "\n      label{\n        display: inline-block;\n        width:150px;\n       }\n      input{\n        width:250px;\n        }\n    "
            ],
            providers: [contact_service_1.ContactService]
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
