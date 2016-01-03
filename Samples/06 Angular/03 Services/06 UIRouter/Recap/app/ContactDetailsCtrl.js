(function () {
    function ContactDetailsCtrl($scope, $stateParams, contactService) {
        if (!$stateParams.id) {
            throw new Error("$stateParams.id is missing");
        }

        var contactId = $stateParams.id;
        $scope.contact = contactService.getById(contactId);
    }

    angular.module("MyApp").controller("ContactDetailsCtrl", ContactDetailsCtrl);
})();
