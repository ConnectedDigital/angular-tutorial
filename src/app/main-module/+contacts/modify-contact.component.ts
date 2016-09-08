import {Component, Input, OnInit} from '@angular/core';
import {Contact, ContactWithKey} from "./contact";
import {AvatarService} from "../common/services/avatar.service";
import {ContactService} from "../common/services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'modify-contact-component',
  template: require('./modify-contact.component.html'),
})
export class ModifyContactComponent{
  constructor(private avatarService:AvatarService,private contactService:ContactService, private router:Router){
  }
  _contact:ContactWithKey;


  avatar:string=null;
 @Input() set selectedContact(selectedContact:ContactWithKey){
   this._contact=selectedContact;
    this.avatar=this.avatarService.getAvatar(this._contact.$key);
  }

  update(){
    var fileButtonWithAvatar = (<HTMLInputElement><any>document.getElementById("fileButton")).files[0];
    if(fileButtonWithAvatar!=null){
      this.avatarService.updateAvatar(fileButtonWithAvatar,this._contact.$key);
    }
    var contact = {name:this._contact.name,surname:this._contact.surname,tel:this._contact.tel,birth:this._contact.birth};
    this.contactService.updateContact(this._contact.$key,contact);
    this.router.navigateByUrl('/contacts');
  }
  delete(){
    this.avatarService.deleteAvatar(this._contact.$key);
    this.contactService.deleteContact(this._contact.$key);
  }





}
