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
import { Contact } from "../+contacts/contact";
import { ContactService } from "../others/services/contact.service";
import { ActivatedRoute, Router } from "@angular/router";
export var ContactFormComponent = (function () {
    function ContactFormComponent(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.placesOfBirt = ['Rzeszow', 'Warsaw',
            'Super Hot', 'Weather Changer'];
        this.contact = new Contact(null, null, null, null);
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
        console.log(contact);
        this.contactService.httpInsertContact(contact);
        /*
         .subscribe(() => {
           this.router.navigateByUrl('/contacts');
         }, (err) => { console.error('inset contact: ' + err);})
         */
        /*
            .then(
            contact  => this.contacts.push(contact),
            error =>  this.errorMessage = <any>error);
            */
    };
    ContactFormComponent = __decorate([
        Component({
            selector: 'contact-form-component',
            template: require('./contact-form.component.html'),
            styles: [
                "\n      label{\n        display: inline-block;\n        width:150px;\n       }\n      input{\n        width:250px;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [ContactService, Router, ActivatedRoute])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/+newContact/contact-form.component.js.map