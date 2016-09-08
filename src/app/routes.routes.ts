import {Home} from "./main-module/home/home.component";
import {ContactListComponent} from "./main-module/+contacts/models/contacts-list.model";
import {ModifyContactComponent} from "./main-module/+contacts/models/modify-contact.model";
import {AddContactComponent} from "./main-module/+contacts/models/add-contact.model";
import {CalendarComponent} from "./main-module/calendar/calendar.component";
export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
  { path: 'newContact', component: AddContactComponent,pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent,pathMatch: 'full' }
  // { path: 'contacts', component: ModifyContactComponent, pathMatch: 'full',children:path:... }
];
