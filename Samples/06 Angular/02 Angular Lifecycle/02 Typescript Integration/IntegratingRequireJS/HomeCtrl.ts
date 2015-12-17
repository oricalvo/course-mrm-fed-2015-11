/// <reference path="typings/angularjs/angular.d.ts" />

module MyApp {
    export class HomeCtrl {
        name: string;

        constructor(private $http: ng.IHttpService) {
            this.name = "ZZZ";
        }

        alert() {
            alert("Hello");

            this.name = "XXX";

            //this.$http.get(
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
}
