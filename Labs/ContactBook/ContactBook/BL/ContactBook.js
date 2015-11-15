define(["./Group"], function (Group) {
    "use strict";

    function ContactBook() {
        this.root = new Group("~");
    }

    ContactBook.prototype.dump = function () {
        this.root.dump();
    }

    return ContactBook;
});