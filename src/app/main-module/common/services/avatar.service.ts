import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;
import * as firebase from 'firebase';
import {ContactWithKey} from "../../+contacts/contact";

@Injectable()
export class AvatarService{

  avatar:string;

  getAvatar(_contact:ContactWithKey) {
    //console.log(_contact.$key);
    const storageRef = firebase.storage().ref().child('pictures/' + _contact.$key+'.jpg');
    storageRef.getDownloadURL().then(url => this.avatar = url, error=>console.log("in avatar service error with getAvatar()"));
    console.log(this.avatar);
    return this.avatar;
  }
  uploadAvatar(avatar:File,_contact:ContactWithKey) {
    var uploader = <any>document.getElementsByName("uploader");
    const storageRef = firebase.storage().ref().child('avatars/').child(_contact.$key);
    storageRef.put(avatar);

  }

}
