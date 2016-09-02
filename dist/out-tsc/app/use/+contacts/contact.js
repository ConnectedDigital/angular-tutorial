var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
export var Contact = (function () {
    function Contact(name, surname, tel, birth) {
        this.name = name;
        this.surname = surname;
        this.tel = tel;
        this.birth = birth;
    }
    return Contact;
}());
export var ContactWithKey = (function (_super) {
    __extends(ContactWithKey, _super);
    function ContactWithKey() {
        _super.apply(this, arguments);
    }
    return ContactWithKey;
}(Contact));
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/use/+contacts/contact.js.map