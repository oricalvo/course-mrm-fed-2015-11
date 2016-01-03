angular.module("MyApp", [])
    .value("dateFormat", "dd/MM/yy")
    .run(function ($rootScope, dateFormat) {
        $rootScope.dateFormat = dateFormat;
    });

