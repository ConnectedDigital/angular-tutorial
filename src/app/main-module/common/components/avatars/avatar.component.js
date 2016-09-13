"use strict";
var core_1 = require('@angular/core');
var avatar_service_1 = require("../../services/avatar.service");
var AvatarComponent = (function () {
    function AvatarComponent(avatarService) {
        this.avatarService = avatarService;
        //size:number=0;
        this.avatar = null;
        this.size = 50;
    }
    Object.defineProperty(AvatarComponent.prototype, "key", {
        set: function (_key) {
            var _this = this;
            this.avatarService.getAvatar(_key)
                .then(function (url) { _this.avatar = url; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvatarComponent.prototype, "avatarSize", {
        set: function (_size) {
            this.size = _size;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], AvatarComponent.prototype, "key", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], AvatarComponent.prototype, "avatarSize", null);
    AvatarComponent = __decorate([
        core_1.Component({
            template: require('./avatar.component.html'),
            selector: 'avatar-component',
        }), 
        __metadata('design:paramtypes', [avatar_service_1.AvatarService])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map