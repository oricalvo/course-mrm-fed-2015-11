module MyApp {

    export class Point {
        constructor(private x: number, private y: number) {
        }

        dump() {
            console.log(this.x + ", " + this.y);
        }
    }

    export class PointEx extends Point {
        z: number;

        constructor(x: number, y: number, z: number) {
            super(x, y);

            this.z = z;

            setTimeout(() => {
                alert(this.z + "122");
            }, 1000);
        }

        dump() {
            super.dump();

            console.log(this.z);
        }
    }

}

var pt = new MyApp.PointEx(5, 10, 20);
pt.dump();