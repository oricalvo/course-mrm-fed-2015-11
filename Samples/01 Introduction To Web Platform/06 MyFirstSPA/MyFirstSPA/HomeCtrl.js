angular.module("MyApp").controller("HomeCtrl", function ($scope) {
    $scope.contacts = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
    ];

    $scope.add = function () {
        $scope.contacts.push({
            id: 3,
            name: $scope.name
        });
    }
});
