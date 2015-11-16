var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyApp;
(function (MyApp) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.dump = function () {
            console.log(this.x + ", " + this.y);
        };
        return Point;
    })();
    MyApp.Point = Point;
    var PointEx = (function (_super) {
        __extends(PointEx, _super);
        function PointEx(x, y, z) {
            var _this = this;
            _super.call(this, x, y);
            this.z = z;
            setTimeout(function () {
                alert(_this.z + "122");
            }, 1000);
        }
        PointEx.prototype.dump = function () {
            _super.prototype.dump.call(this);
            console.log(this.z);
        };
        return PointEx;
    })(Point);
    MyApp.PointEx = PointEx;
})(MyApp || (MyApp = {}));
var pt = new MyApp.PointEx(5, 10, 20);
pt.dump();
//# sourceMappingURL=Points.js.map