(function () {
    function AppComponent() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    AppComponent.prototype.onAddingContact = function (contact) {
        if (!contact) {
            alert("EMPTY");
            return;
        }

        this.contacts.push(contact);
    }

    AppComponent.prototype.reset = function (contact) {
        this.contactEditor.reset();
    }

    angular.module("MyApp").directive("app", function () {
        var ddo = {
            templateUrl: "/app/app.html",
            controller: AppComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
            }
        };

        return ddo;
    });
})();
