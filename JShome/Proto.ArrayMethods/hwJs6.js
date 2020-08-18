// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

//==================================================================//
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let numbers = [1, 3, 5, 4, 7, 8, 90, 35, -1, 5, 0];
// let sort = numbers.sort((a, b) => {
//     console.log(a);
//     console.log(b);
//     return a - b
// });
// console.log(sort);

// let numbers1 = [1, 3, 5, 4, 7, 8, 90, 35, -1, 5, 0];
// let sort1 = numbers1.sort((a, b) => {
//     console.log(a);
//     console.log(b);
//     return b - a
// });
// console.log(sort1);

// numbers.filter((value, index) => {
//     console.log(value);
//     console.log(index);
// });

// let numbers2 = numbers.filter(value => (value % 3 === 0));
// console.log(numbers2);

// let numbers3 = numbers.filter(value => (value % 10 === 0));
// console.log(numbers3);

// let numbers = [1, 3, 5, 4, 7, 8, 90, 35, -1, 5, 0];
// let forEach = numbers.forEach((element) => {
//     console.log(element);
// });

// let map = numbers.map((value, index) => {
//     return value * 3
// });
// console.log(map);
//==================================================================//
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let words = ['a', 'B', 'Hello', 'what', 'citrus', 'Orange', 'pokemon', 'Y', 'real', 'tru', 'false'];

// let sort = words.sort();
// console.log(sort)

//как правильно ??? - 1
// let sortStr = words.sort((a, b) => { if (a.toLowerCase() > b.toLowerCase()) { return -1 } });
// console.log(sortStr);
//как правильно ??? - 2
// let sortStr = words.sort((a, b) => {
//     if (a < b) {
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(sortStr);


// let wordsForSimbol = words.filter(value => value.length <= 4);
// console.log(wordsForSimbol)

// let mapWords = words.map((value) => { return value + '!' });
// console.log(mapWords);
//===================================================================//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }];

// let sortAgeUp = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortAgeUp);

// let sortAgeDown = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(sortAgeDown);

// let sortNameUp = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortNameUp);

// let sortNameDown = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(sortNameDown);

// let getIdToUsers = users.map((value, index) => {
//     return { value, id: index + 1 }
// })
// console.log(getIdToUsers)
// let sortUsersId = getIdToUsers.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortUsersId);
//================================================================//
// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(a, b, action) {
//     console.log(action(a, b));
// }

// calculator(10, 20, function (a, b) {
//     return a + b;
// });

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(a, b, c, action) {
//     console.log(action(a, b, c));
// }

// calculator(10, 20, 2, function (a, b, c) {
//     return (a + b) * c;
// });
//===============================================================//
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];
// // - двигун більше 3х літрів
// let volumeCar = cars.filter(function (a) {
//     return a.volume > 3;
// });
// console.log(volumeCar);
// // - двигун = 2л
// let volumeCar2 = cars.filter(function (a) {
//     return a.volume === 2;
// });
// console.log(volumeCar2);
// // - виробник мерс
// let volumeCar3 = cars.filter(function (a) {
//     return a.producer === 'mercedes';
// });
// console.log(volumeCar3);
// //- двигун більше 3х літрів + виробник мерседес
// let volumeCar4 = cars.filter(elem => {
//     if (elem.volume >= 3 && elem.producer === 'mercedes') {
//         return elem
//     }
// });
// console.log(volumeCar4);
// //- двигун більше 3х літрів + виробник субару
// let volumeCar5 = cars.filter(elem => {
//     if (elem.volume >= 3 && elem.producer === 'subaru') {
//         return elem
//     }
// });
// console.log(volumeCar5);
// //- сили більше ніж 300
// let powerCar = cars.filter(function (a) {
//     return a.power >= 300;
// });
// console.log(powerCar);
// //- сили більше ніж 300 + виробник субару
// let powerCar2 = cars.filter(elem => {
//     if (elem.power >= 300 && elem.producer === 'subaru' ) {
//         return elem
//     }
// });
// console.log(powerCar2);
// //- мотор серіі ej
// let engineCar = cars.filter(value => {
//     return value.engine.startsWith('ej');
// });
// console.log(engineCar)
// //- сили більше ніж 300 + виробник субару + мотор серіі ej
// let engineCar2 = cars.filter(elem => {
//     if (elem.power >= 300 && elem.producer === 'subaru' && elem.engine.startsWith('ej')) {
//         return elem
//     }
// });
// console.log(engineCar2);
// //- двигун меньше 3х літрів + виробник мерседес
// let volumeCar4 = cars.filter(elem => {
//     if (elem.volume >= 3 && elem.producer === 'mercedes') {
//         return elem
//     }
// });
// console.log(volumeCar4);
// //- двигун більше 2л + сили більше 250
// let volumePowerCar = cars.filter((value) => {
//     if (value.volume >= 2 && value.power >= 250) {
//         return value
//     }
// });
// console.log(volumePowerCar)
// //- сили більше 250  + виробник бмв
// let powerProducerCar = cars.filter((value) => {
//     if (value.power >= 250 && value.producer === 'bmw') {
//         return value
//     }
// });
// console.log(powerProducerCar)
//==================================================================//
// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
];
// // -- отсортировать его по id пользователей
// let usersId = usersWithAddress.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(usersWithAddress);
// // -- отсортировать его по id пользователей в обратном опрядке
// let usersId = usersWithAddress.sort((a, b) => {
//     if (a.id > b.id) {
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(usersWithAddress);
// //-- отсортировать его по возрасту пользователей
// let ageUsers = usersWithAddress.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(ageUsers)
// //-- отсортировать его по возрасту пользователей в обратном порядке
// let ageUsers = usersWithAddress.sort((a, b) => {
//     if (a.age > b.age) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(ageUsers)
// //-- отсортировать его по имени пользователей
// let nameUsers = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(nameUsers);
// // -- отсортировать его по названию улицы  в алфавитном порядке
// let addressStreetUsers = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(addressStreetUsers);
// //-- отфильтровать (оставить) тех кто младше 30
// let yongUsers = usersWithAddress.filter((value) => {
//     if (value.age < 30) {
//         return value
//     }
// });
// console.log(yongUsers);
// //-- отфильтровать (оставить) тех у кого отрицательный статус
// let statusUsers = usersWithAddress.filter((value) => {
//     if (value.status === false) {
//         return value
//     }
// });
// console.log(statusUsers);
// //-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let ageStatusUsers = usersWithAddress.filter((value) => {
//     if (value.status === false && value.age < 30) {
//         return value
//     }
// });
// console.log(ageStatusUsers);
// //-- отфильтровать (оставить) тех у кого номер дома четный
// let numberHouseUsers = usersWithAddress.filter((value) => {
//     if (value.address.number % 2 === 0) {
//         return value
//     }
// });
// console.log(numberHouseUsers);
//====================================================================//
// // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// // Пример:
// // Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function finder(number, arr) {

