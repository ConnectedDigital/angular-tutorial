"use strict";
var core_1 = require('@angular/core');
var contact_model_1 = require("./contact.model");
var avatar_service_1 = require("../../common/services/avatar.service");
var contact_service_1 = require("../../common/services/contact.service");
var router_1 = require("@angular/router");
var ModifyContactComponent = (function () {
    function ModifyContactComponent(avatarService, contactService, router) {
        this.avatarService = avatarService;
        this.contactService = contactService;
        this.router = router;
        this.avatar = null;
    }
    Object.defineProperty(ModifyContactComponent.prototype, "selectedContact", {
        set: function (selectedContact) {
            var _this = this;
            this._contact = selectedContact;
            this.avatarService.getAvatar(this._contact.$key)
                .then(function (url) { _this.avatar = url; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModifyContactComponent.prototype, "avatarSize", {
        set: function (_size) {
            this._avatarSize = _size;
        },
        enumerable: true,
        configurable: true
    });
    ModifyContactComponent.prototype.update = function () {
        var fileButtonWithAvatar = document.getElementById("fileButton").files[0];
        if (fileButtonWithAvatar != null) {
            this.avatarService.updateAvatar(fileButtonWithAvatar, this._contact.$key);
        }
        var contact = { name: this._contact.name, surname: this._contact.surname, tel: this._contact.tel, birth: this._contact.birth };
        this.contactService.updateContact(this._contact.$key, contact);
        this.router.navigateByUrl('/contacts');
    };
    ModifyContactComponent.prototype.delete = function () {
        //this.avatarService.deleteAvatar(this._contact.$key);
        this.contactService.deleteContact(this._contact.$key);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_model_1.ContactWithKey), 
        __metadata('design:paramtypes', [contact_model_1.ContactWithKey])
    ], ModifyContactComponent.prototype, "selectedContact", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], ModifyContactComponent.prototype, "avatarSize", null);
    ModifyContactComponent = __decorate([
        core_1.Component({
            selector: 'modify-contact-component',
            template: require('./../templates/modify-contact.component.html'),
        }), 
        __metadata('design:paramtypes', [avatar_service_1.AvatarService, contact_service_1.ContactService, router_1.Router])
    ], ModifyContactComponent);
    return ModifyContactComponent;
}());
exports.ModifyContactComponent = ModifyContactComponent;
//# sourceMappingURL=modify-contact.model.js.map