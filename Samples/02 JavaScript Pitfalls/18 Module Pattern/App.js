/// <reference path="Network.js" />
/// <reference path="Storage.js" />

(function (Network, Storage, $) {
    Network.get();

    Storage.save();

})(MyApp.Network, MyApp.Storage, jQuery);
