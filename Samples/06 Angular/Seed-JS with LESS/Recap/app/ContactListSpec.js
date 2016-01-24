var ContactList = require("./ContactList");

describe("ContactList", function () {
    it("fetches the contact list from the contact service", function () {
        window.module("MyApp");

        var $injector;
        inject(function (_$injector_) {
            $injector = _$injector_;
        });

        var contacts = [];

        var mockService = {
            getAll: function () {
                return contacts;
            }
        };

        var contactList = $injector.instantiate(ContactList, { $scope: {}, contactService: mockService });
        //var contactList = new ContactList(mockService);

        expect(contactList.contacts).toEqual(contacts);
    });
});
