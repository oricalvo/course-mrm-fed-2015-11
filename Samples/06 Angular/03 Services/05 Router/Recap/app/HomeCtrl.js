(function () {
    function HomeCtrl($scope, $timeout, $location, $state) {
        var me = this;

        this.$state = $state;

        $timeout(function () {
            //$location.url("/contact/edit/123");
        }, 2000);
    }

    HomeCtrl.prototype.change = function () {
        this.message = "XXX";
    }

    HomeCtrl.prototype.goto = function () {
        //this.$state.go("about");

        this.$state.go("contact-edit", { id: 123 });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
