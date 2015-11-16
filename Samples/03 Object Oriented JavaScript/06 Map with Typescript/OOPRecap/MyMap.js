var MyMap = (function () {
    function MyMap() {
        this.data = {};
    }
    MyMap.prototype.add = function (key, value) {
        this.data[key] = value;
    };
    MyMap.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    MyMap.prototype.get = function (key) {
        return this.data[key];
    };
    return MyMap;
})();
//# sourceMappingURL=MyMap.js.map