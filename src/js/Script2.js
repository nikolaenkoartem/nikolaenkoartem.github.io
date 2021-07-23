"use strict";


let typeShopOne;
let typeShopTwo;
let typeShopThree;

let typeShop1;
let typeShop2;
let typeShop3;

let calculator = {
    typeShopOne: 0,
    typeShopTwo: 0,
    typeShopThree: 0,
};

let calc = [
    typeShop1 = 0,
    typeShop2 = 0,
    typeShop3 = 0,
    ];

typeShopOne = prompt("Выберите тип сайта (напишите цифру): 1-Сайт-визитка (30000руб.), 2-Интернет магазин (60000руб.), 3-Социальная сеть (80000руб.)");
typeShopTwo = prompt("Выберите дизайн (напишите цифру): 1-Шаблонный, 2-Уникальный (+50000руб.), 3-Индивидуальный (+100000руб.)");
typeShopThree = prompt("Адаптивность (напишите цифру): 1-ПК, 2-Смартфоны (+10000руб.), 3-ПК и Смартфоны (+50000руб.)");
let mainList = [];
mainList.push(typeShopOne, typeShopTwo, typeShopThree);
alert(mainList);

if (typeShopOne == 1) {
            typeShopOne = 30000;
            typeShop1 = 7;
        }

        if (typeShopOne == 2) {
            typeShopOne = 60000;
            typeShop1 = 14;
        }

        if (typeShopOne == 3) {
            typeShopOne = 80000;
            typeShop1 = 30;
        }

        if (typeShopTwo == 1) {
            typeShopTwo = 0;
            typeShop2 = 0;
        }

        if (typeShopTwo == 2) {
            typeShopTwo = 50000;
            typeShop2 = 10;
        }

        if (typeShopTwo == 3) {
            typeShopTwo = 100000;
            typeShop2 = 30;
        }

        if (typeShopThree == 1) {
            typeShopThree = 0;
            typeShop3 = 0;
        }

        if (typeShopThree == 2) {
            typeShopThree = 10000;
            typeShop3 = 3;
        }

        if (typeShopThree == 3) {
            typeShopThree = 50000;
            typeShop3 = 5;
        }

let result1 = typeShopOne + typeShopTwo + typeShopThree;
let result2 = typeShop1 + typeShop2 + typeShop3;
let result = "СТОИМОСТЬ: " + result1 + " рублей" + "          СРОКИ: " + result2 + " дней";

alert(result);

console.log(result1);
console.log(result2);
console.log(result);




