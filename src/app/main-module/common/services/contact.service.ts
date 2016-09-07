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

 // public contacts = new BehaviorSubject<Contact[]>([]); //data
  public contacts: FirebaseListObservable<ContactWithKey[]>; //database

  //private contactsUrl = 'http://localhost:3000/data';
  httpGetContacts() {
    this.contacts = this.af.database.list('data/contacts');
    this.af.database.list('data/contacts')
      .subscribe(data => console.log(data));
    // this.http.get(this.contactsUrl)
    //     .map(resp => resp.json())
    //     .subscribe(json => {
    //       this.contacts.next(json);
    //
    // });

  }

  httpInsertContact(contact:Contact){
    this.contacts.push(contact);

    // let body = JSON.stringify(contact);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    //
    // return this.http.post(this.contactsUrl, body, options)
    //   .map(this.extractData);
  }



  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body ;
  // }
  //
  // private handleError (error: any) {
  //   // In a real world app, we might common a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Promise.reject(errMsg);
  // }


  /** !!unusable now
   getContacts() {
    return Promise.resolve(CONTACTS);// promise to CONTACTS, that will fetch CONTACTS
  }
   insertContacts(contact:Contact){
    Promise.resolve(CONTACTS).then((contacts:Contact[])=>contacts.push(contact));
  }
   */

}
