import {Component, Input, OnInit} from '@angular/core';
import {Contact, ContactWithKey} from "./contact";
import {AvatarService} from "../common/services/avatar.service";

@Component({
  selector: 'modify-contact-component',
  template: require('./modify-contact.component.html'),
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
  ],
})
export class ModifyContactComponent{
  constructor(private avatarService:AvatarService){
  }

  @Input()
  contact:ContactWithKey;
  uploadAvatar(){
    var fileButtonWithAvatar = (<HTMLInputElement><any>document.getElementById("fileButton")).files[0];
    this.avatarService.uploadAvatar(fileButtonWithAvatar,this.contact);

  }


}
