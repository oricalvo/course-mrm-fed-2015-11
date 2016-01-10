(function () {
    function ContactEditorComponent($scope, $attrs, componentService) {
        this.name = "";

        componentService.injectToParent(this, $scope, $attrs);
    }

    ContactEditorComponent.prototype.add = function () {
        var contact = {
            name: this.name,
        };

        //
        //  Raise the event
        //
        this.onAddingContact({ contact: contact });
    }

    ContactEditorComponent.prototype.reset = function () {
        this.name = "";
    }

    angular.module("MyApp").directive("contactEditor", function () {
        var ddo = {
            templateUrl: "/app/ContactEditor.html",
            controller: ContactEditorComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                contacts: "=",
                onAddingContact: "&",
            }
        };

        return ddo;
    });
})();
