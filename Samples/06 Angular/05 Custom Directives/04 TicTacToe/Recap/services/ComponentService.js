(function () {

    function ComponentServiceFactory($parse) {

        function injectToParent(child, childScope, childAttrs) {
            if (childAttrs.name) {
                var expr = childAttrs.name;
                var getter = $parse(expr);
                var setter = getter.assign;
                if (setter) {
                    setter(childScope.$parent, child);
                }
            }
        }

        return {
            injectToParent: injectToParent,
        };
    }

    angular.module("MyApp").factory("componentService", ComponentServiceFactory);

})();
