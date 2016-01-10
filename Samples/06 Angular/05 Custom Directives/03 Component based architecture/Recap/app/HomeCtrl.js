(function () {
    function HomeCtrl($scope, $element) {
        $scope.clockFormat = "HH:ss";

        $element.find("input[type=file]").bind("input", function () {
            console.log("CHANGE: " + $element.find("input[type=file]").val());
        });

        $scope.browse = function () {
            $element.find("input[type=file]").trigger("click");
        }

        $scope.fileSelected = function () {
            console.log("File selected");
        }

        $scope.log = function () {
            console.log($element.find("input[type=file]").val());
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
