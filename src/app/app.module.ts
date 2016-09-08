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
import {Home} from "./main-module/home/home.component";
import {ContactListComponent} from "./main-module/+contacts/contacts-list.component";
import { ModifyContactComponent} from "./main-module/+contacts/modify-contact.component";
import {AvatarComponent} from "./main-module/common/components/avatars/avatar.component";
import {ContactService} from "./main-module/common/services/contact.service";
import {AvatarService} from "./main-module/common/services/avatar.service";
import {ROUTER_CONFIG} from "./routes..routes";
import {AddContactComponent} from "./main-module/+contacts/add-contact.component";
import {InputTextModule} from 'primeng/primeng';



// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];
type StoreType = {
  state: InteralStateType,
  disposeOldHosts: () => void
};



export const firebaseConfig = {
  apiKey: "AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw",
  authDomain: "todo-fab5e.firebaseapp.com",
  databaseURL: "https://todo-fab5e.firebaseio.com",
  storageBucket: "todo-fab5e.appspot.com",
};

@NgModule({
  bootstrap: [ App ],
  declarations: [App,ContactListComponent, ModifyContactComponent,Home,AvatarComponent,AddContactComponent],
  imports: [ AngularFireModule.initializeApp(firebaseConfig),
    InputTextModule,
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
  exports:      [  ContactListComponent, ModifyContactComponent, Home,AvatarComponent,AddContactComponent],
  providers: [ENV_PROVIDERS, APP_PROVIDERS, ContactService, AvatarService]
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
