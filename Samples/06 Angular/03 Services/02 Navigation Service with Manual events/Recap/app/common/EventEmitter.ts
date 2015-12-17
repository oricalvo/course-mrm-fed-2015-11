class EventEmitter<ArgsT> {
    listeners: IEventListener<ArgsT>[];

    constructor() {
        this.listeners = [];
    }

    register(obj, method: (args: ArgsT) => void) {
        this.listeners.push({
            obj: obj,
            method: method,
        });
    }

    unregister(obj, method) {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];

            if (listener.obj == obj && listener.method == method) {
                this.listeners.splice(i, 1);
                return;
            }
        }
    }

    raise(args: ArgsT) {
        this.listeners.forEach(listener => {
            listener.method.apply(listener.obj, [args]);
        });
    }
}

interface IEventListener<ArgsT> {
    obj: any;
    method: (args: ArgsT) => void;
}

