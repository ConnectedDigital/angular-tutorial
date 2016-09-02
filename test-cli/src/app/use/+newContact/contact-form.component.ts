import {Component, OnInit, Input} from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Contact} from "../+contacts/contact";
import {ContactService} from "../others/services/contact.service";
import {ActivatedRoute,Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {id} from "angular2/src/i18n/message";

@Component({
  selector: 'contact-form-component',
  template: require('./contact-form.component.html'),
  styles:[
    `
      label{
        display: inline-block;
        width:150px;
       }
      input{
        width:250px;
        }
    `
  ]

})
export class ContactFormComponent implements OnInit {
  getSurname:Observable<string>;

  ngOnInit():any { // to fetch surname
    /**
    this.getSurname = this.router
      .routerState
      .map(params => params['surname'] || '');
*/
  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];


  placesOfBirt=['Rzeszow', 'Warsaw',
    'Super Hot', 'Weather Changer'];


  constructor(private contactService:ContactService, private router:Router, private route:ActivatedRoute) {

      console.log('Contact-form');

  }


  contact=new Contact(null,null,null,null);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;

  addNewContact(name:string, surname:string, tel:number, birth:string) {
    event.preventDefault();

    let contact:Contact = {name: name, surname: surname, tel: tel, birth: birth};
    this.active=false;
    console.log(contact);
    this.contactService.httpInsertContact(contact);

     /*
      .subscribe(() => {
        this.router.navigateByUrl('/contacts');
      }, (err) => { console.error('inset contact: ' + err);})
      */


    /*
        .then(
        contact  => this.contacts.push(contact),
        error =>  this.errorMessage = <any>error);
        */

  }
}
