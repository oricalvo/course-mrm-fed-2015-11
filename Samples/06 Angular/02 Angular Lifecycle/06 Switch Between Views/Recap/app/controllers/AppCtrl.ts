class AppCtrl {
    currentView: string;

    constructor() {
        this.currentView = "home";
    }

    navigate(viewName) {
        this.currentView = viewName;
    }
}

angular.module("MyApp").controller("AppCtrl", AppCtrl);