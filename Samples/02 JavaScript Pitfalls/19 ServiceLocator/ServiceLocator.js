var ServiceLocator = (function () {
    "use strict";

    var services = {};

    function register(name, service) {
        if (services[name]) {
            throw new Error("Service with name " + name + " already exists");
        }

        services[name] = service;
    }

    function resolve(name) {
        var service = services[name];
        if (!service) {
            throw new Error("Service with name " + name + " was not found");
        }

        return service;
    }

    return {
        register: register,
        resolve: resolve,
    };
})();