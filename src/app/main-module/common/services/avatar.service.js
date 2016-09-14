"use strict";
var core_1 = require("@angular/core");
require('rxjs/add/operator/toPromise');
var firebase = require('firebase');
var AvatarService = (function () {
    function AvatarService() {
    }
    AvatarService.prototype.getAvatar = function (contactKey) {
        var storageRef = firebase.storage().ref().child('avatars/' + contactKey);
        return storageRef.getDownloadURL();
    };
    AvatarService.prototype.updateAvatar = function (avatar, contactKey) {
        firebase.storage().ref().child('avatars/').child(contactKey).put(avatar);
    };
    AvatarService.prototype.deleteAvatar = function (key) {
        firebase.storage().ref().child('avatars/').child(key).delete();
    };
    AvatarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AvatarService);
    return AvatarService;
}());
exports.AvatarService = AvatarService;
//# sourceMappingURL=avatar.service.js.map