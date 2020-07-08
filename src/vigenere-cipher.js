const CustomError = require("../extensions/custom-error");

//### ** Шифр Виженера **
//Криптография — это здорово! Давайте попробуем наладить производство шифровальных машин.
//Наши машины будут использовать один из методов шифрования, которые легки для понимания,
//но не могут быть разгаданы посредством простого криптоанализа —[** шифр Виженера **](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).
//Наша машина будет иметь 2 модификации: ** прямая ** и ** обратная ** (тип машины определяется в момент создания). ** 
//Прямая ** машина просто шифрует и дешифрует строку, переданную в нее, а ** обратная ** машина возвращает ** перевернутую ** задом 
//наперед строку после шифрования и дешифрования.
//Ваша задача — реализовать класс`VigenereCipheringMachine`. `constructor` этого класса принимает`true`(** или ничего **), 
//чтобы создать ** прямую ** машину и`false`, чтобы создать ** обратную ** машину.
//Каждый экземляр`VigenereCipheringMachine` должен иметь 2 метода: `encrypt` и`decrypt`.
//Метод`encrypt` принимает 2 параметра: `message`(строка, чтобы ее зашифровать) и`key`(строку - кодовое слово).
//Метод`decrypt` принимает 2 параметра: `message`(строка, чтобы ее расшифровать) и`key`(строку - кодовое слово)
//Эти параметры для обоих методов являются ** обязательными **.Если хотя бы один из них не был передан, 
//должна быть выброшена ошибка.Машины шифруют и дешифруют только символы латинского алфавита.Строка, возвращаемая этими методами, должна иметь верхний регистр.
//Вам не нужно валидировать значение, переданное в`contructor` и в методы`encrypt` и`decrypt`
//(за исключением выбрасывания ошибки при отсутствии аргумента для для этих методов).
//Напишите свой код в`src/vigenere-cipher.js`.
//---

class VigenereCipheringMachine {
    encrypt(message, key) {
        this.engLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
        //=========================================================================
        var tabulaRecta = [];
        for (var i = 0; i < 26; i++) {
            var shift = i - 26;
            if (shift < 0) {
                shift = shift * -1;
            }
            tabulaRecta[i] = new Array();
            for (var j = 0; j < 26; j++) {
                if ((26 - shift) > 25) {
                    shift = 26;
                }
                tabulaRecta[i].push(this.engLang[26 - shift]);
                shift--;
            }
        }
        /*return tabulaRecta;*/
        //=========================================================================
        var simbolsCount = 0;
        for (var i = 0; i < message.length; i++) {
            if (this.engLang.indexOf(message[i]) !== -1) {
                simbolsCount++;
            }
        }

        var needLnght = message.length;//Math.ceil(simbolsCount / key.length);
        var str = [];
        for (var i = 0; i < needLnght; i++) {
            str.push(key);
        }
        var extendedKey = str.join('').slice(0, message.length); //return str.join('').slice(0, simbolsCount);
        //=========================================================================

        var shifr = [];
        var lastIndexSource = 0;
        var lastIndexKey = 0;

        for (var i = 0; i < message.length; i++) {
            var literaSource = message[lastIndexSource].toLowerCase();
            var literaKey = extendedKey[lastIndexKey].toLowerCase();

            var column = this.engLang.indexOf(literaSource);// GetIndex(literaSource, this.engLang);
            var row = this.engLang.indexOf(literaKey); //GetIndex(literaKey, this.engLang);

            lastIndexSource++;

            if (column === -1) {

                shifr.push(literaSource);
                continue;
            }

            lastIndexKey++;

            var shifrLitera = tabulaRecta[row][column];
            shifr.push(shifrLitera);
        }
        return shifr.join('').toUpperCase();     
    }

 
    decrypt(message, key) {
        this.engLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
        //=========================================================================
        var tabulaRecta = [];
        for (var i = 0; i < 26; i++) {
            var shift = i - 26;
            if (shift < 0) {
                shift = shift * -1;
            }
            tabulaRecta[i] = new Array();
            for (var j = 0; j < 26; j++) {
                if ((26 - shift) > 25) {
                    shift = 26;
                }
                tabulaRecta[i].push(this.engLang[26 - shift]);
                shift--;
            }
        }
        //=========================================================================

        var originalText = [];
        var lastMessageLitera = 0;

        var extKey = key.repeat(Math.ceil(message.length / key.length) + 1);

        for (var i = 0; i < extKey.length; i++) {
            var literaKey = extKey[i].toLowerCase();


            for (var j = 0; j < tabulaRecta.length; j++) {
                if (tabulaRecta[j][0] === literaKey && message.length > lastMessageLitera) {
                    var start = message[lastMessageLitera].toLowerCase();
                    if (!tabulaRecta[j].includes(start)) {
                        originalText.push(start);
                        lastMessageLitera++;

                        if (message.length === lastMessageLitera) {
                            break;
                        }

                        start = message[lastMessageLitera].toLowerCase();
                    }

                    for (var z = 0; z < tabulaRecta[j].length; z++) {
                        if (tabulaRecta[j][z] === start) {
                            start = this.engLang[z];
                            break;
                        }
                    }

                    originalText.push(start);
                    lastMessageLitera++;
                    break;
                }
            }
        }
        
        return originalText.join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
