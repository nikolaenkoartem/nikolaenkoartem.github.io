"use strict";







/*let age = prompt ("Сколько тебе лет?");
console.log (age);*/













let typeShopOne = prompt("Выберите тип сайта (напишите цифру)" , "1-Сайт-визитка (20000руб.), 2-Интернет магазин (50000руб.), 3-Социальная сеть (70000руб.)");
let typeShopTwo = prompt("Выберите дизайн (напишите цифру)" , "1-Шаблонный, 2-Уникальный (+50000руб.)");
let typeShopThree = prompt("Адаптивность (напишите цифру)" , " 1-ПК, 2-Смартфоны, 3-ПК и Смартфоны (+50000руб.)");
let mainList = [];
mainList.push(typeShopOne, typeShopTwo, typeShopThree);
alert(mainList);
