import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;
import * as firebase from 'firebase';

@Injectable()
export class PictureService{

  public paths: FirebaseListObservable<string[]>; //database
  constructor ( private af: AngularFire) {

  }

  searchPicture(contactId:string){//to search picture name

    // let storageUrl = 'pictures/'+contactId;
    // var storageRef = firebase.storage().ref(storageUrl).getName();
    // console.log(storageRef);


    // var pictureName;
    // storageRef.call().getDownloadURL().then(function(url) {
    //   // Insert url into an <img> tag to "download"
    // }).catch(function(error) {
    //   switch (error.code) {
    //     case 'storage/object_not_found':
    //       console.log('File doesn t exist');
    //       break;
    //
    //     case 'storage/unauthorized':
    //       console.log('User doesn t have permission to access the object');
    //       break;
    //
    //     case 'storage/canceled':
    //       console.log('User canceled the upload');
    //       break;
    //
    //     ...
    //
    //     case 'storage/unknown':
    //       // Unknown error occurred, inspect the server response
    //       break;
    //   }
    // });
    //
    //

  }
}
