const CustomError = require("../extensions/custom-error");



//### ** Преобразование массива **

//    Ваша задача — реализовать функцию`transform(arr)`, которая принимает массив(тип`array`) и возвращает ** преобразованный ** массив, основываясь на ** управляющих последовательностях **, 
//которые содержит. ** Управляющие последовательности ** — это определенные строковые элементы вышеупомянутого массива:
//* `--discard-next` исключает следующий за ней элемент массива из преобразованного массива.
//* `--discard-prev` исключает предшествующий ей элемент массива из преобразованного массива.
//* `--double-next` удваивает следующий за ней элемент массива в преобразованном массиве.
//* `--double-next` удваивает предшествующий ей элемент массива в преобразованном массиве.

//    Например:

//`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

//    `transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

//Функция не должна изменять исходный массив.Управляющие последовательности применяются ** последовательно, слева направо **.Управляющие последовательности ** не попадают ** в преобразованный массив.Управляющие последовательности в исходном массиве не встречаются подряд(не следуют одна за другой).Если около управляющей последовательности ** нет элемента **, к которому она может быть применена, ** она не делает ничего **.Функция должна выбросить ошибку, если`arr` не является массивом.

//Напишите свой код в`src/transform-array.js`.

module.exports = function transform(arr) {
    const comandDisNext = `--discard-next`;
    const comandDisPrev = `--discard-prev`;
    const comandDbNext = `--double-next`;
    const comandDbPrev = `--double-prev`;
    var ret = [];
    var skipNext = false;

    for (var i = 0; i < arr.length; i++) {
        var currentValue = arr[i];
        if (skipNext) {
            skipNext = false;
            continue;
        }

        if (currentValue === comandDisNext) {
            skipNext = true;
            ret.push(undefined);
        }
        else {
            if (currentValue === comandDisPrev) {
                ret.pop();
            } else {
                if (currentValue === comandDbNext) {
                    if ((i + 1) < arr.length)
                        ret.push(arr[i + 1]);
                } else {
                    if (currentValue === comandDbPrev) {
                        if ((i - 1) >= 0)
                            ret.push(ret[i - 1]);
                    } else {
                        ret.push(arr[i]);
                    }
                }
            }

        }
    }
    return ret.filter(function (item) {
        return item != undefined;
    });
};
