import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../common/services/contact.service";
import {Contact, ContactWithKey} from "./contact.model";
import {Route,Router} from "@angular/router";
import {provideRouterInitializer} from "@angular/router/src/router_module";

@Component({
  selector: 'my-contact-list-component',
  template: require('./../templates/contacts-list.component.html'),
  //styleUrls:["../assets/scss/contact-list.scss"]
})
export class ContactListComponent implements OnInit{
  constructor(private contactService: ContactService, private router:Router) {}

  ngOnInit() {
   this.contactService.getContacts();
  }

  selectedContact: ContactWithKey = null;//contact to operate
  avatarSizeChoise=[50,200];
  avatarSize=this.avatarSizeChoise[0];
  public onSelect(selectedContact:ContactWithKey) { //chosing, which component is clicked
      this.selectedContact = selectedContact;
     }
  addNewContact(){
    this.router.navigateByUrl('/newContact');
  }

}
