var MyMap = (function () {

    var nextUniqueId = 1;
    var IDENTITY_FIELD = "###myid";

    function MyMap() {
        this.data = {};
    }

    function ensureId(obj) {
        if (!obj.hasOwnProperty(IDENTITY_FIELD)) {
            obj[IDENTITY_FIELD] = ++nextUniqueId;
        }

        var id = obj[IDENTITY_FIELD];
        return id;
    }

    MyMap.prototype.add = function (key, value) {
        var id = ensureId(key);

        if (this.data.hasOwnProperty(id)) {
            throw new Error("Key " + key + " already exists");
        }

        this.data[id] = value;
    }

    MyMap.prototype.set = function (key, value) {
        this.data[ensureId(key)] = value;
    }

    MyMap.prototype.get = function (key) {
        if (!key.hasOwnProperty(IDENTITY_FIELD)) {
            throw new Error("Key " + key + " does not exist");
        }

        var id = key[IDENTITY_FIELD];
        if (!this.data.hasOwnProperty(id)) {
            throw new Error("Key " + key + " does not exist");
        }

        return this.data[id];
    }

    return MyMap;
})();
