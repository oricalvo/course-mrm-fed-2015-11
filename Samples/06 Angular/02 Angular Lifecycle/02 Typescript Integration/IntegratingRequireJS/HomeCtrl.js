/// <reference path="typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    var HomeCtrl = (function () {
        function HomeCtrl($http) {
            this.$http = $http;
            this.name = "ZZZ";
        }
        HomeCtrl.prototype.alert = function () {
            alert("Hello");
            this.name = "XXX";
            //this.$http.get(
        };
        return HomeCtrl;
    })();
    MyApp.HomeCtrl = HomeCtrl;
    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})(MyApp || (MyApp = {}));
