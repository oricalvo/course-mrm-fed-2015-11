var NavigationService = (function () {
    function NavigationService() {
        this.locationChanged = new EventEmitter();
    }
    NavigationService.prototype.navigate = function (url) {
        if (this.url == url) {
            return;
        }
        this.url = url;
        this.locationChanged.raise({
            url: this.url
        });
    };
    return NavigationService;
})();
angular.module("MyApp").service("navigationService", NavigationService);
//# sourceMappingURL=NavigationService.js.map