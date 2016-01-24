angular.module("MyApp", []).directive("dir1", function ($http, $compile, $timeout) {
    return {
        link: function (scope, element, attrs) {
            var src = attrs.src;
            if (src) {
                $http.get(src).then(function (res) {
                    var html = res.data;

                    var linkFn = $compile(html);
                    var templateElement = linkFn(scope);

                    element.append(templateElement);

                    $timeout(function () {
                        scope.message = "Hello $compile";
                    }, 2000);
                });
            }
        },
    };
});
