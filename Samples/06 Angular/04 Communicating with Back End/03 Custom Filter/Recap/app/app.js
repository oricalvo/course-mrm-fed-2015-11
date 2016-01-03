angular.module("MyApp", [])
    .value("dateFormat", "dd/MM/yyyy")
    .run(function ($rootScope, dateFormat) {
        $rootScope.dateFormat = dateFormat;
    })
    .filter("mydate", function (dateFormat, $filter) {
        var dateFilter = $filter("date");

        return function (date) {
            return dateFilter(date, dateFormat);
        }
    });

