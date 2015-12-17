var AboutCtrl = (function () {
    function AboutCtrl(navigationService) {
        this.navigationService = navigationService;
    }
    AboutCtrl.prototype.close = function () {
        this.navigationService.navigate("home");
    };
    return AboutCtrl;
})();
angular.module("MyApp").controller("AboutCtrl", AboutCtrl);
//# sourceMappingURL=AboutCtrl.js.map