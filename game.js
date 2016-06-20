var request = require('request');
var Glossary = require('./glossary');
var Bot = require('./bot');

class Game {

    constructor(token, gameJson) {
        this._game = gameJson;
        this._token = token;
        this._glossary = new Glossary(this.lang);
    }

    load() {
        const self = this;
        request.post({
            url: 'http://listen.wordonhd.com/listen', form: {
                authToken: this.authToken,
                sid: '9',
                gid: this._game.id,
                cycle: parseInt(this._game.cycle) + 1,
                newchats: '0'
            }
        }, (err, response, body) => {
            if (err) {
                console.log('error loading game');
                return;
            }
            var json = JSON.parse(body);

            Object.assign(self._game, json.game);
            Bot.overviewId = json.overviewId;
            self.handle();
        });
    }


    get isMyTurn() {
        if (!this._game.otherId || !this._game.yourId)
            return false;
        return this._game.turnUserId == this._game.yourId && this._game.state == '1';
    }

    handle() {
        if (!this.isMyTurn)
            return;

        var wordons = this._game.yourWordons.split('!').join('').split(',');
        var letters = this._game.yourLetters.replace('!', '').split(',');
        var grid = this._game.yourGrid.split(',');

        this._matches = this._glossary.match(letters, wordons, grid);
        if (this._matches.length == 0) {
            this.passTurn();
        } else {
            this.playWord(this._matches.pop());
        }
    }

    update(overview) {
        Object.assign(this._game, overview); //update game info
        this.extractWordons();
        this.handle();
    }


    playWord(word) {

        const self = this;
        var bestWord = word.match.split('').join(',');
        var postWord = [];
        for (var i = 0; i < word.match.length; i++) {
            postWord.push(word.mask[i] + word.match.charAt(i));
        }
        postWord = postWord.join(',');
        request.post({
            url: 'http://game.wordonhd.com/game/play', form: {
                authToken: this.authToken,
                word: postWord,
                bestWord: bestWord,
                gameId: this._game.id,
                newchats: '0'
            }
        }, (err, response, body) => {
            if (err) {
                console.log('error posting word');
                return;
            }

            var json = JSON.parse(body);
            if (json.result == ':(')
                return;
            Bot.overviewId = json.overviewId;
            Object.assign(self._game, json.game);
            console.log("Played '" + word.match + "' for " + word.score + " points against " + self._game.otherName);
            self.checkGameOver();
        });
    }

    passTurn() {
        const self = this;
        request.post({
            url: 'http://game.wordonhd.com/game/swap', form: {
                authToken: this.authToken,
                gameId: this._game.id
            }
        }, (err, response, body) => {
            if (err) {
                console.log('error passing game');
                return;
            }
            var json = JSON.parse(body);
            if (json.result == ':(')
                return;
            Bot.overviewId = json.overviewId;
            console.log('Passed turn against ' + self._game.otherName);
            Object.assign(self._game, json.game);
            self.checkGameOver();
        });
    }

    extractWordons() {
        var lastWord = this._game.lastWord.split('!').join('').split('#').join('').split('^').join('').split(',');
        var lastGrid = this._game.otherGrid.split(',');
        var wordons = [];
        for (var i = 0; i < lastWord.length; i++) {
            if (lastGrid[i] == 3) {
                wordons.push('!' + lastWord[i]);
            }
        }
        this._game.yourWordons = wordons.join(',');
    }

    checkGameOver() {
        if (this._game.state != '1') {
            console.log((this._game.yourScore > this._game.otherScore ? 'Won' : 'Lost') + ' game against ' + this._game.otherName + '(' + this._game.yourScore + ' vs ' + this._game.otherScore + ')');
        }
    }

    get authToken() {
        return this._token;
    }

    get lang() {
        return this._game.dictionaryId;
    }

    get id() {
        return this._game.id;
    }

}

module.exports = Game;