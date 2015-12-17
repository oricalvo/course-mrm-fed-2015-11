class NavigationService {
    url: string;

    constructor(private $rootScope: ng.IScope) {

    }

    navigate(url) {
        if (this.url == url) {
            return;
        }

        this.url = url;

        this.$rootScope.$broadcast("locationChanged", {
            url: this.url
        });
    }
}

angular.module("MyApp").service("navigationService", NavigationService);
