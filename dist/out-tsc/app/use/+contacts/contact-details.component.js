var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Contact } from "./contact";
export var ContactViewComponent = (function () {
    function ContactViewComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Contact)
    ], ContactViewComponent.prototype, "contact", void 0);
    ContactViewComponent = __decorate([
        Component({
            selector: 'pop-up',
            template: require('./contact-details.component.html'),
            styles: [
                "\n      label{\n        display: inline-block;\n        width:150px;\n       }\n      input{\n        width:250px;\n        }\n    "
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactViewComponent);
    return ContactViewComponent;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/+contacts/contact-details.component.js.map