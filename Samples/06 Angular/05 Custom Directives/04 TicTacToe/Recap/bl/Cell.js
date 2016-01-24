function CellFactory() {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
        this.value = null;
    }

    return Cell;
}

angular.module("MyApp").factory("Cell", CellFactory);
