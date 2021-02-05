// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let first= {
//     name: 'Antin',
//     age: 31,
//     gander: 'male'
// };
// let second= {
//     car: 'Renaut',
//     color: 'red',
//     body: 'cabriolet'
// };
// let third= {
//     transport: 'bicycle',
//     type: 'electric',
//     drive: false
// };
// let fourth= {
//     sofa: true,
//     damage: true,
//     price: false
// };
// let fifth= {
//     room: 3,
//     size: 68,
//     floor: 2
// };

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let car = { car: 'Renaut', color: ['red', 'black'], body: { type: 'cabriolet' }};
// let bike = { transport: ['bicycle', 'car'], type: 'electric', work: {drive: false }};
// let sofa = { sofa: true, damage : ['breake','worn'] , cost: { price: 15 } };
// let apartment = { room: ['kitchen', 'bathroom'], size : 68 , water: { cold: true } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const key in first) {
//        console.log('first:',key);
// };
// console.log('xxxxxxxxxxxx')
// for (const key in second) {
//     console.log('second:',key);
// };
// console.log('xxxxxxxxxxxx')
// for (const key in third) {
//     console.log('third:',key);
// };
// console.log('xxxxxxxxxxxx')
// for (const key in fourth) {
//     console.log('fourth:',key);
// };
// console.log('xxxxxxxxxxxx')
// for (const key in fifth) {
//     console.log('fifth:',key);
// };
// console.log('xxxxxxxxxxxx')
// for (const key in man) {
//     console.log('man:',key);
// };
// console.log('$$$$$$$$$$$$$$')
// for (const key in car) {
//     console.log('car:',key);
// };
// console.log('$$$$$$$$$$$$$$')
// for (const key in bike) {
//     console.log('bike:',key);
// };
// console.log('$$$$$$$$$$$$$$')
// for (const key in sofa) {
//     console.log('sofa:',key);
// };
// console.log('$$$$$$$$$$$$$$')
// for (const key in apartment) {
//     console.log('apartment:',key);
// };

// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(first));
// console.log(Object.keys(second));
// console.log(Object.keys(third));
// console.log(Object.keys(fourth));
// console.log(Object.keys(fifth));
// console.log('$$$$$$$$$$$$$$');
// console.log(Object.keys(man));
// console.log(Object.keys(car));
// console.log(Object.keys(bike));
// console.log(Object.keys(sofa));
// console.log(Object.keys(apartment));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars =[
//     {model:'Toyota', year:2001, power:0.99, color:'white'},
//     {model:'BMW', year:1989, power:2.5, color:'red'},
//     {model:'Lada', year:1988, power:2.2, color:'blue'},
//     {model:'Gyga', year:2021, power:5.0, color:'green'},
//     {model:'Rav', year:2000, power:1.8, color:true},
//     {model:'BYG', year:2001, power:1.6, color:'red'},
//     {model:'Mazda', year:1954, power:3.0, color:'white'},
//     {model:'Lada', year:1989, power:0.99, color:'green'},
//     {model:'Mercedes', year:1954, power:5.0, color:'blue'},
//     {model:'Niva', year:1974, power:1.8, color:true}
// ];

// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities =[
//     {name:'Kiev', population: 45, country:'Ukraine', region:'Ukraine'},
//     {name:'Warshava', population: 63, country:'Poland', region:'Poland'},
//     {name:'London', population: 13, country:'England', region:'England'}
//  ];

// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars2 =[
//     {model:'Toyota', year:2001, power:0.99, color:'white', driver:{name:'Ant', age: 30, gander: 'male', experience:false }},
//     {model:'BMW', year:1989, power:2.5, color:'red', driver:{name:'Gor', age:25 , gander: 'male',experience: 15}},
//     {model:'Lada', year:1988, power:2.2, color:'blue', driver:{name:'Mary', age:29, gander: 'woman', experience: 8}},
//     {model:'Gyga', year:2021, power:5.0, color:'green', driver:{name:'Hulk', age: 18, gander: 'male', experience: 2}},
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++
// }
// console.log('*******************')
// let j=0;
// while (j<cities.length){
//     console.log(cities[j]);
//     j++
// }
// console.log('*******************')
// let k=0;
// while (k<cars2.length){
//     console.log(cars2[k]);
//     k++;
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// console.log('*******************')
// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);
// }
// console.log('*******************')
// for (let k = 0; k < cars2.length; k++) {
//     console.log(cars2[k]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let cara of cars2) {
//     console.log(cara);
// };
// console.log('*******************');
//     console.log(car);
// };
// console.log('*******************');
// for (let citie of cities) {
//     console.log(citie);
// }

