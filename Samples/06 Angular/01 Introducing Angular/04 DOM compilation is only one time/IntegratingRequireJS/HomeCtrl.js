(function () {

    function HomeCtrl($scope) {
        $scope.change = function () {
            $("body").append("<span>{{message}}</span>");

            this.message = "XXX";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
