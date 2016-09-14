import {Component, Input, OnInit} from "@angular/core";
import {ContactService} from "../common/services/contact.service";
import {ContactWithKey} from "./models/contact.model";
import {Router} from "@angular/router";
@Component({
  selector: 'my-contact-list-component',
  template: require('./templates/contacts-list.component.html'),
  //styleUrls:["../assets/scss/contact-list.scss"]
})
export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContacts();
  }

  selectedContact: ContactWithKey = null;//contact to operate
  avatarSizeChoise = [50, 200];
  avatarSize = this.avatarSizeChoise[0];

  public onSelect(selectedContact: ContactWithKey) { //chosing, which component is clicked
    this.selectedContact = selectedContact;
  }

  addNewContact() {
    this.router.navigateByUrl('/newContact');
  }
}
