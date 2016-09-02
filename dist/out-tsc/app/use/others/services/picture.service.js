var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFire } from 'angularfire2';
export var PictureService = (function () {
    function PictureService(af) {
        this.af = af;
    }
    PictureService.prototype.searchPicture = function (contactId) {
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
    };
    PictureService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFire])
    ], PictureService);
    return PictureService;
}());
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/others/services/picture.service.js.map