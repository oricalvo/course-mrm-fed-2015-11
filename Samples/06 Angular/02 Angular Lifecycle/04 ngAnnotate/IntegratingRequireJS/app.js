(function () {

    angular.module("MyApp", []).run(function ($http) {
        window.$http = $http;
    });

})();

