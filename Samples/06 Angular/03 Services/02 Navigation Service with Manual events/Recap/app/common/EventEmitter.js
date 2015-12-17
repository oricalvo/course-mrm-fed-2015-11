var EventEmitter = (function () {
    function EventEmitter() {
        this.listeners = [];
    }
    EventEmitter.prototype.register = function (obj, method) {
        this.listeners.push({
            obj: obj,
            method: method,
        });
    };
    EventEmitter.prototype.unregister = function (obj, method) {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            if (listener.obj == obj && listener.method == method) {
                this.listeners.splice(i, 1);
                return;
            }
        }
    };
    EventEmitter.prototype.raise = function (args) {
        this.listeners.forEach(function (listener) {
            listener.method.apply(listener.obj, [args]);
        });
    };
    return EventEmitter;
})();
//# sourceMappingURL=EventEmitter.js.map