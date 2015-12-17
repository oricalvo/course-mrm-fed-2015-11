(function () {

    function HomeCtrl($scope, $http, $injector) {
        this.name = "XXX";

        var f = function ($http) {
            console.log(!!$http);
            //console.log(x);
        }

        $injector.invoke(f, this, {
            x: 5,
            $http: {}
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
