import {Injectable} from '@angular/core';
import { Contact, ContactWithKey } from '../../contacts/models/contact.model';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class ContactService {
  public contacts: FirebaseListObservable<ContactWithKey[]>;
  public contact: ContactWithKey;

  constructor(private af: AngularFire) {
  }

  getContacts() {
    this.contacts = this.af.database.list('data/contacts');
    this.af.database.list('data/contacts')
      .subscribe(data => console.log(data));
  }

  insertContact(contact: Contact) {
    this.contacts.push(contact);
  }

  deleteContact(key: string) {
    this.contacts.remove(key);

    }

  updateContact(key: string, contact: Contact) {
    this.contacts.update(key, contact);
  }

}
