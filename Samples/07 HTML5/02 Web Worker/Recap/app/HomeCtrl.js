(function () {
    function HomeCtrl($scope, $element) {
        this.message = "Hello 123";

        var worker = new Worker("/app/Calc.js");

        worker.addEventListener("message", function (e) {
            var message = e.data;
            if (message.type == "done") {
                $scope.$apply(function () {
                    $scope.message = "DONE";
                });
            }
            else if (message.type == "stop") {
                $scope.$apply(function () {
                    $scope.message = "STOPPED";
                });
            }
        });

        $scope.startCalc = function () {
            worker.postMessage({ type: "start", interval: 10000 });

            $scope.message = "RUNNING";
        }

        $scope.stopCalc = function (file) {
            if (!worker) {
                return;
            }

            worker.postMessage("stop");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
