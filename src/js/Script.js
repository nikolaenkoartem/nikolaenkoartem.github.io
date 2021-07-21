"use strict";




let calculator;
calculator: {
    let typeShopOne = prompt("Выберите тип сайта (напишите цифру): 1-Сайт-визитка (30000руб.), 2-Интернет магазин (60000руб.), 3-Социальная сеть (80000руб.)");
    let typeShopTwo = prompt("Выберите дизайн (напишите цифру): 1-Шаблонный, 2-Уникальный (+50000руб.), 3-Индивидуальный (+100000руб.)");
    let typeShopThree = prompt("Адаптивность (напишите цифру): 1-ПК, 2-Смартфоны (+10000руб.), 3-ПК и Смартфоны (+50000руб.)");
    let mainList = [];
    mainList.push(typeShopOne, typeShopTwo, typeShopThree);
    alert(mainList);

    let calc = [
    typeShopOne,
    typeShopTwo,
    typeShopThree,
    ];

    var typeShop1;
    var typeShop2;
    var typeShop3;

    let calc2 = [
    typeShop1 = 0,
    typeShop2 = 0,
    typeShop3 = 0,
    ];

    if (((typeShopOne == 1) || (typeShopOne == 2) || (typeShopOne == 3)) && ((typeShopTwo == 1) || (typeShopTwo == 2) || (typeShopTwo == 3)) && ((typeShopThree == 1) || (typeShopThree == 2) || (typeShopThree == 3))) {

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

    } else {
        alert("Введите число от 1 до 3!!!")
        require
    }

    let result = "СТОИМОСТЬ: " + +typeShopOne + +typeShopTwo + +typeShopThree + " рублей" + "          СРОКИ: " + +typeShop1 + +typeShop2 + +typeShop3 + " дней";

    alert(result);

}
