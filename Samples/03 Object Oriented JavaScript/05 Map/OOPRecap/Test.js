/// <reference path="MyMap.js" />

(function () {

    var map = new MyMap();

    var ori = {name: "Ori"};
    var roni = { name: "Roni" };
    var udi = { name: "Udi" };

    map.add(ori, roni);
    map.add(udi, udi);

    var res = map.get(ori);

    console.log(res == roni);

})();
