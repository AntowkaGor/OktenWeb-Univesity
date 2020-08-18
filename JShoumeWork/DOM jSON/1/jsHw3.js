/*
//-- створити об'єкт (не меньше 5ти властивостей) який описує
//- собаку
//- людину
//- автомобіль
//- квартиру
//- книгу
let dog = {
    gender: 'he',
    age: 2,
    breed: 'Basset Hound',
    color: 'black',
    size: 'middel',
}

let person = {
    name: 'Anton',
    gender: 'man',
    age: 25,
    height: '183cm',
    weight: '85kg',
}

let car = {
    brand: 'Toyota',
    name: 'Prius',
    year: 2014,
    fuel: 'gibrid',
    color: 'red',
}

let flat = {
    rooms: 3,
    floor: 2,
    floorsHouse: 5,
    area: 68.5,
    heating: 'gas',
}

let book = {
    author: 'Shakespeare',
    bookName: 'sonnets',
    numberPage: 350,
    year: 1875,
    edition: 5,
}


//-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів

let masDog = ['Хаски', 'Овчарка', 'Пудель', 'Чау-Чау', 'Дог'];
console.log(masDog);

let peoplesName = ['Саша', 'Рома', 'Марина', 'Света', 'Жора'];
console.log(peoplesName);

let cars = ['Toyota', 'Lada', 'Geep', 'KIA', 'Hundai'];
console.log(cars);

//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка

let houme = {
    area: {
        room1: '10m2',
        room2: '25m2',
    },
    floor: 2,
    floorsHouse: 5,
    comunication: ['газ', 'электричество', 'вода']
}

let driver = {
    name: 'Ivan',
    age: 30,
    driverLicense: ['A', 'A1', 'B', 'D'],
    driveCar: {
        type1: 'bus',
        type2: 'car',
    },
    experience: 15,
}

let toy = {
    type: 'robot',
    name: 'Polly',
    friends: ['Roy', 'Amber', 'Mark'],
    multfil: 'robo cars',
    scils: {
        1: 'car',
        2: 'robot',
        3: 'police'
    }
}

let table = {
    color: ['blue', 'white', 'red', 'black'],
    canStay: {
        1: 'Kitchen',
        2: 'rooms',
    },
    height: 80,
    weightSize: 120,
    seatPlace: 4,
}

let bag = {
    type: 'road',
    size: {
        height: 80,
        weight: 40,
        depth: 15,
    }
    color: 'green',
    gender: 'woman',
    color: ['blue', 'white', 'red', 'black'],
}
//Дан массив:
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус Анни
//Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log('you age' + users[4].age + 'and you name' + users[4].name)
console.log('you age' + users[5].age + 'and you status' + users[4].status)

//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//- отримує текст з параграфа з id "content"
//- отримує текст з блоку з id "rules"
//- замініть текст параграфа з id 'content' на будь-який інший
//- замініть текст параграфа з id 'rules' на будь-який інший
//- змініть кожному елементу колір фону на червоний
//- змініть кожному елементу колір тексту на синій
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//- отримати всі елементи з класом fc_rules
//- поміняти колір тексту у всіх елементів fc_rules на червоний

//let content = document.getElementById('content');
//console.log(content)
//
//let rules = document.getElementById('rules');
//console.log(rules);
//
//let content1 = document.getElementById('content');
//content1.innerText = ` new Text from ME`
//console.log(content)
//
//let rules1 = document.getElementById('rules');
//rules1.innerText = ` TO be continui`
//console.log(rules)
//
//let elements = document.getElementById('content');
//elements.style.backgroundColor = 'red';
//console.log(content);
//
//let elementsTextColor = document.getElementById('rules');
//elementsTextColor.style.color = 'white';
//elementsTextColor.style.backgroundColor = 'black';
//console.log(elementsTextColor);
//
//!!!!!!!!!!!!!!!!!!!!let ollClas = document.getElementById('rules');
//!!!!!!!!!!!!!!!!!!!!console.log(ollClas)
//
//let ollElements = document.getElementsByClassName('fc_rules');
//console.log(ollElements)
//
//let ollElements = document.getElementsByClassName('fc_rules');
//for (let i = 0; i < ollElements.length; i++) {
//    ollElements[i].style.color = 'pink';
//}
//console.log(ollElements);

//=================
//=====class=======
//=================
//Взяти файл template_2.html та працювати в ньому
//- Напишіть код, який :
//-- змінює колір тексту елемнту з ід main_header на будь-який інший
//-- робить шириниу елементу ul 400 пікселів
//-- робить шириниу всіх елементів з класом linkList шириною 50%
//-- отримує текст який зберігається в елементі з класом listElement2
//-- отримує всі елементи li та змінює ім колір фону на сірий
//-- отримує всі елементи 'a' та додає їм клас anchor
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


*/
//let colorHeader = document.getElementById('main_header')
//colorHeader.style.color = 'pink';
//console.log(colorHeader);
//
//let widthUl = document.getElementsByTagName('ul')
//for (let i = 0; i < widthUl.length; i++) {
//    widthUl[i].style.width = '400px';
//}
//console.log(widthUl);
//
//let classLinkList = document.getElementsByClassName('linkList')
//for (let i = 0; i < classLinkList.length; i++) {
//    classLinkList[i].style.width = '50%';
//}
//console.log(classLinkList);
//
//let textListEl2 = document.getElementsByClassName('listElement2');
//console.log(textListEl2[0].innerText);
//
//let colorLi = document.getElementsByTagName('li')
//for (let i = 0; i < colorLi.length; i++) {
//    colorLi[i].style.backgroundColor = 'grey';
//}
//console.log(colorLi);

