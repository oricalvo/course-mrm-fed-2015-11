(function () {
    function HomeCtrl($scope) {
        $scope.clockFormat = "HH:ss";

    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
