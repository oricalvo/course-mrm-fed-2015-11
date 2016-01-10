angular.module("MyApp", []).run(function ($parse) {
    var expr = "a.b.c";

    var getter = $parse(expr);
    var setter = getter.assign;

    var obj = {};
    setter(obj, 8);

    console.log(obj);
});

