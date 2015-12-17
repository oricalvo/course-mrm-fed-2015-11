class NavigationService {
    url: string;
    locationChanged: EventEmitter<LocationChangedEventArgs>;

    constructor() {
        this.locationChanged = new EventEmitter();
    }

    navigate(url) {
        if (this.url == url) {
            return;
        }

        this.url = url;

        this.locationChanged.raise({
            url: this.url
        });
    }
}

interface LocationChangedEventArgs {
    url: string;
}

angular.module("MyApp").service("navigationService", NavigationService);
