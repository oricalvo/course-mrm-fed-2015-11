(function () {

    function HomeCtrl($scope, $http) {
        this.name = "XXX";

        $scope.test = "123";
    }
    HomeCtrl.$inject = ["$scope", "$http"];
    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
