import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef,enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { App } from './app.component';
import {Home} from "./home/home.component";
import {ContactListComponent} from "./+contacts/contacts-list.component";
import {ContactFormComponent} from "./+contacts/contact-form.component";
import {ContactViewComponent} from "./+contacts/contact-details.component";
import {PictureDetailComponent} from "./others/components/pictures/picture-detail.component";
import {ContactService} from "./others/services/contact.service";
import {PictureService} from "./others/services/picture.service";



// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];
type StoreType = {
  state: InteralStateType,
  disposeOldHosts: () => void
};

export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
  { path: 'newContact', component: ContactFormComponent, pathMatch: 'full' },

];

export const firebaseConfig = {
  apiKey: "AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw",
  authDomain: "todo-fab5e.firebaseapp.com",
  databaseURL: "https://todo-fab5e.firebaseio.com",
  storageBucket: "todo-fab5e.appspot.com",
};

@NgModule({
  bootstrap: [ App ],
  declarations: [App,ContactListComponent,ContactViewComponent, ContactFormComponent,Home,PictureDetailComponent],
  imports: [ AngularFireModule.initializeApp(firebaseConfig),
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
  providers: [ENV_PROVIDERS, APP_PROVIDERS, ContactService, PictureService]
})
export class AppModule {
  static routes = ROUTER_CONFIG; // MINE

  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
