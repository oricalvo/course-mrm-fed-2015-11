/// <reference path="typings/angularjs/angular.d.ts" />

module MyApp {
    export class HomeCtrl {
        name: string;

        constructor(private $scope: ng.IHttpService, $http) {
            this.name = "ZZZ";
        }

        alert() {
            alert("Hello");

            this.name = "XXX";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", [
        "$http",
        "$scope",
        HomeCtrl
        ]);
}
