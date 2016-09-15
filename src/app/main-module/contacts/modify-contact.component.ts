import { Component, Input } from '@angular/core';
import { ContactWithKey } from './models/contact.model';
import { AvatarService } from '../common/services/avatar.service';
import { ContactService } from '../common/services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'modify-contact-component',
  template: require('./templates/modify-contact.component.html')
})
export class ModifyContactComponent {
  _contact: ContactWithKey = null;
  _avatarSize: number;

  constructor(private avatarService: AvatarService,
              private contactService: ContactService, private router: Router) {
  }

  @Input() set selectedContact(selectedContact: ContactWithKey) {
    this._contact = selectedContact;
  }

  @Input() set avatarSize(_size: number) {
    this._avatarSize = _size;
  }

  update() {
    let fileButtonWithAvatar = (<HTMLInputElement><any>document
      .getElementById('fileButton')).files[0];
    if (fileButtonWithAvatar != null) {
      this.avatarService.updateAvatar(fileButtonWithAvatar, this._contact.$key);
    }
    let contact = {
      name: this._contact.name,
      surname: this._contact.surname,
      tel: this._contact.tel,
      birth: this._contact.birth
    };
    this.contactService.updateContact(this._contact.$key, contact);
    this.router.navigateByUrl('/contacts');
  }

  delete() {
    this.contactService.deleteContact(this._contact.$key);
    this.avatarService.deleteAvatar(this._contact.$key);
    this.router.navigateByUrl('/contacts');
  }
}
