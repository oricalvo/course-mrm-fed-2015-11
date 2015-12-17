angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/app/Home.html",
            controller: "HomeCtrl as ctrl",
        })
        .state('home.admin', {
            url: "/admin",
            templateUrl: "/app/Admin.html",
            controller: "AdminCtrl as ctrl",
        })
        .state('contact-edit', {
            url: "/contact/edit/:id",
            templateUrl: "/app/ContactEdit.html",
            controller: "ContactEditCtrl as ctrl",
        })
        .state('about', {
            url: "/about",
            templateUrl: "/app/About.html",
            controller: "AboutCtrl as ctrl",
        });

    $urlRouterProvider.otherwise("/home");
});
