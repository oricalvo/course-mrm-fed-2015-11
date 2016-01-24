(function () {
    function BoardComponent($scope, $attrs, $rootScope, boardService) {
        var me = this;

        me.board = boardService.current;

        $rootScope.$on("newGame", function () {
            me.board = boardService.current;
        });
    }

    BoardComponent.prototype.cellClicked = function (cell) {
        if (!this.board.step(cell)) {
            return;
        }
    }

    angular.module("MyApp").directive("board", function () {
        var ddo = {
            templateUrl: "/components/Board.html",
            controller: BoardComponent,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
            }
        };

        return ddo;
    });
})();
