function BoardServiceFactory(Board, $rootScope) {
    function BoardService() {
        this.current = new Board();
    }

    BoardService.prototype.newGame = function () {
        this.current = new Board();

        $rootScope.$broadcast("newGame");
    }

    return new BoardService();
}

angular.module("MyApp").service("boardService", BoardServiceFactory);

