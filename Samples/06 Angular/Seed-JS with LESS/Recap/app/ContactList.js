var app = require("./app");
require("../services/ContactService");

(function () {
    function ContactList($scope, contactService, $http) {
        this.contacts = contactService.getAll();
    }

    app.component({
        tagName: "contactList",
        controller: ContactList,
        template: require("./ContactList.html!text"),
        styles: require("./ContactList.css!"),
    });

    module.exports = ContactList;
})();

