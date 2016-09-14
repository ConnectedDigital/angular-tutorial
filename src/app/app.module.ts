import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ScheduleModule,
  DialogModule,
  CalendarModule,
  ButtonModule,
  AccordionModule,
  ToggleButtonModule,
  InputTextModule
} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { App } from './app.component';
import { Home } from './main-module/home/home.component';
import { ContactListComponent } from './main-module/+contacts/models/contacts-list.model';
import { ModifyContactComponent } from './main-module/+contacts/models/modify-contact.model';
import { AddContactComponent } from './main-module/+contacts/models/add-contact.model';
import { AvatarComponent } from './main-module/common/components/avatars/avatar.component';
import { ContactService } from './main-module/common/services/contact.service';
import { CalendarService } from './main-module/common/services/calendar.service';
import { AvatarService } from './main-module/common/services/avatar.service';
import { ROUTER_CONFIG } from './routes.routes';
import { CalendarComponent } from './main-module/calendar/calendar.component';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];
type StoreType = {
  state: InteralStateType,
  disposeOldHosts: () => void
};


export const firebaseConfig = {
  apiKey: 'AIzaSyBwb-_vmNtgtOWiTEjQ5inxzmZufAPjUzw',
  authDomain: 'todo-fab5e.firebaseapp.com',
  databaseURL: 'https://todo-fab5e.firebaseio.com',
  storageBucket: 'todo-fab5e.appspot.com',
};

@NgModule({
  bootstrap: [App],
  declarations: [
    App, ContactListComponent, ModifyContactComponent,
    Home, AvatarComponent, AddContactComponent, CalendarComponent
  ],
  imports: [AngularFireModule.initializeApp(firebaseConfig),
    InputTextModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule,
    DialogModule,
    CalendarModule,
    ButtonModule,
    ToggleButtonModule, AccordionModule
  ],
  exports: [
    ContactListComponent, ModifyContactComponent,
    Home, AvatarComponent, AddContactComponent, CalendarComponent],
  providers: [ENV_PROVIDERS, APP_PROVIDERS, ContactService, AvatarService, CalendarService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
