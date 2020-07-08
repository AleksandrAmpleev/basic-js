const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

//### ** Углеродное датирование **

//    Для определения возраста археологических находок широко применяется ** радиоизотопный анализ **.Один из его видов — ** радиоуглеродный анализ **.

//Примерный возраст образца рассчитывается при помощи измерения ** соотношения ** между ** современной ** активностью изотопа С14 и активностью этого же изотопа в ** образце **.

//[Почитайте о методе](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

//    Ваша задача — реализовать функцию `dateSample(sampleActivity)`, которая рассчитывает примерный возраст образца(в годах).Пожалуйста, используйте данные`MODERN_ACTIVITY` и`HALF_LIFE_PERIOD`.

//Параметр функции`sampleActivity` имеет тип`string`.Рассчитаный возраст образца должен быть`number`.Возраст должен быть ** целочисленным **.Возраст должен ** округлен вверх ** (при получении целого числа).
//В случае неправильного ** типа ** входного параметра или ** несоответствующем ** значении активности, или отсутствии аргумента функция должна вернуть`false`.

//Напишите ваш код в`src/carbon-dating.js`.

module.exports = function dateSample(sampleActivity) {
    var floatAct = parseFloat(sampleActivity);
    if (floatAct > 0 && floatAct < 15) {
        var lnn = Math.log(MODERN_ACTIVITY / sampleActivity);
        var n0n = 0.693 / HALF_LIFE_PERIOD;
        return Math.ceil(lnn / n0n);
    } else {
        return false;
    }
};
