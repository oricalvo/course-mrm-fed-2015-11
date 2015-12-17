var HomeCtrl = (function () {
    function HomeCtrl() {
        this.message = "Hello 123";
    }
    return HomeCtrl;
})();
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
