import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AvatarService {
  getAvatar(contactKey: string) {
    const storageRef = firebase.storage().ref().child('avatars/' + contactKey);
    return storageRef.getDownloadURL();
  }

  updateAvatar(avatar: File, contactKey: string) {
    firebase.storage().ref().child('avatars/').child(contactKey).put(avatar);
  }

  deleteAvatar(key: string) {
    firebase.storage().ref().child('avatars/').child(key).delete();
  }
}
