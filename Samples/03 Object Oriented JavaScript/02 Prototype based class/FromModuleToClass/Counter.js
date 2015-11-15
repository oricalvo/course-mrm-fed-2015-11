var Counter = (function () {

    function Counter() {
        this.value = 0;
    }

    Counter.prototype.inc = function () {
        ++this.value;
    }

    Counter.prototype.dec = function () {
        --this.value;
    }

    Counter.prototype.get = function () {
        return this.value;
    }

    Counter.prototype.dump = function () {
        console.log(this.value);
    }

    return Counter;

})();