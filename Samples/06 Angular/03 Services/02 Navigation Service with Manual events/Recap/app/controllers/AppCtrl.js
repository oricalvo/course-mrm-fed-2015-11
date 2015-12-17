var AppCtrl = (function () {
    function AppCtrl($scope, navigationService) {
        var _this = this;
        this.$scope = $scope;
        this.navigationService = navigationService;
        this.currentView = "home";
        navigationService.locationChanged.register(this, this.onLocationChanged);
        $scope.$on("$destroy", function () {
            navigationService.locationChanged.unregister(_this, _this.onLocationChanged);
        });
    }
    AppCtrl.prototype.onLocationChanged = function (args) {
        this.currentView = args.url;
    };
    AppCtrl.prototype.navigate = function (url) {
        this.navigationService.navigate(url);
    };
    return AppCtrl;
})();
angular.module("MyApp").controller("AppCtrl", AppCtrl);
//# sourceMappingURL=AppCtrl.js.map