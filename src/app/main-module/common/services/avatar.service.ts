import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;
import * as firebase from 'firebase';
import {ContactWithKey} from "../../+contacts/contact";

@Injectable()
export class AvatarService{

  avatar:string;

  getAvatar(contactKey:string) {
    //console.log(_contact.$key);
    const storageRef = firebase.storage().ref().child('pictures/' + contactKey);
    storageRef.getDownloadURL().then(url => this.avatar = url, error=>console.log("in avatar service error with getAvatar()"));
    console.log(this.avatar);
    return this.avatar;
  }
  updateAvatar(avatar:File,contactKey:string) {
    firebase.storage().ref().child('pictures/').child(contactKey).put(avatar);
  }
  deleteAvatar(key:string){
    firebase.storage().ref().child('pictures/').child(key).delete();
  }

}
