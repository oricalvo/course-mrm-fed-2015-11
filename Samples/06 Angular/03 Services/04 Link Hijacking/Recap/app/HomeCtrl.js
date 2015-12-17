(function () {
    function HomeCtrl($scope, $timeout, $location) {
        var me = this;

        $timeout(function () {
            //$location.url("/contact/edit/123");
        }, 2000);
    }

    HomeCtrl.prototype.change = function () {
        this.message = "XXX";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
