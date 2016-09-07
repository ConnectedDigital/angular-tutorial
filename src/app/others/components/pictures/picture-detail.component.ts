import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {PictureService} from "../../services/picture.service";
import any = jasmine.any;
import {ContactWithKey} from "../../../+contacts/contact";
import {error} from "protractor/built/logger";


@Component({
  template: require('./picture-detail.component.html'),
  selector: 'picture-detail-component',
  styles: [
    `
 #uploader{
  -webkit-appearance:none;
 appearance: none;
  
}
    `
  ]
})
export class PictureDetailComponent {

  constructor(private pictureService: PictureService) {
  }

  private _contact: ContactWithKey;
  image: String = null;

  @Input() set contact(contact: ContactWithKey) {
    this._contact = contact;
    this.getAvatar();
  }

  pictureError = false;


  getAvatar() {
    //this.pictureService.searchPicture(this.contact.$key);
    this.pictureError = false;
    const storageRef = firebase.storage().ref().child('pictures/' + this._contact.$key);
    storageRef.getDownloadURL().then(url => this.image = url, error=>this.pictureError = true);
    console.log(this.pictureError);
  }

  upload() {
    var fileButton = (<HTMLInputElement><any>document.getElementById("fileButton")).files[0];
    var uploader = <any>document.getElementsByName("uploader");
    const storageRef = firebase.storage().ref().child('pictures/').child(this._contact.$key);
    var task = storageRef.put(fileButton);

    task.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },
      function error(err) {
        console.log(err)
      },
      function complete() {
      })
  }
}



