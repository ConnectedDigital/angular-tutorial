import {Injectable} from "@angular/core";
import {Contact, ContactWithKey} from "../../+contacts/contact";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from "rxjs";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;


@Injectable()
export class ContactService{
  constructor (private http: Http, private af: AngularFire) {}
  public contacts: FirebaseListObservable<ContactWithKey[]>;
  getContacts() {
    this.contacts = this.af.database.list('data/contacts');
    this.af.database.list('data/contacts')
      .subscribe(data => console.log(data));
  }
  insertContact(contact:Contact){
    this.contacts.push(contact);
  }
  deleteContact(key:string){
    this.contacts.remove(key);
  }
  updateContact(key:string,contact:Contact){
   this.contacts.update(key,contact);

  }

}
