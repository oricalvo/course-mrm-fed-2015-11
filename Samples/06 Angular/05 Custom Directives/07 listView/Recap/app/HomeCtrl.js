(function () {
    function HomeCtrl($scope) {
        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
