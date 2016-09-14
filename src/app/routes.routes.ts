import {Home} from "./main-module/home/home.component";
import {ContactListComponent} from "./main-module/contacts/contacts-list.component";
import {ModifyContactComponent} from "./main-module/contacts/modify-contact.component";
import {AddContactComponent} from "./main-module/contacts/add-contact.component";
import {CalendarComponent} from "./main-module/calendar/calendar.component";
export const ROUTER_CONFIG = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent, pathMatch: 'full'},
  {path: 'newContact', component: AddContactComponent, pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
  {path: 'editContact', component: ModifyContactComponent, pathMatch: 'full'},
];
