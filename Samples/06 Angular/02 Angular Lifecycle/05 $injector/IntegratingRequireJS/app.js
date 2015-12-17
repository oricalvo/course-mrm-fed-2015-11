(function () {

    angular.module("MyApp", ["ngMaterial"]).run(function ($http) {
        window.$http = $http;
    });

})();

