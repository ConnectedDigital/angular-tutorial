import {Component, OnInit, Input} from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Contact} from "./contact.model";
import {ContactService} from "../../common/services/contact.service";
import {Observable} from "rxjs/Rx";
import {id} from "angular2/src/i18n/message";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'add-contact-component',
  template: require('./../templates/add-contact.component.html'),
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
export class AddContactComponent implements OnInit {
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


  constructor(private contactService:ContactService, private router:Router) {

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
    this.contactService.insertContact(contact);
    this.router.navigateByUrl('/contacts');

  }
}
