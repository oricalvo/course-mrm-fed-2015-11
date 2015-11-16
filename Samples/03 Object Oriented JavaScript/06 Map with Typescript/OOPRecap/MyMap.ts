class MyMap {
    data: any;

    constructor() {
        this.data = {};
    }

    add(key, value) {
        this.data[key] = value;
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key): any {
        return this.data[key];
    }
}
