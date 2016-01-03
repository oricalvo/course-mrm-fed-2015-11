(function () {
    function ContactService() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
            { id: 3, name: "Udi" },
        ];
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    }

    ContactService.prototype.getById = function (id) {
        for (var i = 0; i < this.contacts.length; i++) {
            var contact = this.contacts[i];
            if (contact.id == id) {
                return contact;
            }
        }

        throw new Error("Contact with id: " + id + " was not found");
    }

    angular.module("MyApp").service("contactService", ContactService);
})();
