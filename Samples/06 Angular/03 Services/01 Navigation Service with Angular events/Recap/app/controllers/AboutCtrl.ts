class AboutCtrl {
    constructor(private navigationService: NavigationService) {
    }

    close() {
        this.navigationService.navigate("home");
    }
}

angular.module("MyApp").controller("AboutCtrl", AboutCtrl);