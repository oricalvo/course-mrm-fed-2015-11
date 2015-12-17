(function () {
    function HomeCtrl($scope, $timeout) {
        var me = this;

        this.message = "Hello 123";

        $scope.$watch(function () {
            return me.message;
        }, function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log(oldValue + " --> " + newValue);
        });
    }

    HomeCtrl.prototype.change = function () {
        this.message = "XXX";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
