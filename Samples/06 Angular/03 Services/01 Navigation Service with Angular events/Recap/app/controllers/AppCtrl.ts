class AppCtrl {
    currentView: string;

    constructor($rootScope: ng.IScope, private navigationService: NavigationService) {
        this.currentView = "home";

        $rootScope.$on("locationChanged", (e, args) => {
            this.currentView = args.url;
        });
    }

    navigate(url) {
        this.navigationService.navigate(url);
    }
}

angular.module("MyApp").controller("AppCtrl", AppCtrl);