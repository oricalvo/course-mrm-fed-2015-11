(function () {
    function HomeCtrl($scope, $element) {
        this.message = "Hello 123";

        $scope.log = function () {
        }

        $scope.onFileSelected = function (file) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.addEventListener("load", function (e) {
                var dataUrl = e.target.result;

                $element.find("img").attr("src", dataUrl);
            });


            //saveAs(file, "hello world.txt");

            //$scope.selectedFileName = file.name;

            //console.log(file);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