// let secondJson = JSON.stringify(second);
// - взять объекты из задания 1 и превратить каждый в json. Потом вернуть их обратно
// let firstJson = JSON.stringify(first);
// console.log(firstJson);
// let secondJson = JSON.stringify(second);
// console.log(secondJson);
// let thirdJson = JSON.stringify(third);
// console.log(thirdJson);
// let fourthJson = JSON.stringify(fourth);
// console.log(fourthJson);
// let fifthJson = JSON.stringify(fifth);
// console.log(fifthJson);
// console.log('*************************')
// console.log(JSON.parse(firstJson));
// console.log(JSON.parse(secondJson));
// console.log(JSON.parse(thirdJson));
// console.log(JSON.parse(fourthJson));
// console.log(JSON.parse(fifthJson));

// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const car of cars) {
//     const carJson = JSON.stringify(car)
//     console.log(carJson);
// }

// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const city of cities) {
//     const cityJson = JSON.stringify(city)
//     console.log(cityJson);
// }

// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newCars2 = [];
// for (const car of cars2) {
//         const carJson = JSON.stringify(car)
//    newCars2.push(carJson)
// }
// console.log(newCars2);

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!РАЗОБРАТСЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let users = [
//     {name: 'Anton', age: 31, skills:[html= true, js= false] },
//     {name: 'Stepan', age: 25, skills:[html= '50%', js= false] },
//     {name: 'Viktor', age: 26, skills:[html= true, js= false] },
// ];
// for (let i = 0; i < users.length; i++) {
//  let key = users[i];
//  let skil = key.skills;
//     console.log(key);
//     console.log(skil);
//     console.log('************');
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {name: 'Anton', age: 31, skills:[html= true, js= false] },
//     {name: 'Stepan', age: 25, skills:[html= '50%', js= false] },
//     {name: 'Viktor', age: 26, skills:[html= true, js= false] },
// ];
// let newArray = [];
// for (let i = 0; i < users.length; i++) {
//  let key = users[i];
//  let skil = key.skills;
//     console.log(key);
//     console.log(skil);
//     console.log('************');
//     newArray.push(skil)
// }
// console.log(newArray);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!РАЗОБРАТСЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
//     ];
// for (const user of users) {
//     console.log(user);
//     for (const skil of user.skills) {
//         console.log(skil);
//     }
// }
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let newUsers =[];
// for (const user of users) {
//     newUsers.push(user.address);
// }
// console.log(newUsers);
// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//
// for (const user of users) {
//     let divka = document.createElement("div");
//     let address = '';
//     for (const adres in user.address) {
//         address = address + " " + user.address[adres]
//     }
//     divka.innerText = `NAME: ${user.name}; AGE: ${user.age}; STATUS:${user.status}; ADDRESS: ${address}.`
//     document.body.appendChild(divka);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let div = document.createElement("div");
//     let h2 = document.createElement('h2');
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     let address = '';
//     for (const adres in user.address) {
//         address = address + " " + user.address[adres]
//     }
//     h2.innerText = `NAME: ${user.name}`;
//     p1.innerText = `AGE: ${user.age}`;
//     p2.innerText = `STATUS:${user.status}`;
//     p3.innerText = `ADDRESS: ${address}`;
//     document.body.appendChild(div);
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     let div = document.createElement('div');
//     let name = document.createElement('h2');
//     let age = document.createElement('p');
//     let status = document.createElement('p');
//     let address = document.createElement('div');
//
//     for (const adres in user.address) {
//         let addressDiv = document.createElement('div');
//         addressDiv.innerHTML = user.address[adres];
//         address.appendChild(addressDiv);
//     }
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     document.body.appendChild(div);
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false}
//     ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}
//     ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let usersWithCities = [];
// for (const user of usersWithId) {
//     let userID = user.id;
//     for (const citi of citiesWithId) {
//         let citiId = citi.user_id
//         if (userID === citiId){
//          usersWithCities.push(user.address = citi)
//          }
//     }
//  }
// console.log(usersWithCities);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// - створити в розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let divWithId = document.createElement('div');
// let divWithClass = document.createElement('div');
//  divWithId.id = 'main';
//  divWithClass.classList = 'next';
// document.body.appendChild(divWithId);
// document.body.appendChild(divWithClass);
// divWithId.innerText ='some TEXT for DIV';
// divWithClass.innerText ='some TEXT for class';
//
// let takeDiv = document.querySelector('#content');
// let divText = takeDiv.innerText;
// console.log(divText);
//
// let takeClass = document.getElementsByClassName('rules');
// for ( let  text of takeClass) {
//     console.log(text.innerText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag
// let clas = document.querySelector('#content');
// clas.innerText = 'new text'
//
// let takeClass = document.getElementsByClassName('rules');
// for ( let  text of takeClass) {
//     text.innerText = 'new TExt for class'
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let clas = document.querySelector('#content');
// clas.style.width = '150px';
// clas.style.height = '150px';
//
// let takeClass = document.getElementsByClassName('rules');
// for (const style of takeClass) {
//     style.style.height = '50px';
//     style.style.backgroundColor = 'blue';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let div = document.querySelector('#content');
// let table = document.createElement('table')
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// td1.innerText = '1';
// td2.innerText = '2';
// td3.innerText = '3';
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// div.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let div = document.querySelector('#content');
// let table = document.createElement('table');
// for (let i = 1; i <= 10; i++) {
//     let tr = document.createElement('tr');
//     tr.innerText = `${[i]}`
//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         td.innerText = `${[i]}`
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// div.appendChild(table);

 // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let div = document.querySelector('#content');
