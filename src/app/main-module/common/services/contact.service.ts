import { Injectable } from '@angular/core';
import { Contact, ContactWithKey } from '../../contacts/models/contact.model';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SelectItem } from '../../../../assets/primeng/components/common/api';
@Injectable()
export class ContactService {
  public contacts: FirebaseListObservable<ContactWithKey[]>;
  public mappedContacts: SelectItem[];

  constructor(private af: AngularFire) {
  }

  getContacts() {
    this.contacts = this.af.database.list('data/contacts');
    this.af.database.list('data/contacts')
      .subscribe(data => console.log(data));
  }

  // getMappedContacts() {
  //   this.mappedContacts = [];
  //   this.af.database.list('data/contacts').map(val => {
  //     return val.map((contact) => {
  //       return {label: contact.$key, value: contact.name + ' ' + contact.surname};
  //     });
  //   }).subscribe(data => {
  //     this.mappedContacts = data;
  //   });
  // }

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
