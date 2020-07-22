const CustomError = require("../extensions/custom-error");


//### ** Ханойская башня **

//    ![Визуализация алгоритма](https://ioecapsule.com/wp-content/uploads/2019/08/tower_of_hanoi_3_disks.gif)
//        [Ханойская башня](https://www.britannica.com/topic/Tower-of-Hanoi) — знаменитая математическая головоломка 18 столетия.
//            Она состоит из трех стержней и некоторого числа дисков разных размеров, которые могут быть надеты на стержень.Головоломка начинается с того, что диски расположены друг на друге, причем наименьший расположен сверху.Диски образуют конус.

//Цель головоломки — переместить всю стопку на другой стержень, следуя этим простым ** правилам **:
//* перемещать можно только ** один ** диск за раз
//            * можно брать только ** верхний ** диск с одной из стопок и помещать на ** верхушку ** другой стопки или на пустой стержень
//            * диск ** большего ** размера нельзя класть на диск ** меньшего ** размера

//Ваша задача значительно легче, чем придумывать алгоритм, решающий эту задачу : )

//Реализуйте функцию`calculateHanoi`, которая принимает параметры`diskNumber` и`turnsSpeed`. `diskNumber` — это число ** дисков **, а`turnsSpeed` — скорость перемещения дисков(в ** ходах ** в ** час **).Оба параметра являются числами(тип`number`)

//            `calculateHanoi` function returns an object with 2 properties:
//* `turns`(minimum`number` of turns to solve the puzzle)
//                * `seconds`(minimum`number` of ** seconds ** to solve the puzzle at a given`turnsSpeed`, seconds must be an integer, ** rounded down **)

//Функция`calculateHanoi` возвращает объект с 2 свойствами:
//* `turns`(минимальное число(тип`number`) ходов, необходимое для решения головоломки)
//    * `seconds`(минимальное число(тип`number`) секунд, необходимое для решения головоломки при заданной скорости).

//Вам не нужно валидировать входные параметры.

//Напишите ваш код в`src/hanoi-tower.js`.

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let trns = Math.pow(2, disksNumber) - 1;
    let timeDuration = Math.floor(((60 * 60) / turnsSpeed) * trns);
    return { turns: trns, seconds: timeDuration};
};
