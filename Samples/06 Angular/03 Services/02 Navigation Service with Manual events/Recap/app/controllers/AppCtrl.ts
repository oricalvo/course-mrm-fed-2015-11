class AppCtrl {
    currentView: string;

    constructor(private $scope: ng.IScope, private navigationService: NavigationService) {
        this.currentView = "home";

        navigationService.locationChanged.register(this, this.onLocationChanged);

        $scope.$on("$destroy", () => {
            navigationService.locationChanged.unregister(this, this.onLocationChanged);
        });
    }

    onLocationChanged(args: LocationChangedEventArgs) {
        this.currentView = args.url;
    }

    navigate(url) {
        this.navigationService.navigate(url);
    }
}

angular.module("MyApp").controller("AppCtrl", AppCtrl);