//let classToA = document.getElementsByTagName('a');
//for (let i = 0; i < classToA.length; i++) {
//    classToA[i].classList.add('anchor');
//}

//let classToA = document.getElementsByTagName('a');
//for (let i = 0; i < classToA.length; i++) {
//    if (i === 2) {
//        classToA[i].style.fontSize = '40px';
//    }
//} console.log(classToA);
//-- отримує всі елементи 'a' та додає їм клас element_XXX.
//Де XXX - текстовий контент елементу a
// console.log(classToA)
// for (let i = 0; i < classToA.length; i++) {
//     classToA[i].classList.add(`element_${classToA[i].innerText}`);
// }
//let classToA = document.getElementsByTagName('a');
//console.log(classToA)
//for (let element of classToA) {
//    element.classList.add(`element_${element.innerText}`);
//}
//-- отримує всі елементи 'sub-header' 
//та змінює колір фону. Фон отримати з prompt()
// let subHeaders = document.querySelectorAll(".sub-header")

// for (let i = 0; i < subHeaders.length; i++) {
//     let color = prompt('collor', undefined)
//     if (color) {
//         subHeaders[i].style.backgroundColor = color;
//     }
// }
//-- отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
//let subHeaders = document.querySelectorAll(".sub-header")
//for (let i = 0; i < subHeaders.length; i++) {
//    let color;
//    if (subHeaders[i].innerText === 'content 2 segment')
//        color = prompt('collor', undefined)
//    if (color) {
//        subHeaders[i].style.color = color;
//    }
//}
//-- отримує елемент з класом content_1 
//та заміняє  в ньому тест на довільний. Текст отримати з prompt()

//let subHeaders = document.querySelectorAll(".content_1")
//
//for (let i = 0; i < subHeaders.length; i++) {
//    let text = prompt('text', undefined)
//    if (text) {
//        subHeaders[i].innerText = text;
//    }
//}
//-- отримати елементи p та змінити їм paddin на довільне значення

//let subHeaders = document.querySelectorAll("p")
//
//for (let i = 0; i < subHeaders.length; i++) {
//    subHeaders[i].style.padding = '40px'
//}

//-- отримати елементи
// з класом text2 та змінити їм текст на довільне значення

//let texts = document.querySelectorAll('.text2')
//for (let i = 0; i < texts.length; i++) {
//    texts[i].innerText = 'let'
//}