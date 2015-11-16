function main() {
    var map = new MyMap();

    var ori = { name: "Ori" };
    var roni = { name: "Roni" };

    map.add(ori, roni);

    var res = map.get(ori);

    console.log(res == roni);
}

main();

