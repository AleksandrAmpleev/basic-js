const CustomError = require("../extensions/custom-error");



//### ** Расширенный повторитель **

//    Ваша задача — реализовать функцию`repeater(str, options)`.
//Эта функция возвращает повторяющуюся ** строку **, основываясь на заданных параметрах:
//* `str` это ** строка **, которая будет повторена
//    * `options` это ** объект ** опций, который содержит следующие свойства:
//-	`repeatTimes` устанавливает число повторений`str`
//- `separator` это строка, разделяющая повторения`str`
//- `addition` это дополнительная строка, которая будет добавлена после каждого повторения`str`
//- `additionRepeatTimes` устанавливает число повторений`addition`
//- `additionSeparator` это строка, разделяющая повторения`addition`

//Параметры`str` и`addition` по умолчанию являются ** строками **.В случае, если они другого типа, он должны быть преобразованы к строке.

//  Параметры`separator` и`additionSeparator` являются строками.

//`repeatTimes` и`additionRepeatTimes` являются целыми числами(в случае отсутствия любого из них соответствующая строка не повторяется).

//Единственный обязательный параметр — это`str`, остальные могут не быть переданы.
//    Значение`separator` по умолчанию это`'+'`.Значение`additionSeparator` по умолчанию это`'|'`.

//        Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

//Напишите свой код в`src/extended-repeater.js`.

//alert(repeater('string', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
//alert(repeater('String', { repeatTimes: 5, separator: ';', addition: '!', additionRepeatTimes: 2, additionSeparator: 'm' }));

module.exports = function repeater(str, options) {
    var retStr = [];
    if (options) {
        if (options.repeatTimes) {
            for (var i = 0; i < options.repeatTimes; i++) {
                retStr.push(str === null ? 'null' : str);
                if (options.addition !== undefined && options.additionRepeatTimes > 0) {

                    for (var j = 0; j < options.additionRepeatTimes; j++) {
                        retStr.push(options.addition === null ? 'null' : options.addition);
                        if (options.additionSeparator && j < (options.additionRepeatTimes - 1)) {
                            retStr.push(options.additionSeparator === null ? 'null' : options.additionSeparator);
                        }
                    }
                }

                if (options.separator !== undefined && i < (options.repeatTimes - 1)) {
                    retStr.push(options.separator === null ? 'null' : options.separator);
                } else {
                    if (options.separator == undefined && i < (options.repeatTimes - 1)) {
                        retStr.push('+');
                    }
                }
            }
        } else {
            if (options.addition !== undefined) {
                retStr.push(str === null ? 'null' : str);
                if (options.additionRepeatTimes === undefined) {
                    options.additionRepeatTimes = 1;
                }
                for (var j = 0; j < options.additionRepeatTimes; j++) {
                    retStr.push(options.addition === null ? 'null' : options.addition);
                    if (options.additionSeparator && j < (options.additionRepeatTimes - 1)) {
                        retStr.push(options.additionSeparator === null ? 'null' : options.additionSeparator);
                    }
                }
            }
        }
    }
    return retStr.join('');
};
  