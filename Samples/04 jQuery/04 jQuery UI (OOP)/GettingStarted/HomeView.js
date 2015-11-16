var HomeView = (function ($) {

    function HomeView(element) {
        var me = this;

        me.element = element;

        me.ul = me.getElement("ul");
        me.input = me.getElement("input");
        me.buttonAdd = me.getElement(".button-add");
        me.users = [];

        me.buttonAdd.click(function () {
            me.buttonAdd_Click();
        });

        //me.buttonAdd.click($.proxy(me.buttonAdd_Click, me));

        //me.buttonAdd.click(me.buttonAdd_Click.bind(me));
    }

    HomeView.prototype.getElement = function (selector) {
        var res = this.element.find(selector);
        if (!res.length) {
            throw new Error("Element with selector: " + selector + " was not found");
        }

        return res;
    }

    HomeView.prototype.bind = function (users) {
        this.users = users;

        this.updateUI();
    }

    HomeView.prototype.updateUI = function () {
        var me = this;

        me.ul.empty();

        me.users.forEach(function (user) {
            var li = $("<li />");
            li.text(user.name);
            me.ul.append(li);
        });
    }

    HomeView.prototype.buttonAdd_Click = function () {
        var name = this.input.val();
        if (!name) {
            alert("Please specify a name");

            return;
        }

        var user = {
            name: name,
        };

        this.users.push(user);
        
        this.updateUI();
    }

    return HomeView;
})(jQuery);
