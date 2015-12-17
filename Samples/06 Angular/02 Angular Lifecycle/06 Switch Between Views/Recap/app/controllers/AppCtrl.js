var AppCtrl = (function () {
    function AppCtrl() {
        this.currentView = "home";
    }
    AppCtrl.prototype.navigate = function (viewName) {
        this.currentView = viewName;
    };
    return AppCtrl;
})();
angular.module("MyApp").controller("AppCtrl", AppCtrl);