//     let MinIndex = arr.indexOf(number);
//     let naxIndex = arr.lastIndexOf(number);

//     console.log('MinIndex =' + minIndex)
//     console.log('MaxIndex =' + maxIndex)
// }

// finder(1, arr)
// finder(4, arr)














// //=====================================================//
// //консультация
// //======================================================//

// // recursia ===========//

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function recursator() {
//     console.log(22);

//     recursator();
// }

// recursator()


// //========= objectAssign==========iz dvyh zdelat odin//

// let user = { nsme: 'Viktor' };
// let car = { model: 'Zipka' };

// let assign = Object.assign(user, car);

// console.log(assign)



// ///==================================================////

// let numbers = [1, 6, 9, 0, 17, 22, 99];

// numbers.sort(comparenFn(a, b) => {
//     console.log(a);
//     console.log(b);
//     console.log('--------------');
//     return a - b // если результат "-" оно миняет их местами
//     // если от большого к меньшему то "b - a"
// });
// console.log(sort);




// //-------------------------------------//

// let str = ['dima', 'sergio', 'tania', 'igor']

// str.sort2 = str.sort(); // сортирует по алфавиту, по первой букве имени

// let sort2 = strs.sort(comparenFn(string, string) => {
//     if (a < b) { // проверяет по алфавиту
//         return -1
//     } else {
//         return 1
//     }
// })

// console.log(sort2)

// //------------------//

// // let users = [
// //     { name:, age:,},
// //     {},
// //     {},
// //     {},
// //     {}
// // ]

// // let sortUsers = users.sort(comparenFn)


// //---------------------------//
// let numbers = [1, 6, 9, 0, 17, 22, 99];

// // numbers.filter((value, index) => {
// //     console.log(value);
// //     console.log(index);
// //     console.log('---------');
// // })

// // let numbers2 = numbers.filter(value => !(value % 2 ===0));  //так писать круто
// let numbers2 = numbers.filter((value) => {
//     return value % 2 === 0
// })
// console.log(numbers2);

// //---------------------------//
// let map = numbers.map((number, number) => {
//     return value * index
// })

// console.log(map);

// //---------------------------// каджому юзеру дать ИД уникальный
// let str = ['dima', 'sergio', 'tania', 'igor']
// let usersWithId = strs.map((name, index) => {
//     return { name, index + 1
// }
// })
// console.log(usersWithId);

// //---------------------------//

// let numbers = [1, 6, 9, 0, 17, 22, 99];
// let str = ['dima', 'sergio', 'tania', 'igor']

// numbers.forEach(value => {
//  if ( value % 2 ===0){
//      return
//  }
//  console.log(value);
// })

// let numbers2 = numbers.reverse();
// console.log(numbers2)

// //--------------------------- рекурсия//

// let arrInArr = [1, 2, 3, [9, 1], 8. 99[0, 4, false, [8, 9 , 0]]]];

// let flat = arrInArr.flat(3); // показівает степень вложености масива
// console.log(flat);