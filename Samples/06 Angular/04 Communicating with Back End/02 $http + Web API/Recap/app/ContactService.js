﻿(function () {

    function ContactService($http, $q) {

        function fixResponse(res) {
            var contacts = res.data;

            contacts.forEach(function (contact) {
                contact.birthday = new Date(contact.birthday);
            });

            return contacts;
        }

        function delay(timeout) {
            return function (data) {
                var deferred = $q.defer();

                setTimeout(function () {
                    deferred.resolve(data);
                }, timeout);

                return deferred.promise;
            };
        }

        function getAll() {
            return $http.get("/api/contact").then(fixResponse);
        }

        return {
            getAll: getAll,
        };
    }

    angular.module("MyApp").factory("contactService", ContactService);

})();
