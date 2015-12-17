/// <reference path="typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    var HomeCtrl = (function () {
        function HomeCtrl($scope, $http) {
            this.$scope = $scope;
            this.name = "ZZZ";
        }
        HomeCtrl.prototype.alert = function () {
            alert("Hello");
            this.name = "XXX";
        };
        return HomeCtrl;
    })();
    MyApp.HomeCtrl = HomeCtrl;
    angular.module("MyApp").controller("HomeCtrl", [
        "$http",
        "$scope",
        HomeCtrl
    ]);
})(MyApp || (MyApp = {}));
