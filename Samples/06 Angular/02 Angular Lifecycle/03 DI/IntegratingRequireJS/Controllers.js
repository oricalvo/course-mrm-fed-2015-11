(function () {

    function AppCtrl() {
        this.name = "XXX";
    }
    angular.module("MyApp").controller("AppCtrl", AppCtrl);

    function ToolbarCtrl() {
        this.name = "YYY";
    }

    ToolbarCtrl.prototype.alert = function () {
        alert("Hello");
    }

    angular.module("MyApp").controller("ToolbarCtrl", ToolbarCtrl);

    function ContentCtrl() {
    }
    angular.module("MyApp").controller("ContentCtrl", ContentCtrl);

})();
