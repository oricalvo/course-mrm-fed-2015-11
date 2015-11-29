define(["BL/ContactBook", "BL/Group", "BL/Contact"], function (
    ContactBook,
    Group,
    Contact) {

    "use strict";

    var book = new ContactBook();

    var friends = new Group("Friends");
    book.root.addItem(friends);

    var roni = new Contact("Roni", "roni@gmail.com");
    friends.addItem(roni);

    var ori = new Contact("Ori", "ori@gmail.com");
    book.root.addItem(ori);

    book.dump();
});

