define(["app"], function (app) {

    function HomeCtrl($scope) {
        $scope.message = "ABC";
    }

    app.controller("HomeCtrl", HomeCtrl);

});
