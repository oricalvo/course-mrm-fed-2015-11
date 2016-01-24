(function () {
    function CellComponent() {
    }

    angular.module("MyApp").directive("cell", function () {
        var ddo = {
            templateUrl: "/components/Cell.html",
            controller: CellComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                model: "=",
            }
        };

        return ddo;
    });
})();
