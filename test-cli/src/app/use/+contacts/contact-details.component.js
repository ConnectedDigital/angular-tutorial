"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ContactViewComponent = (function () {
    function ContactViewComponent(router) {
        this.router = router;
    }
    ContactViewComponent.prototype.createContactFromExistOne = function () {
        /*
        let navigationExtras = {
          queryParams: { 'surname': this.contact.surname }, // global parameter
        };
        */
        this.router.navigate(['/+contacts/+newContact', this.contact.surname]);
    };
    __decorate([
        core_1.Input()
    ], ContactViewComponent.prototype, "contact", void 0);
    ContactViewComponent = __decorate([
        core_1.Component({
            selector: 'my-contact-Viev-component',
            template: "\n\n  <div >\n      <div>\n        <label for=\"nameLabel\">Name:</label>\n        <input [(ngModel)]=\"contact.name\" type=\"text\">\n     </div>\n      <div>\n       <label for=\"surnameLabel\">Surname:</label>\n        <input [(ngModel)]=\"contact.surname\" type=\"text\">\n      </div>\n      <div>\n       <label for=\"telLabel\">Tel:</label>\n        <input [(ngModel)]=\"contact.tel\" type=\"number\">\n      </div>\n      <div>\n        <label for=\"birthLabel\">Birth:</label>\n        <input [(ngModel)]=\"contact.birth\" type=\"text\">\n      </div>\n      <br>\n      <button (click)=\"createContactFromExistOne()\">Create a new contact from existing one</button>\n   </div>\n\n \n    ",
            styles: [
                "\n      label{\n        display: inline-block;\n        width:150px;\n       }\n      input{\n        width:250px;\n        }\n    "
            ],
        })
    ], ContactViewComponent);
    return ContactViewComponent;
}());
exports.ContactViewComponent = ContactViewComponent;
