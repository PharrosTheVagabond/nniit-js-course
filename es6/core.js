// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(FIO) {
    let [lastName, firstName] = FIO.split(" ");
    return firstName + " " + lastName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let elements = new Set(arr);
    return Array.from(elements);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (!arr.length){
        return false;
    }
    let salaryMax = arr.reduce((salaryMax, current) => Math.max(salaryMax, current));
    let salaryMin = arr.reduce((salaryMin, current) => Math.min(salaryMin, current));
    return salaryMax / salaryMin;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = [];
    arr.length = n;
    arr.fill("");
    for (let i = 2; i < n; i+=3){
        arr[i] += "Foo"
    }
    for (let i = 4; i < n; i+=5){
        arr[i] += "Bar"
    }
    for (let i = 0; i < n; i++){
        if(arr[i] === ""){
            arr[i] = i + 1;//ну такое
        }
    }
    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this._map = new Map();
    }
    addNewWord(key, word){
        if (this._map.has(key) || typeof key !== "string" || typeof word !== "string"){
            return false;
        }
        this._map.set(key, word);
        return true;
    }
    getWord(key){
        return this._map.get(key);
    }
    deleteWord(key){
        return this._map.delete(key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
