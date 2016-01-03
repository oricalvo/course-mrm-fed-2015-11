(function () {
    function ListCtrl($scope, contactService, $state) {
        $scope.contacts = contactService.getAll();

        $scope.select = function (contact) {
            $state.go("list.details", { id: contact.id, parent: {} });
        }
    }

    angular.module("MyApp").controller("ListCtrl", ListCtrl);
})();
