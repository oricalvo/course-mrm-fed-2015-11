angular.module("MyApp", []).directive("dir1", function () {
    return {
        link: function (scope, element, attrs) {
        },

        //compile: function (element, attrs) {
        //    console.log("dir1.compile");

        //    element.append("<h1>My Directive</h1>");

        //    return function link(scope, element, attrs) {
        //        console.log("dir1.link");

        //        scope.$watch("num", function () {
        //            element.text(scope.num);
        //        });
        //    }
        //}
    };
});
