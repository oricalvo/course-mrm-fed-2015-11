(function () {
    angular.module("MyApp").directive("fileChooser", function () {
        return {
            restrict: "E",
            template: "<input type='file' style='display: none' /><button>Browse</button>",
            link: function (scope, element, attrs) {
                var inputFile = element.find("input[type=file]");

                var buttonBrowse = element.find("button");
                buttonBrowse.click(function () {
                    inputFile.trigger("click");
                });
                
                inputFile.on("change", function () {
                    scope.$apply(function () {
                        scope.onSelected({ file: inputFile[0].files[0] });
                    });
                });
            },
            scope: {
                onSelected: "&",
            }
        };
    });
})();
