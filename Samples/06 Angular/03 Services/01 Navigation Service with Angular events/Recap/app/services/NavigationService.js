var NavigationService = (function () {
    function NavigationService($rootScope) {
        this.$rootScope = $rootScope;
    }
    NavigationService.prototype.navigate = function (url) {
        if (this.url == url) {
            return;
        }
        this.url = url;
        this.$rootScope.$broadcast("locationChanged", {
            url: this.url
        });
    };
    return NavigationService;
})();
angular.module("MyApp").service("navigationService", NavigationService);
//# sourceMappingURL=NavigationService.js.map