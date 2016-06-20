class Matcher {

    constructor(langFile, blobFile, dictionary) {
        this._blobFile = blobFile;
        this._langFile = langFile;
        this._dictionary = dictionary;
    }


    match(symbols) {
        var wildCards = 0;
        var self = this;
        symbols.forEach((symbol) => {
            if (symbol == '^' || symbol == '#') {
                wildCards++;
            }
        });

        symbols = symbols.filter((symbol) => {
            return symbol != '^' && symbol != '#';
        });

        var binaryAlphabet = this.getBinaryAlphabet(symbols);
        var words = [];
        var indices = [];
        this.checkNode(0, binaryAlphabet, wildCards, indices);
        for (var i = 1; i < indices.length; i++) {
            words.push(this._langFile[indices[i]]);
        }
        return words;
    }

    checkNode(index, binaryAlphabet, wildCards, indices) {
        var padding = (binaryAlphabet[this._blobFile[index]] - this._blobFile[index + 1]);
        index += 2;
        if (padding + wildCards < 0)
            return;
        if (padding < 0) {
            wildCards += padding;
        }
        var length = this._blobFile[index++];
        for (var i = 0; i < length; i++) {
            indices.push(this.readUint(index));
            index += 3;
        }
        length = this._blobFile[index++];
        for (var i = 0; i < length; i++) {
            var newIndex = this.readUint(index);
            index += 3;
            this.checkNode(newIndex, binaryAlphabet, wildCards, indices);
        }
    }

    readUint(index) {
        var temp = 0;
        temp = temp | this._blobFile[index];
        temp = temp << 8;
        temp = temp | this._blobFile[index + 1];
        temp = temp << 8;
        temp = temp | this._blobFile[index + 2];
        return temp;
    }

    getBinaryAlphabet(symbols) {
        var _symbols = this._dictionary.symbols;
        var binarySymbols = [];
        binarySymbols.length = _symbols.length;
        binarySymbols.fill(0);

        symbols.forEach((symbol) => {
            var index = _symbols.indexOf(symbol);
            if (index == -1) {
                console.log("Symbol " + symbol + " not found in dictionary.");
            } else {
                binarySymbols[index]++;
            }
        });
        return binarySymbols;
    }
}

module.exports = Matcher;