import { Component, OnInit } from '@angular/core';
import { ContactService } from '../common/services/contact.service';
import { ContactWithKey } from './models/contact.model';
import { Router } from '@angular/router';
@Component({
  selector: 'my-contact-list-component',
  template: require('./templates/contacts-list.component.html')
})
export class ContactListComponent implements OnInit {
  selectedContact: ContactWithKey = null;
  avatarSizeChoise = [50, 200];
  avatarSize = this.avatarSizeChoise[0];

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContacts();
  }

  onSelect(selectedContact: ContactWithKey) {
    this.selectedContact = selectedContact;
  }

  addNewContact() {
    this.router.navigateByUrl('/newContact');
  }
}
