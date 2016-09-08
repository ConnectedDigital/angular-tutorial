import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import any = jasmine.any;
import * as firebase from 'firebase';
import {ContactWithKey} from "../../+contacts/contact";

@Injectable()
export class AvatarService{

   getAvatar(contactKey:string) {
    const storageRef = firebase.storage().ref().child('pictures/' + contactKey);
    return storageRef.getDownloadURL();
  }
  updateAvatar(avatar:File,contactKey:string) {
    firebase.storage().ref().child('pictures/').child(contactKey).put(avatar);
  }
  deleteAvatar(key:string){
    firebase.storage().ref().child('pictures/').child(key).delete();
  }

}
