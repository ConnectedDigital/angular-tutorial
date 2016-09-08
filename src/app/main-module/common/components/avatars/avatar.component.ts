import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AvatarService} from "../../services/avatar.service";
import any = jasmine.any;
import {ContactWithKey} from "../../../+contacts/models/contact.model";
import {error} from "protractor/built/logger";


@Component({
  template: require('./avatar.component.html'),
  selector: 'avatar-component',
})
export class AvatarComponent{

  constructor(private avatarService: AvatarService) {
  }

  //size:number=0;
  avatar: string=null;
  size:number=50;

  @Input() set key(_key:string) {
    this.avatarService.getAvatar(_key)
      .then(url => { this.avatar = url});
  }
  @Input() set avatarSize(_size:number) {
    this.size=_size;
  }

}



