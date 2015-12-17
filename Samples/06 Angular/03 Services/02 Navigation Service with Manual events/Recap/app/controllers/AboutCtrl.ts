class AboutCtrl {
    constructor(private $scope: ng.IScope, private navigationService: NavigationService) {
        console.log("AboutCtrl ctor");

        $scope.$on("$destroy", () => {
            console.log("AboutCtrl dtor");
        });

    }

    close() {
        this.navigationService.navigate("home");
    }
}

angular.module("MyApp").controller("AboutCtrl", AboutCtrl);