angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl: "/app/List.html",
            controller: "ListCtrl",
        })
        .state('list.details', {
            url: "/details/:id",
            templateUrl: "/app/ContactDetails.html",
            controller: "ContactDetailsCtrl",
        })
        .state('about', {
            url: "/about",
            templateUrl: "/app/About.html",
            controller: "AboutCtrl",
        });

    $urlRouterProvider.otherwise("/list");
});
