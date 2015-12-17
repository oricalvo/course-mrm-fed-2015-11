var AboutCtrl = (function () {
    function AboutCtrl($scope, navigationService) {
        this.$scope = $scope;
        this.navigationService = navigationService;
        console.log("AboutCtrl ctor");
        $scope.$on("$destroy", function () {
            console.log("AboutCtrl dtor");
        });
    }
    AboutCtrl.prototype.close = function () {
        this.navigationService.navigate("home");
    };
    return AboutCtrl;
})();
angular.module("MyApp").controller("AboutCtrl", AboutCtrl);
//# sourceMappingURL=AboutCtrl.js.map