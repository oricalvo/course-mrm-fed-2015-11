class HomeCtrl {
    message: string;

    constructor() {
        this.message = "Hello 123";
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);