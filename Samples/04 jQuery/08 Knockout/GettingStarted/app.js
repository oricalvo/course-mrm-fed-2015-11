/// <reference path="jquery.js" />

(function ($) {

    var users = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
        { id: 3, name: "Udi" },
    ];


    //$("li button").click(function () {
    //});

    //$("span").bind("click", function () {
    //});

    //$("span").blur(function () {
    //});

    $(function () {
        var ul = $("ul");
        var li;

        for (var i = 0; i < users.length; i++) {
            var user = users[i];

            var li = $("<li />");
            li.appendTo(ul);
            li.text(user.name);

            var button = $("<button>Delete</button>");
            li.append(button);
            //button.click(function () {
            //    $(this).closest("li").remove();
            //});
        }

        ul.delegate("button", "click", function () {
            $(this).closest("li").remove();
            //alert("CLICKED");
        });

        //ul.click(function (e) {
        //    alert(e.target.nodeName);

        //    //alert("CLICKED");
        //});

        //users.forEach(function (user) {
        //});
    });

})(jQuery);
