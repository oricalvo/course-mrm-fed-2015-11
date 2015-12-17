(function () {
    function HomeCtrl($scope, $timeout) {
        var me = this;

        this.message = "Hello 123";

        //$timeout(function () {
        //    me.message = "XXX";
        //}, 1000);

        setTimeout(function () {
            $scope.$apply(function () {
                me.message = "XXX";
            });

            //$scope.$apply();
        }, 2500);
    }

    HomeCtrl.prototype.doSomething = function () {
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
