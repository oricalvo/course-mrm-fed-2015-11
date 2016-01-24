(function () {
    function AppComponent($scope, $timeout, boardService) {
        var me = this;

        me.$timeout = $timeout;
        me.boardService = boardService;

        $scope.$on("gameEnded", function (e, winner) {
            me.onGameEnded(winner);
        });
    }

    AppComponent.prototype.newGame = function () {
        this.boardService.newGame();
    }

    AppComponent.prototype.onGameEnded = function (winner) {
        this.$timeout(function () {
            alert("The winner is: " + winner);
        }, 0);
    }

    angular.module("MyApp").directive("app", function () {
        var ddo = {
            templateUrl: "/components/App.html",
            controller: AppComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
            }
        };

        return ddo;
    });
})();
