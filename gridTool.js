class GridTool {
    constructor(grid) {
        this._multipliers = new Array(grid.length);
        this._bonus = new Array(grid.length);
        this._used = new Array(grid.length);
        for (var i = 0; i < grid.length; i++) {
            this.used[i] = 0;
            if (grid[i] == 1) { //2x letter
                this._multipliers[i] = 2;
            } else if (grid[i] == 2) { //3x letter
                this._multipliers[i] = 3;
            } else { //nothing
                this._multipliers[i] = 1;
            }

            if (grid[i] == 4) {
                this._bonus[i] = 10;
            } else {
                this._bonus[i] = 0;
            }
        }
    }

    get multipliers() {
        return this._multipliers;
    }

    get bonuses() {
        return this._bonus;
    }

    get used() {
        return this._used;
    }

    reset() {
        this._used.fill(0);
    }
}

module.exports = GridTool;