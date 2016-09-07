import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AvatarService} from "../../services/avatar.service";
import any = jasmine.any;
import {ContactWithKey} from "../../../+contacts/contact";
import {error} from "protractor/built/logger";


@Component({
  template: require('./avatar.component.html'),
  selector: 'avatar-component',
})
export class AvatarComponent {

  constructor(private avatarService: AvatarService) {
  }

  private _contact: ContactWithKey;
  avatar: string;
  //size:number=0;

  @Input() set contact(contact: ContactWithKey) {
    this._contact = contact;
    this.avatar=this.avatarService.getAvatar(this._contact);
  }

}



