import {Home} from "./main-module/home/home.component";
import {ContactListComponent} from "./main-module/+contacts/contacts-list.component";
import {ModifyContactComponent} from "./main-module/+contacts/modify-contact.component";
import {AddContactComponent} from "./main-module/+contacts/add-contact.component";
export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, pathMatch: 'full' },
  { path: 'newContact', component: AddContactComponent}
  // { path: 'contacts', component: ModifyContactComponent, pathMatch: 'full',children:path:... }
];
