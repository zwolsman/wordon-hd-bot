var request = require('request');
var md5 = require('md5');

var utils = require('./utils');
var Game = require('./game');
class Bot {

    get screenIds() {
        return {
            overview: 4,
            game: -1
        };
    };

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.overviewId = '0';
        this._games = [];
    }


    set password(password) {
        this._password = this.hash(password);
    }

    get password() {
        return this._password;
    }

    set username(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    get authToken() {
        return this._user.authToken;
    }

    get displayName() {
        return this._user.name;
    }

    static set overviewId(overviewId) {
        this._overviewId = overviewId;
    }

    static get overviewId() {
        return this._overviewId;
    }

    hash(string, salt) {
        if (salt === undefined)
            salt = 'ohf87ewyr87wfhj';
        string = string + salt;
        return md5(string)
    }

    login() {
        var self = this;
        request.post({
            url: 'http://game.wordonhd.com/account/login', form: {
                username: this.username,
                password: this.password,
                locale: 'nl',
                deviceId: 'Android Linux',
                deviceToken: utils.randomString(183, '-_'),
                country: 'nl-NL',
                version: '1.88'
            }
        }, (err, response, body) => {
            if (err || response.statusCode != 200) {
                console.log('error');
                console.log(err);
                return;
            }
            var json = JSON.parse(body);
            if (json.result != ':)') {
                console.log('invalid login!');
                return;
            }
            self._user = json.user;

            console.log('logged in as ' + self.displayName);
            self.handle(json);
            self.resume();
        })

    }

    listen() {
        const self = this;
        try {
            request.post({
                url: 'http://listen.wordonhd.com/listen', form: {
                    authToken: this.authToken,
                    overviewId: this.overviewId,
                    screenId: self.screenIds.overview
                }
            }, (err, response, body) => {
                if (!err) {
                    try {
                        self.handle(JSON.parse(body));
                    } catch (e) {

                    }
                }
                self.listen();
            });
        } catch (e) {
            this.listen();
        }
    }


    handle(json) {
        if (json === undefined)
            return;
        if (json.overviewId) {
            this.overviewId = json.overviewId;
        }
        const self = this;
        if (json.invitesPending) {
            json.invitesPending.forEach((inv) => {
                self.acceptInvite(inv);
            });
        }
        if (json.invite) {
            this.acceptInvite(json.invite);
        }
        if (json.gameList) {
            json.gameList.forEach((game) => {
                var game = new Game(self.authToken, game);
                game.load();
                self._games.push(game);
            });
        }

        if (json.gameOverview) {
            self._games.forEach((game) => {
                if (game.id == json.gameOverview.id) {
                    game.update(json.gameOverview);
                }
            });
        }
    }


    resume() {
        const self = this;
        request.post({
            url: 'http://game.wordonhd.com/game/resume', form: {
                authToken: this.authToken,
                timestamp: '0'
            }
        }, (err, response, body) => {
            if (err) {
                console.log('Error resuming');
                return;
            }
            self.handle(JSON.parse(body));
            self.listen();
        });
    }

    acceptInvite(inv) {
        request.post({
            url: 'http://game.wordonhd.com/game/invitation', form: {
                gameInviteId: inv.id || inv.invId,
                action: 'accept',
                authToken: this.authToken,
                tilesetId: '0'
            }
        }, (err, response, body) => {
            if (err) {
                console.log('Error accepting invite');
                return;
            }
            var json = JSON.parse(body);

            if (json.result == ':(')
                return;
            console.log('Accepted invite from ' + (inv.displayname || inv.name) + ', lang: ' + (inv.dictionaryId || inv.dictId));
        });
    }
}

module.exports = Bot;