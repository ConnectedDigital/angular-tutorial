import { Component } from '@angular/core';
import { Contact } from './models/contact.model';
import { ContactService } from '../common/services/contact.service';
import { Router } from '@angular/router';
import { AvatarService } from '../common/services/avatar.service';
@Component({
  selector: 'add-contact-component',
  template: require('./templates/add-contact.component.html')
})
export class AddContactComponent {
  placesOfBirt = ['Rzeszow', 'Warsaw',
    'Super Hot', 'Weather Changer'];
  contact = new Contact();
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
    let contact = new Contact();
    contact.name = name;
    contact.surname = surname;
    contact.tel = tel;
    contact.birth = birth;
    this.active = false;
    console.log(contact);
    this.contactService.insertContact(contact);
    this.router.navigateByUrl('/contacts');
  }
}
