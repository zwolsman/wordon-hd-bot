var fs = require('fs');
var Matcher = require('./matcher');
var LetterDictionary = require('./letterDictionary');
var ScoreSolver = require('./scoreSolver');

class Glossary {

    constructor(lang) {

        const blobFilePath = 'lang/' + lang + '3.blob';
        const langFilePath = 'lang/' + lang + '3.lang';

        try {
            fs.accessSync(langFilePath, fs.R_OK);
            fs.accessSync(blobFilePath, fs.R_OK)
        } catch (e) {
            console.log(lang + " does not exist");
            return;
        }

        this._langFile = fs.readFileSync(langFilePath).toString().split('\n');
        this._blobFile = fs.readFileSync(blobFilePath);

        this._dictionary = new LetterDictionary(lang);
        this._matcher = new Matcher(this._langFile, this._blobFile, new LetterDictionary(lang));
        this._scoreSolver = new ScoreSolver(new LetterDictionary(lang));
    }

    getBlobFile() {
        return this._blobFile;
    }

    getLangFile() {
        return this._langFile;
    }

    match(symbols, wordons, grid) {
        symbols = symbols.filter((x) => x != '');
        wordons = wordons.filter((x) => x != '');
        var matches = this._matcher.match(symbols.concat(wordons), this._dictionary);
        var scores = this._scoreSolver.findOptimalScore(matches, symbols, wordons, grid);
        return scores;
    }
}

module.exports = Glossary;