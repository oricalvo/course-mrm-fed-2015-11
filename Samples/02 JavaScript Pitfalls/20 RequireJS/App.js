define(["ServiceLocator"], function (ServiceLocator) {

    var logger = {
        debug: function () {
        },
        error: function () {
        }
    };

    ServiceLocator.register("logger", logger);

    var logger2 = ServiceLocator.resolve("logger");

    console.log(logger2 == logger);
});