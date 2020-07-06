const CustomError = require("../extensions/custom-error");

    //### ** Команда мечты **
     //Представьте себе, что вы с вашими друзьями решаете создать ** команду мечты **.Эта команда должна иметь крутое секретное название, 
     //которое содержит зашифрованную информацию о ней(или в котором зашифрована информация о ней).Например, это могут быть ** первые буквы ** имен ее членов ** в верхнем регистре **, ** отсортированные по алфавиту **.
    //Ваша задача — реализовать функцию`createDreamTeam(members)`, которая возвращает имя только что созданной команды(`string`), основанной на именах ее членов(`array`).Удачи!
    //Имена членов команды должны быть типа`string`.Значения другого типа должны быть проигнорированы.В случае неправильного типа`members`  функция должна вернуть`false`.
    //NB! Имя члена команды может содержать ** пробелы **.
    //    Например:
    //`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`
    //`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`
    //Напишите ваш код в`src/dream-team.js`.

module.exports = function createDreamTeam(members) {
    if (!(members instanceof Array)) {
        return false;
    }
    var team = [];
    for (var i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            var t = members[i].trim().split(' ');
            if (t.length > 0 && (typeof t[0]) == 'string') {
                team.push(t[0][0].toUpperCase());
            }
        }
    }
    return team.sort().join('');
};
