import { Component, Input } from '@angular/core';
import { AvatarService } from '../../services/avatar.service';
@Component({
  template: require('./avatar.component.html'),
  selector: 'avatar-component',
})
export class AvatarComponent {
  avatar: string = null;
  size: number = 0;

  constructor(private avatarService: AvatarService) {
  }

  @Input() set key(_key: string) {
    this.avatarService.getAvatar(_key)
      .then(url => {
        this.avatar = url;
      }, error => this.avatar = '');
  }

  @Input() set avatarSize(_size: number) {
    this.size = _size;
  }
}



