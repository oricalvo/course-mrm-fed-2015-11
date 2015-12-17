var AppCtrl = (function () {
    function AppCtrl($rootScope, navigationService) {
        var _this = this;
        this.navigationService = navigationService;
        this.currentView = "home";
        $rootScope.$on("locationChanged", function (e, args) {
            _this.currentView = args.url;
        });
    }
    AppCtrl.prototype.navigate = function (url) {
        this.navigationService.navigate(url);
    };
    return AppCtrl;
})();
angular.module("MyApp").controller("AppCtrl", AppCtrl);
//# sourceMappingURL=AppCtrl.js.map