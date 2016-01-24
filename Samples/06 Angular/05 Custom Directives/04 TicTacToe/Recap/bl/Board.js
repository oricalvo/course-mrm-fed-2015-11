function BoardFactory(Cell, $rootScope) {
    function Board() {
        this.player = "X";
        this.rows = [];
        this.winner = null;
        this.$rootScope = $rootScope;

        for (var y = 0; y < 3; y++) {
            var row = {
                cells: []
            };
            this.rows.push(row);

            for (var x = 0; x < 3; x++) {
                row.cells.push(new Cell(x, y));
            }
        }
    }

    Board.prototype.step = function (cell) {
        if (cell.value) {
            return;
        }

        cell.value = this.player;
        this.player = (this.player == "X" ? "O" : "X");

        this.winner = this.checkWinner();
        if (!!this.winner) {
            this.$rootScope.$broadcast("gameEnded", this.winner);
        }
    }

    Board.prototype.checkWinner = function () {
        var options = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        var winner = null;

        for (var i = 0; i < options.length; i++) {
            var option = options[i];

            var cell = this.getCellByIndex(option[0]);
            var player = cell.value;
            if (player) {
                var winnerFound = true;

                for (var j = 1; j < 3; j++) {
                    if (player != this.getCellByIndex(option[j]).value) {
                        winnerFound = false;

                        break;
                    }
                }

                if (winnerFound) {
                    winner = player;
                    break;
                }
            }
        }

        return winner;
    }

    Board.prototype.getCellByIndex = function (index) {
        var location = this.toXY(index);
        var cell = this.rows[location.y].cells[location.x];

        return cell;
    }

    Board.prototype.toXY = function (index) {
        var x = Math.floor(index % 3);
        var y = Math.floor(index / 3);

        return {
            x: x,
            y: y,
        };
    }

    return Board;
}

angular.module("MyApp").factory("Board", BoardFactory);
