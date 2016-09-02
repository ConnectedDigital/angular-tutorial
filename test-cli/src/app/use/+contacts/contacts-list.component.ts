import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../others/services/contact.service";
import {Contact} from "./contact";

@Component({
  selector: 'my-contact-list-component',
  template: require('./contacts-list.component.html'),
  //styleUrls:["../assets/scss/contact-list.scss"]
})
export class ContactListComponent implements OnInit{
  constructor(public contactService: ContactService) {}

  ngOnInit() {
   this.contactService.httpGetContacts();
  }

  selectedContact: Contact = null;//contact to operate

  public onSelect(selectedContact:Contact) { //chosing, which component is clicked
      this.selectedContact = selectedContact;
     }
}
