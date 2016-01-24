angular.module("MyApp", []).directive("listView", function ($compile) {
    return {
        link: function (scope, element, attrs) {
            var template = element.html();
            element.empty();
            //alert(template);

            var linkFn = $compile(template);

            var data = scope[attrs.model];

            data.forEach(function (item) {
                var childScope = scope.$new();
                childScope[attrs.modelItem] = item;

                var childElement = linkFn(childScope, function (clone) { });
                element.append(childElement);
            });

            alert(data.length);
        },
    };
});
