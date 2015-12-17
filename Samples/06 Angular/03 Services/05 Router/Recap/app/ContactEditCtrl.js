(function () {
    function ContactEditCtrl($stateParams) {
        console.log($stateParams.id);
    }

    angular.module("MyApp").controller("ContactEditCtrl", ContactEditCtrl);
})();
