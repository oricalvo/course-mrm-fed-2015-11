(function () {
    function ClockComponent($scope, $interval, $attrs) {
        var me = this;

        this.time = new Date();
        this.format = "HH:mm:ss";

        $interval(function () { me.onInterval(); }, 1000);
    }

    ClockComponent.prototype.onInterval = function () {
        this.time = new Date();
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            templateUrl: "/app/ClockComponent.html",
            controller: ClockComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                //format: "=",
            }
        };

        return ddo;
    });
})();
