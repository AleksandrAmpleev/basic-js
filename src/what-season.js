const CustomError = require("../extensions/custom-error");

//### ** Какая пора года ??**
//Ваша задача — реализовать функцию`getSeason(date)`, которая принимает объект`Date` и возвращает соответствующую ему пору года.Пора года должна быть типа`string`.
//Если аргумент`date` не был передан, функция должна вернуть строку`'Unable to determine the time of year!'` Если аргумент`date` ** некорректный **, функция должна выбросить ошибку.
//Тссс! Среди аргументов, которые попадают в эту функцию, затесался вражеский агент.
//![Disguised](https://www.famousbirthdays.com/faces/disguised-toast-image.jpg)
//Он руководствуется знаменитой поговоркой: "Если это выглядит как **утка**, плавает как **утка**, и крякает как **утка**, тогда это, скорее всего, **утка** (и неважно, что это **на самом деле**)".
//Он ** искусно маскируется ** под настоящую дату(тип`date`), но умелый javascript - разработчик может поймать его и выбросить ошибку как раз вовремя!
//Напишите ваш код в`src/what-season.js`.

module.exports = function getSeason(date) {
        //throw new CustomError('Not implemented');
        // remove line with error and write your code here
        var yar = date.getFullYear();
    
        if (date.toString().indexOf(yar) == -1) {
            throw new Error('What is this?');
        }

        if (date == undefined) {
            throw new Error('Unable to determine the time of year!');
        }

        if (!(date instanceof Date)) {
            throw new TypeError('type error. expected date');
        }

        var t = date.getMonth();
        var season = "";
        switch (t) {
            case 0:
            case 1:
            case 11:
                season = 'winter';
                break;
            case 2:
            case 3:
            case 4:
                season = 'spring';
                break;
            case 5:
            case 6:
            case 7:
                season = 'summer';
                break;
            case 8:
            case 9:
            case 10:
                season = 'autumn';
                break;
        }
        return season;
};
