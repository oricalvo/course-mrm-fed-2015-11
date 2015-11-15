var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dump = function () {
    };
    return Point;
})();
var pt = new Point(5, 10);
pt.dump();
