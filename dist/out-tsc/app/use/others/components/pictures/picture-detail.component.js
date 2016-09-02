var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import * as firebase from 'firebase';
import { PictureService } from "../../services/picture.service";
import { ContactWithKey } from "../../../+contacts/contact";
export var PictureDetailComponent = (function () {
    function PictureDetailComponent(pictureService) {
        this.pictureService = pictureService;
        this.image = null;
        this.pictureError = false;
    }
    PictureDetailComponent.prototype.getAvatar = function () {
        var _this = this;
        //this.pictureService.searchPicture(this.contact.$key);
        this.pictureError = false;
        var storageRef = firebase.storage().ref().child('pictures/' + this.contact.$key);
        storageRef.getDownloadURL().then(function (url) { return _this.image = url; }, function (error) { return _this.pictureError = true; });
        console.log(this.pictureError);
    };
    PictureDetailComponent.prototype.upload = function () {
        var fileButton = document.getElementById("fileButton").files[0];
        var uploader = document.getElementsByName("uploader");
        var storageRef = firebase.storage().ref().child('pictures/').child(this.contact.$key);
        var task = storageRef.put(fileButton);
        task.on(firebase.storage.TaskEvent.STATE_CHANGED, function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        }, function error(err) { console.log(err); }, function complete() { });
    };
    __decorate([
        Input(), 
        __metadata('design:type', ContactWithKey)
    ], PictureDetailComponent.prototype, "contact", void 0);
    PictureDetailComponent = __decorate([
        Component({
            template: require('./picture-detail.component.html'),
            selector: 'picture-detail-component',
            styles: [
                "\n #uploader{\n  -webkit-appearance:none;\n appearance: none;\n  \n}\n    "
            ]
        }), 
        __metadata('design:paramtypes', [PictureService])
    ], PictureDetailComponent);
    return PictureDetailComponent;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/others/components/pictures/picture-detail.component.js.map