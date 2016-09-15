import { Injectable } from '@angular/core';
import { Contact, ContactWithKey } from '../../contacts/models/contact.model';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;
@Injectable()
export class ContactService {
  public contacts: FirebaseListObservable<ContactWithKey[]>;

  constructor(private http: Http, private af: AngularFire) {
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
