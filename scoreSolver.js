var GridTool = require('./gridTool');

class ScoreSolver {
    constructor(dictionary) {
        this._dictionary = dictionary;
    }

    findOptimalScore(matches, letters, wordons, grid) {
        var letterIndices = this._dictionary.getIndices(letters);
        var wordonsIndices = this._dictionary.getIndices(wordons);
        var gridTool = new GridTool(grid);

        var self = this;
        var scores = [];
        matches.forEach((match) => {
            gridTool.reset();

            scores.push(self.checkScore(match, letterIndices, wordonsIndices, gridTool));
        });
        scores.sort((left, right) => {
            return left.score - right.score;
        });
        return scores;
    }

    checkScore(match, letterIndices, wordonsIndices, gridTool) {
        var lettersUsed = new Array(letterIndices.length);
        var wordonsUsed = new Array(wordonsIndices.length);
        var mask = new Array(7);
        mask.fill('');
        if (match.length == 0)
            return -1;

        var values = this._dictionary.values;
        var indices = this._dictionary.getIndices(match.split(''));

        var score = 0;
        for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            if (index == -1)
                return -1;
            score += values[index] * gridTool.multipliers[i];
            score += gridTool.bonuses[i];
        }

        var scoreDoubled = score * 2;
        if (scoreDoubled <= score)
            return score;

        var usedWordons = true;

        for (var i = 0; i < wordonsIndices.length; i++) {
            var index = wordonsIndices[i];

            if (index == -1)
                continue;

            var foundWordon = false;
            for (var j = 0; j < indices.length; j++) {
                if (indices[j] == index && gridTool.used[j] != 1) {
                    gridTool.used[j] = 1;
                    mask[j] = '!';
                    foundWordon = true;
                    break;
                }
            }
            if (!foundWordon) {
                usedWordons = false;
                score -= values[index];
            }
        }

        if (usedWordons) {
            score = score * 2;
        }
        //check if score is less than the highest already


        for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            var symbol = this.findSymbol(index, wordonsIndices, wordonsUsed);

            if (symbol == -1) {
                symbol = this.findSymbol(index, letterIndices, lettersUsed);
                if (symbol == -1) {
                    symbol = this.findSymbol(-1, wordonsIndices, wordonsUsed);
                    var lowestSymbol = this.findLowestScoringSymbol(indices, index, gridTool);
                    if (symbol != -1) {
                        wordonsUsed[symbol] = 1;
                        gridTool.used[lowestSymbol] = 1;
                        mask[lowestSymbol] = '^';
                    } else {
                        mask[lowestSymbol] = '#';
                    }

                    score -= values[index] * gridTool.multipliers[lowestSymbol];
                } else {
                    lettersUsed[symbol] = 1;
                }
            } else {
                wordonsUsed[symbol] = 1;
            }
        }

        var scoreBackup = score;

        for (var i = 0; i < wordonsIndices.length; i++) {
            var symbol = this.findSymbol(-1, wordonsIndices, wordonsUsed);
            if (symbol != -1) {
                var lowestSymbol = this.findLowestScoringSymbol(indices, -1, gridTool);
                if (lowestSymbol != -1) {
                    wordonsUsed[symbol] = 1;
                    mask[lowestSymbol] = '^';
                    scoreBackup -= values[indices[lowestSymbol]] * gridTool.multipliers[lowestSymbol];
                    continue;
                }
                return 0;
            }
            break;
        }

        score = score > scoreBackup ? score : scoreBackup;
        return {score, mask, match};
    }

    findSymbol(value, indices, used) {
        for (var i = 0; i <= indices.length; i++) {
            if (indices[i] == value && used[i] != 1) {
                return i;
            }
        }
        return -1;
    }

    findLowestScoringSymbol(indices, currnetIndex, gridTool) {

        var highest = Number.MAX_VALUE;
        var foundIndex = 0;
        for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            if (index == currnetIndex || currnetIndex == -1) {
                var indexValue = this._dictionary.values[index];
                if (gridTool.used[i] != 1) {
                    var score = indexValue * gridTool.multipliers[i];
                    if (score < highest) {
                        highest = score;
                        foundIndex = i;
                    }
                }
            }
        }

        return foundIndex;
    }
}

module.exports = ScoreSolver;