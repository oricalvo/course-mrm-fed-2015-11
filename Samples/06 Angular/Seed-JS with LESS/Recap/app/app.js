require("../lib/angular");
require("../lib/angular-mocks");

var app = angular.module("MyApp", ["ngMock"]);

app.component = function (options) {
    app.directive(options.tagName, function () {
        return {
            controller: options.controller,
            template: options.template,
            styles: options.styles,
            restrict: "E",
            scope: {
            },
            bindToController: true,
            controllerAs: "ctrl",
        };
    });

}

module.exports = app;


