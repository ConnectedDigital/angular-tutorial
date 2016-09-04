import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef,enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {App} from './app.component';
import {ContactListComponent} from "./use/+contacts/contacts-list.component";
import {About} from "./use/+about/about";
import {Home} from "./use/home/home";
import {ContactFormComponent} from "./use/+newContact/contact-form.component";
import {ContactViewComponent} from "./use/+contacts/contact-details.component";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ContactService} from "./use/others/services/contact.service";
import { AngularFireModule } from 'angularfire2';
import {PictureService} from "./use/others/services/picture.service";
import {PictureDetailComponent} from "./use/others/components/pictures/picture-detail.component";

export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'about', component: About, pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
  { path: 'newContact', component: ContactFormComponent, pathMatch: 'full' },

];

export const firebaseConfig = {

  apiKey: "AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw",
  authDomain: "todo-fab5e.firebaseapp.com",
  databaseURL: "https://todo-fab5e.firebaseio.com",
  storageBucket: "todo-fab5e.appspot.com",
};

// var storage = firebase.storage();
// var storageRef = storage.ref();
// var spaceRef = storageRef.child('pictures');



@NgModule({
  bootstrap: [App],
  declarations: [App,ContactListComponent,ContactViewComponent, ContactFormComponent,Home,PictureDetailComponent],
  imports: [ // An array of modules that you want to others in your application such as the forms or http modules
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
  providers: [ContactService,PictureService] ,
  exports:      [  ContactListComponent,ContactViewComponent, ContactFormComponent, Home,PictureDetailComponent,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, ],
  entryComponents:[App]
})
export class AppModule{
  static routes = ROUTER_CONFIG;
}

