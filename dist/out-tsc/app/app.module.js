var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App } from './app.component';
import { ContactListComponent } from "./use/+contacts/contacts-list.component";
import { About } from "./use/+about/about";
import { Home } from "./use/home/home";
import { ContactFormComponent } from "./use/+newContact/contact-form.component";
import { ContactViewComponent } from "./use/+contacts/contact-details.component";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ContactService } from "./use/others/services/contact.service";
import { AngularFireModule } from 'angularfire2';
import { PictureService } from "./use/others/services/picture.service";
import { PictureDetailComponent } from "./use/others/components/pictures/picture-detail.component";
export var ROUTER_CONFIG = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'home', component: Home, pathMatch: 'full' },
    { path: 'about', component: About, pathMatch: 'full' },
    { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
    { path: 'newContact', component: ContactFormComponent, pathMatch: 'full' },
];
export var firebaseConfig = {
    apiKey: "AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw",
    authDomain: "todo-fab5e.firebaseapp.com",
    databaseURL: "https://todo-fab5e.firebaseio.com",
    storageBucket: "todo-fab5e.appspot.com",
};
// var storage = firebase.storage();
// var storageRef = storage.ref();
// var spaceRef = storageRef.child('pictures');
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.routes = ROUTER_CONFIG;
    AppModule = __decorate([
        NgModule({
            bootstrap: [App],
            declarations: [App, ContactListComponent, ContactViewComponent, ContactFormComponent, Home, PictureDetailComponent],
            imports: [
                AngularFireModule.initializeApp(firebaseConfig),
                BrowserModule,
                FormsModule,
                HttpModule,
                RouterModule.forRoot(ROUTER_CONFIG),
                //RouterModule.forChild(ROUTER_CONFIG)],
                CommonModule,
                HttpModule,
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [ContactService, PictureService],
            exports: [ContactListComponent, ContactViewComponent, ContactFormComponent, Home, PictureDetailComponent,
                RouterModule,
                HttpModule,
                FormsModule,
                ReactiveFormsModule,
                CommonModule,],
            entryComponents: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/app.module.js.map