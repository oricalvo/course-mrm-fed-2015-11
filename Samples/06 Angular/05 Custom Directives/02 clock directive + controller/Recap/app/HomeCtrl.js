(function () {
    function HomeCtrl($scope, $element) {
        $scope.clockFormat = "HH:ss";

        $scope.browse = function () {
            $element.find("input[type=file]").trigger("click");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
