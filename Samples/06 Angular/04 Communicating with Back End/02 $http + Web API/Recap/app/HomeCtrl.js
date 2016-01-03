(function () {
    function HomeCtrl($http, $scope, contactService) {

        contactService.getAll().then(function (contacts) {
            console.log(!!contacts);

            $scope.contacts = contacts;
        }).catch(function (err) {
            alert("ERROR: " + err.message);
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
