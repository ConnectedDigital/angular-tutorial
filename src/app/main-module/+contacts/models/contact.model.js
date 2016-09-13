"use strict";
var Contact = (function () {
    function Contact(name, surname, tel, birth) {
        this.name = name;
        this.surname = surname;
        this.tel = tel;
        this.birth = birth;
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactWithKey = (function (_super) {
    __extends(ContactWithKey, _super);
    function ContactWithKey() {
        _super.apply(this, arguments);
    }
    return ContactWithKey;
}(Contact));
exports.ContactWithKey = ContactWithKey;
//# sourceMappingURL=contact.model.js.map