// let table = document.createElement('table');
// for (let i = 1; i <= 10; i++) {
//     let tr = document.createElement('tr');
//     tr.innerText = `${[i]}`
//     for (let i = 1; i <= 5; i++) {
//         let td = document.createElement('td');
//         td.innerText = `${[i]}`
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// div.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let div = document.querySelector('#content');
// let table = document.createElement('table');
// let n = prompt('строки');
// let m = prompt('столбцы');
// for (let i = 1; i <= n; i++) {
//     let tr = document.createElement('tr');
//     tr.innerText = `${[i]}`
//     for (let i = 1; i <= m; i++) {
//         let td = document.createElement('td');
//         td.innerText = `${[i]}`
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// div.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// let allClassElements = document.getElementsByTagName('*');
// for (const tag of allClassElements) {
//     if (tag.getAttribute ('class')){
//         console.log(tag);
//     }
// }
// // - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let allTagElements = document.getElementsByTagName('p');
// for (const tag of allTagElements) {
//     tag.innerText = 'oktenweb';
// }
//
// //     - знайти всі div та змінити ім колір на червоний
// let allDivElements = document.getElementsByTagName('div');
// for (const tag of allDivElements) {
//     tag.style.backgroundColor = 'red';
// }
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2 = document.getElementsByTagName('h2');
// let divContent = document.getElementById('content');
// let ul =document.createElement('ul');
// for (const text of h2) {
//     let li = document.createElement('li');
//     li.innerText = text.innerText;
//     ul.appendChild(li)
// }
// divContent.appendChild(ul);
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
// let divForRules = document.getElementById('content');
// for (let i = 0; i < rules.length; i++) {
//     let divRules = document.createElement('div')
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p')
//     divRules.className = `rules rule${[i+1]}`
//     h2.innerText = rules[i].title;
//     p.innerText = rules[i].body;
//     divRules.appendChild(h2);
//     divRules.appendChild(p);
//     divForRules.appendChild(divRules);
// }

//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// fetch ('https://jsonplaceholder.typicode.com/users')
//     .then(users => users.json())
//     .then(usersJson => {
//         console.log(usersJson);
//         for (const user of usersJson) {
//             let content = document.getElementById('content');
//             let userDiv = document.createElement('div');
//
//             for (const userKey in user) {
//                let innerDiv = document.createElement('div');
//                if (typeof  userKey === 'object') {
//                    innerDiv.innerText = `${user[userKey]}`
//                    userDiv.appendChild(innerDiv)
//                } else {
//                    let innerDiv = document.createElement('div');
//                    innerDiv.innerText = `${user[userKey]}`
//                    userDiv.appendChild(innerDiv)
//                }
//
//
//             }
//             content.appendChild(userDiv)
//         }
//     })

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// - взять json из задания 11 и превратить их обратно в объекты.

