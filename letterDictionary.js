class LetterDictionary {

    constructor(lang) {
        this._map = {};

        this.setValue("nl", "A", 1);
        this.setValue("nl", "B", 3);
        this.setValue("nl", "C", 5);
        this.setValue("nl", "D", 2);
        this.setValue("nl", "E", 1);
        this.setValue("nl", "F", 4);
        this.setValue("nl", "G", 3);
        this.setValue("nl", "H", 4);
        this.setValue("nl", "I", 1);
        this.setValue("nl", "J", 4);
        this.setValue("nl", "K", 3);
        this.setValue("nl", "L", 3);
        this.setValue("nl", "M", 3);
        this.setValue("nl", "N", 1);
        this.setValue("nl", "O", 1);
        this.setValue("nl", "P", 3);
        this.setValue("nl", "Q", 10);
        this.setValue("nl", "R", 2);
        this.setValue("nl", "S", 2);
        this.setValue("nl", "T", 2);
        this.setValue("nl", "U", 4);
        this.setValue("nl", "V", 4);
        this.setValue("nl", "W", 5);
        this.setValue("nl", "X", 8);
        this.setValue("nl", "Y", 8);
        this.setValue("nl", "Z", 4);
        this.setValue("nl", this.wildCard, 0);

        //en - English
        this.setValue("en", "A", 1);
        this.setValue("en", "B", 3);
        this.setValue("en", "C", 3);
        this.setValue("en", "D", 2);
        this.setValue("en", "E", 1);
        this.setValue("en", "F", 4);
        this.setValue("en", "G", 2);
        this.setValue("en", "H", 4);
        this.setValue("en", "I", 1);
        this.setValue("en", "J", 8);
        this.setValue("en", "K", 5);
        this.setValue("en", "L", 1);
        this.setValue("en", "M", 3);
        this.setValue("en", "N", 1);
        this.setValue("en", "O", 1);
        this.setValue("en", "P", 3);
        this.setValue("en", "Q", 10);
        this.setValue("en", "R", 1);
        this.setValue("en", "S", 1);
        this.setValue("en", "T", 1);
        this.setValue("en", "U", 1);
        this.setValue("en", "V", 4);
        this.setValue("en", "W", 4);
        this.setValue("en", "X", 8);
        this.setValue("en", "Y", 4);
        this.setValue("en", "Z", 10);
        this.setValue("en", this.wildCard, 0);

        //de - German
        this.setValue("de", "A", 1);
        this.setValue("de", "Ä", 6);
        this.setValue("de", "B", 3);
        this.setValue("de", "C", 4);
        this.setValue("de", "D", 1);
        this.setValue("de", "E", 1);
        this.setValue("de", "F", 4);
        this.setValue("de", "G", 2);
        this.setValue("de", "H", 2);
        this.setValue("de", "I", 1);
        this.setValue("de", "J", 6);
        this.setValue("de", "K", 4);
        this.setValue("de", "L", 2);
        this.setValue("de", "M", 3);
        this.setValue("de", "N", 1);
        this.setValue("de", "O", 2);
        this.setValue("de", "Ö", 8);
        this.setValue("de", "P", 4);
        this.setValue("de", "Q", 10);
        this.setValue("de", "R", 1);
        this.setValue("de", "S", 1);
        this.setValue("de", "T", 1);
        this.setValue("de", "U", 1);
        this.setValue("de", "Ü", 6);
        this.setValue("de", "V", 6);
        this.setValue("de", "W", 3);
        this.setValue("de", "X", 8);
        this.setValue("de", "Y", 10);
        this.setValue("de", "Z", 3);
        this.setValue("de", this.wildCard, 0);

        //fr - French
        this.setValue("fr", "A", 1);
        this.setValue("fr", "B", 3);
        this.setValue("fr", "C", 3);
        this.setValue("fr", "D", 2);
        this.setValue("fr", "E", 1);
        this.setValue("fr", "F", 4);
        this.setValue("fr", "G", 2);
        this.setValue("fr", "H", 4);
        this.setValue("fr", "I", 1);
        this.setValue("fr", "J", 8);
        this.setValue("fr", "K", 10);
        this.setValue("fr", "L", 1);
        this.setValue("fr", "M", 2);
        this.setValue("fr", "N", 1);
        this.setValue("fr", "O", 1);
        this.setValue("fr", "P", 3);
        this.setValue("fr", "Q", 8);
        this.setValue("fr", "R", 1);
        this.setValue("fr", "S", 1);
        this.setValue("fr", "T", 1);
        this.setValue("fr", "U", 1);
        this.setValue("fr", "V", 4);
        this.setValue("fr", "W", 10);
        this.setValue("fr", "X", 10);
        this.setValue("fr", "Y", 10);
        this.setValue("fr", "Z", 10);
        this.setValue("fr", this.wildCard, 0);

        //es - Spanish
        this.setValue("es", "A", 1);
        this.setValue("es", "B", 3);
        this.setValue("es", "C", 3);
        this.setValue("es", "CH", 5);
        this.setValue("es", "D", 2);
        this.setValue("es", "E", 1);
        this.setValue("es", "F", 4);
        this.setValue("es", "G", 2);
        this.setValue("es", "H", 4);
        this.setValue("es", "I", 1);
        this.setValue("es", "J", 8);
        this.setValue("es", "L", 1);
        this.setValue("es", "LL", 8);
        this.setValue("es", "M", 3);
        this.setValue("es", "N", 1);
        this.setValue("es", "Ñ", 8);
        this.setValue("es", "O", 1);
        this.setValue("es", "P", 3);
        this.setValue("es", "Q", 5);
        this.setValue("es", "R", 1);
        this.setValue("es", "RR", 8);
        this.setValue("es", "S", 1);
        this.setValue("es", "T", 1);
        this.setValue("es", "U", 1);
        this.setValue("es", "V", 4);
        this.setValue("es", "X", 8);
        this.setValue("es", "Y", 4);
        this.setValue("es", "Z", 10);
        this.setValue("es", this.wildCard, 0);

        //it - Italian
        this.setValue("it", "A", 1);
        this.setValue("it", "B", 5);
        this.setValue("it", "C", 2);
        this.setValue("it", "D", 5);
        this.setValue("it", "E", 1);
        this.setValue("it", "F", 5);
        this.setValue("it", "G", 8);
        this.setValue("it", "H", 8);
        this.setValue("it", "I", 1);
        this.setValue("it", "L", 3);
        this.setValue("it", "M", 3);
        this.setValue("it", "N", 3);
        this.setValue("it", "O", 1);
        this.setValue("it", "P", 5);
        this.setValue("it", "Q", 10);
        this.setValue("it", "R", 2);
        this.setValue("it", "S", 2);
        this.setValue("it", "T", 2);
        this.setValue("it", "U", 3);
        this.setValue("it", "V", 5);
        this.setValue("it", "Z", 8);
        this.setValue("it", this.wildCard, 0);

        //sv - Swedish
        this.setValue("sv", "A", 1);
        this.setValue("sv", "Å", 4);
        this.setValue("sv", "Ä", 3);
        this.setValue("sv", "B", 4);
        this.setValue("sv", "C", 8);
        this.setValue("sv", "D", 1);
        this.setValue("sv", "E", 1);
        this.setValue("sv", "F", 3);
        this.setValue("sv", "G", 2);
        this.setValue("sv", "H", 2);
        this.setValue("sv", "I", 1);
        this.setValue("sv", "J", 5);
        this.setValue("sv", "K", 2);
        this.setValue("sv", "L", 1);
        this.setValue("sv", "M", 2);
        this.setValue("sv", "N", 1);
        this.setValue("sv", "O", 2);
        this.setValue("sv", "Ö", 4);
        this.setValue("sv", "P", 4);
        this.setValue("sv", "Q", 0);
        this.setValue("sv", "R", 1);
        this.setValue("sv", "S", 1);
        this.setValue("sv", "T", 1);
        this.setValue("sv", "U", 3);
        this.setValue("sv", "Ü", 0);
        this.setValue("sv", "V", 3);
        this.setValue("sv", "W", 0);
        this.setValue("sv", "X", 8);
        this.setValue("sv", "Y", 7);
        this.setValue("sv", "Z", 8);
        this.setValue("sv", this.wildCard, 0);

        //dk - Danish
        this.setValue("dk", "A", 1);
        this.setValue("dk", "Å", 4);
        this.setValue("dk", "B", 3);
        this.setValue("dk", "C", 8);
        this.setValue("dk", "D", 2);
        this.setValue("dk", "E", 1);
        this.setValue("dk", "Æ", 4);
        this.setValue("dk", "F", 3);
        this.setValue("dk", "G", 3);
        this.setValue("dk", "H", 4);
        this.setValue("dk", "I", 3);
        this.setValue("dk", "J", 4);
        this.setValue("dk", "K", 3);
        this.setValue("dk", "L", 2);
        this.setValue("dk", "M", 3);
        this.setValue("dk", "N", 1);
        this.setValue("dk", "O", 2);
        this.setValue("dk", "Ø", 4);
        this.setValue("dk", "P", 4);
        this.setValue("dk", "Q", 0);
        this.setValue("dk", "R", 1);
        this.setValue("dk", "S", 2);
        this.setValue("dk", "T", 2);
        this.setValue("dk", "U", 3);
        this.setValue("dk", "Ü", 0);
        this.setValue("dk", "V", 3);
        this.setValue("dk", "W", 0);
        this.setValue("dk", "X", 8);
        this.setValue("dk", "Y", 4);
        this.setValue("dk", "Z", 8);
        this.setValue("dk", this.wildCard, 0);

        //no - Norwegian
        this.setValue("no", "A", 1);
        this.setValue("no", "Å", 4);
        this.setValue("no", "B", 4);
        this.setValue("no", "C", 10);
        this.setValue("no", "D", 1);
        this.setValue("no", "E", 1);
        this.setValue("no", "Æ", 6);
        this.setValue("no", "F", 2);
        this.setValue("no", "G", 2);
        this.setValue("no", "H", 3);
        this.setValue("no", "I", 1);
        this.setValue("no", "J", 4);
        this.setValue("no", "K", 2);
        this.setValue("no", "L", 1);
        this.setValue("no", "M", 2);
        this.setValue("no", "N", 1);
        this.setValue("no", "O", 2);
        this.setValue("no", "Ø", 5);
        this.setValue("no", "P", 4);
        this.setValue("no", "Q", 0);
        this.setValue("no", "R", 1);
        this.setValue("no", "S", 2);
        this.setValue("no", "T", 1);
        this.setValue("no", "U", 4);
        this.setValue("no", "Ü", 0);
        this.setValue("no", "V", 4);
        this.setValue("no", "W", 8);
        this.setValue("no", "X", 0);
        this.setValue("no", "Y", 6);
        this.setValue("no", "Z", 0);
        this.setValue("no", this.wildCard, 0);

        //cs - Czech
        this.setValue("cs", "A", 1);
        this.setValue("cs", "Á", 2);
        this.setValue("cs", "B", 3);
        this.setValue("cs", "C", 2);
        this.setValue("cs", "Č", 4);
        this.setValue("cs", "D", 1);
        this.setValue("cs", "Ď", 8);
        this.setValue("cs", "E", 1);
        this.setValue("cs", "É", 3);
        this.setValue("cs", "Ě", 3);
        this.setValue("cs", "F", 5);
        this.setValue("cs", "G", 5);
        this.setValue("cs", "H", 2);
        this.setValue("cs", "I", 1);
        this.setValue("cs", "Í", 2);
        this.setValue("cs", "J", 2);
        this.setValue("cs", "K", 1);
        this.setValue("cs", "L", 1);
        this.setValue("cs", "M", 2);
        this.setValue("cs", "N", 1);
        this.setValue("cs", "Ň", 6);
        this.setValue("cs", "O", 1);
        this.setValue("cs", "Ó", 7);
        this.setValue("cs", "P", 1);
        this.setValue("cs", "R", 1);
        this.setValue("cs", "Ř", 4);
        this.setValue("cs", "S", 1);
        this.setValue("cs", "Š", 4);
        this.setValue("cs", "T", 1);
        this.setValue("cs", "Ť", 7);
        this.setValue("cs", "U", 2);
        this.setValue("cs", "Ů", 4);
        this.setValue("cs", "Ú", 5);
        this.setValue("cs", "V", 1);
        this.setValue("cs", "X", 10);
        this.setValue("cs", "Y", 2);
        this.setValue("cs", "Ý", 4);
        this.setValue("cs", "Z", 2);
        this.setValue("cs", "Ž", 4);
        this.setValue("cs", this.wildCard, 0);

        //tr - Turkish
        this.setValue("tr", "A", 1);
        this.setValue("tr", "E", 1);
        this.setValue("tr", "İ", 1);
        this.setValue("tr", "K", 1);
        this.setValue("tr", "L", 1);
        this.setValue("tr", "R", 1);
        this.setValue("tr", "N", 1);
        this.setValue("tr", "T", 1);
        this.setValue("tr", "I", 2);
        this.setValue("tr", "M", 2);
        this.setValue("tr", "O", 2);
        this.setValue("tr", "S", 2);
        this.setValue("tr", "U", 2);
        this.setValue("tr", "B", 3);
        this.setValue("tr", "D", 3);
        this.setValue("tr", "Y", 3);
        this.setValue("tr", "Ü", 3);
        this.setValue("tr", "C", 4);
        this.setValue("tr", "Ş", 4);
        this.setValue("tr", "Z", 4);
        this.setValue("tr", "Ç", 4);
        this.setValue("tr", "H", 5);
        this.setValue("tr", "P", 5);
        this.setValue("tr", "G", 5);
        this.setValue("tr", "F", 7);
        this.setValue("tr", "V", 7);
        this.setValue("tr", "Ö", 7);
        this.setValue("tr", "Ğ", 8);
        this.setValue("tr", "J", 10);
        this.setValue("tr", this.wildCard, 0);

        this.setLang(lang || 'nl');
    }

    setValue(lang, symbol, value) {
        if (typeof(this._map[lang]) === 'undefined') {
            this._map[lang] = {}
        }

        this._map[lang][symbol] = value;
    }

    setLang(lang) {
        this._lang = lang;
    }

    get symbols() {
        var symbols = Object.keys(this._map[this._lang]);
        symbols.pop(); //remove the wildcard
        return symbols;
    }

    get values() {
        var values = Object.keys(this._map[this._lang]).map(key => this._map[this._lang][key]);
        values.pop(); //remove the wildcard
        return values;
    }

    get wildCard() {
        return "#";
    }

    getIndices(symbols) {
        var indices = [];
        var self = this;
        symbols.forEach((symbol) => {
            indices.push(self.symbols.indexOf(symbol));
        });
        return indices;
    }
}

module.exports = LetterDictionary;