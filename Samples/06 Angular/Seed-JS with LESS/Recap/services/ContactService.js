var app = require("../app/app");

(function () {
    function ContactService() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    }

    app.service("contactService", ContactService);
})();

