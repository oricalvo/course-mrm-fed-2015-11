/// <reference path="jquery.js" />

(function ($) {

    var nextId = 0;

    var users = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
        { id: 3, name: "Udi" },
    ];

    var ul = $("ul.users-list");

    $(".button-add").click(function () {
        var name = $(".input-name").val();

        var user = {
            id: --nextId,
            name: name
        };

        users.push(user);

        updateUI();
    });

    $(".checkbox-show-extra").click(function () {
        $(".extra").toggleClass("disabled");
    });

    function init() {
        updateUI();
    }

    function updateUI() {
        ul.empty();

        users.forEach(function (user) {
            var li = $("<li />");
            li.text(user.name);
            ul.append(li);
        });
    }

    $(function () {
        init();
    });

})(jQuery);
