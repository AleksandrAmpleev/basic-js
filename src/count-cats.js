const CustomError = require("../extensions/custom-error");

//### ** Сосчитай котов! **

//    Ваша задача — сосчитать котов, спрятавшихся на заднем дворе(представленном в виде двумерного массива, `Array`).
//Коты прячутся хорошо, но их ** ушки ** (`"^^"`) видны очень хорошо.Ваша задача — реализовать функцию`countCats(backyard)`, которая сосчитает котов.Удачи!

//Число найденных котов должно иметь тип`number`.Если коты не найдены, функция должна вернуть`0`.

//Напишите ваш код в`src/count-cats.js`.

module.exports = function countCats(matrix) {
    var cCats = 0;
    for (var i = 0; i < matrix.length; i++) {
        let row = matrix[i].join(';');
        var t = row.split('^^');
        cCats += t.length - 1;
    }
    return cCats;
};
