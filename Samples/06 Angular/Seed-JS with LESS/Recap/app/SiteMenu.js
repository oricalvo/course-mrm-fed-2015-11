var app = require("./app");

(function () {
    function SiteMenu() {
    }

    app.component({
        tagName: "siteMenu",
        controller: SiteMenu,
        template: require("./SiteMenu.html!text"),
        styles: require("./SiteMenu.css!"),
    });
})();
