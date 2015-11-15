function Counter() {

    var value = 0;

    function dec() {
        --value;
    }

    function inc() {
        ++value;
    }

    function get() {
        return value;
    }

    function dump() {
        console.log(value);
    }

    return {
        inc: inc,
        dec: dec,
        get: get,
        dump: dump,
    };

}

