var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { AngularFire } from 'angularfire2';
export var ContactService = (function () {
    function ContactService(http, af) {
        this.http = http;
        this.af = af;
    }
    //private contactsUrl = 'http://localhost:3000/data';
    ContactService.prototype.httpGetContacts = function () {
        this.contacts = this.af.database.list('data/contacts');
        this.af.database.list('data/contacts')
            .subscribe(function (data) { return console.log(data); });
        // this.http.get(this.contactsUrl)
        //     .map(resp => resp.json())
        //     .subscribe(json => {
        //       this.contacts.next(json);
        //
        // });
    };
    ContactService.prototype.httpInsertContact = function (contact) {
        this.contacts.push(contact);
        // let body = JSON.stringify(contact);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        //
        // return this.http.post(this.contactsUrl, body, options)
        //   .map(this.extractData);
    };
    ContactService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AngularFire])
    ], ContactService);
    return ContactService;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/others/services/contact.service.js.map