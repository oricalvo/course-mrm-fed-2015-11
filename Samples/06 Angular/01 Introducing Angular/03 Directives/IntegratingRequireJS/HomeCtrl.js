(function () {

    function HomeCtrl($scope) {
        $scope.message = "ABC";

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.name = "";

        $scope.add = function () {
            if (!$scope.name) {
                alert("Please specify a message");

                return;
            }

            $scope.contacts.push({
                id: -1,
                name: $scope.name,
            });
        }

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
