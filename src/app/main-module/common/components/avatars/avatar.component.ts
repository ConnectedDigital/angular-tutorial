import {Component, Input, OnInit, NgZone, ChangeDetectorRef} from "@angular/core";
import {AvatarService} from "../../services/avatar.service";
import any = jasmine.any;
@Component({
  template: require('./avatar.component.html'),
  selector: 'avatar-component',
})
export class AvatarComponent {
  constructor(private avatarService: AvatarService) {
  }

  avatar: string = null;
  size: number = 0;

  @Input() set key(_key: string) {
    this.avatarService.getAvatar(_key)
      .then(url => {
        this.avatar = url
      }, error=>console.log("Avatar not found"));
  }

  @Input() set avatarSize(_size: number) {
    this.size = _size;
  }
}



