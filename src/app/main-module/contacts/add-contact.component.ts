import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';
import { ContactService } from '../common/services/contact.service';
import { Observable } from 'rxjs/Rx';
import { id } from 'angular2/src/i18n/message';
import { Router } from '@angular/router';
import { AvatarService } from '../common/services/avatar.service';
@Component({
  selector: 'add-contact-component',
  template: require('./templates/add-contact.component.html')
})
export class AddContactComponent implements OnInit {
  getSurname: Observable<string>;
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  placesOfBirt = ['Rzeszow', 'Warsaw',
    'Super Hot', 'Weather Changer'];
  contact = new Contact(null, null, null, null);
  submitted = false;
  active = true;

  constructor(private contactService: ContactService,
              private avatarService: AvatarService, private router: Router) {
    console.log('Contact-form');
  }

  onSubmit() {
    this.submitted = true;
  }

  addNewContact(name: string, surname: string, tel: number, birth: string) {
    event.preventDefault();
    let contact: Contact = {name: name, surname: surname, tel: tel, birth: birth};
    this.active = false;
    console.log(contact);
    this.contactService.insertContact(contact);
    this.router.navigateByUrl('/contacts');
  }
}
