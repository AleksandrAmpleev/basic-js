const CustomError = require("../extensions/custom-error");

//### ** Рекурсивный вычислитель глубины **
//    ![Идти глубже](https://i.imgur.com/k7lADiM.jpg)

//        Ваша задача — реализовать класс`DepthCalculator` с методом`calculateDepth`, который принимает массив и возвращает его ** глубину **.

//            Метод`calculateDepth` должен проходить полученный массив ** рекурсивно **.Глубина ** плоского ** массива — 1. Метод должен корректно работать с массивами, не содержащими элементов или содержащими пустые массивы.

//            Например:

//        `const depthCalc = new DepthCalculator();`
//            `const { calculateDepth } = depthCalc;`

//            `calculateDepth([1, 2, 3, 4, 5])` => `1`

//            `calculateDepth([1, 2, 3, [4, 5]])` => `2`

//            `calculateDepth([[[]]])` => `3`

//Напишите ваш код в`src/recursive-depth.js`.

module.exports = class DepthCalculator {
    calculateDepth(arr, currentDepth) {
        var depth = currentDepth == undefined ? 1 : currentDepth;
        var maxDebth = depth;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {
                depth += 1;
                var localDepth = calculateDepth(arr[i], depth);
                if (maxDebth < localDepth) { maxDebth = localDepth; }
            }
        }
        return maxDebth;
    }
};