(function () {
    function ClockComponent() {
    }

    angular.module("MyApp").directive("clock", function ($interval) {
        var ddo = {
            //template: "<h1>Clock</h1>"
            templateUrl: "/app/ClockComponent.html",
            link: function (scope, element, attrs) {

                //scope.format = 'HH:mm:ss';

                //scope.$watch(attrs.format, function (newValue) {
                //    scope.format = newValue;
                //});

                $interval(function () {
                    scope.time = new Date();
                }, 1000);

                scope.time = new Date();
            },
            scope: {
                format: "=",
            }
        };

        return ddo;
    });
})();
