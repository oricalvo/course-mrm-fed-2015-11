(function () {
    function ContactListComponent() {
    }

    angular.module("MyApp").directive("contactList", function () {
        var ddo = {
            templateUrl: "/app/ContactList.html",
            controller: ContactListComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                contacts: "=",
            }
        };

        return ddo;
    });
})();
