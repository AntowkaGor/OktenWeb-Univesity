
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

//===================================================//
// // - Создать произвольный елемент с id = text.  
// //Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// document.getElementById('hider').onclick = function () {
//     document.getElementById('wrap').hidden = true;
// }
//===================================================//
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// document.getElementById('delete').onclick = function () {
//     this.hidden = true
// }
//===================================================//
// // - створити інпут який приймає вік людини
// //та кнопку яка підтверджує дію.
// //При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// // та повідомити про це користувача
// document.querySelector('#buttonAge').onclick = function () {
//     let inputAge = document.querySelector('#inputAge')
//     let value = inputAge.value
//     if (value <= 18) {
//         alert('подрости Малец!')
//     } else {
//         alert('Вот теперь ПОРА')
//         console.log(value)
//     }
// }
//===================================================//
// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menuElem = document.getElementById('cars');
// let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function () {
//     menuElem.classList.toggle('open');
// };
//===================================================//
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [
//     { title: 'lorem1', body: 'lorem ipsum dolo sit ameti1' },
//     { title: 'lorem2', body: 'lorem ipsum dolo sit ameti2' },
//     { title: 'lorem3', body: 'lorem ipsum dolo sit ameti3' },
// ];
// let content = document.querySelector('#content');
// coments.forEach(value => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     h2.innerText = value.title;
//     p.innerText = value.body;
//     button.innerText = 'Скрыть текст'

//     button.onclick = () => p.remove();

//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     content.appendChild(div);
// })
//===================================================//
// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.querySelector('#input1');
// let form2 = document.querySelector('#input2');
// let form3 = document.querySelector('#input21');
// let form4 = document.querySelector('#input22');
// let btn = document.querySelector('#btn');
// btn.onclick = function () {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input21.value);
//     console.log(input22.value);
// }
//===================================================//
// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.
// let content = document.querySelector('#content');
// function createTable(rows, cols, tag) {
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = i + '' + j
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table)
// }
// createTable(5, 5, content)
//===================================================//
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// let content = document.querySelector('#content');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let btn = document.createElement('button');

// btn.innerText = 'GET All';

// content.append(input1, input2, input3, btn);

// btn.onclick = () => {
//     function createTable(rows, cols, value) {
//         let content = document.querySelector('#content');
//         let table = document.createElement('table');
//         for (let i = 0; i < rows; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < cols; j++) {
//                 let td = document.createElement('td');
//                 td.innerHTML = i + '' + j + value
//                 tr.appendChild(td)
//             }
//             table.appendChild(tr)
//         }
//         content.appendChild(table)
//     }
//     createTable(input1.value, input2.value, input3.value)
// }
//===================================================//
// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     { id: 1, img_url: 'images/1.png' },
//     { id: 2, img_url: 'images/2.png' },
//     { id: 3, img_url: 'images/3.png' },
//     { id: 4, img_url: 'images/4.png' },
//     { id: 5, img_url: 'images/5.png' },
//     { id: 6, img_url: 'images/6.png' },
//     { id: 7, img_url: 'images/7.png' },
//     { id: 8, img_url: 'images/8.png' },
//     { id: 9, img_url: 'images/9.png' },
//     { id: 10, img_url: 'images/10.png' },
// ];

// let carusel = document.querySelector('#carusel');
// let img = document.createElement('img');
// let btnOne = document.createElement('button');
// let btnTwo = document.createElement('button');
// let i = 0;

// btnOne.innerText = 'Pre';
// btnTwo.innerText = 'Next';

// img.src = imgArray[i].img_url;

// carusel.appendChild(img);
// carusel.appendChild(btnOne);
// carusel.appendChild(btnTwo);


// btnOne.onclick = () => {
//     i - 1 < 0
//         ? i = imgArray.length - 1
//         : i = i - 1;

//     img.src = imgArray[i].img_url;
// }
// btnTwo.onclick = () => {
//     i + 1 > imgArray.length - 1
//         ? i = 0
//         : i = i + 1;
//     img.src = imgArray[i].img_url;
// }
//===================================================//
// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку
// let masiv = ['shyka', 'ruba', 'karas', 'vobla'];
// let content = document.querySelector('#content');
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'GO';
// content.append(input, btn);


// btn.onclick = () => {
//     let masiv = ['shyka', 'ruba', 'karas', 'vobla'];
//     console.log(input.value)
//     for (mas of masiv) {
//         if (input.value.match(mas)) {
//             alert('otvet ne vernui')
//         }
//     }
// }
//===================================================//
// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let content = document.querySelector('#content');
// let wrap = document.querySelector('#wrap');
// let arrayH2 = document.querySelectorAll('h2');
// let ul = document.createElement('ul')
// for (let i = 0; i < arrayH2.length; {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor' + i;
//     a.href = '#' + anchor;
//     arrayH2[i].setAttribute('id', anchor);
//     a.innerHTML = arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style = "width : 30%; float : left";
// wrap.style = "width : 70%; float : left";
//===================================================//
// // -- взять массив пользователей
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];
// let content = document.querySelector('#content');
// let userDiv = document.createElement('div');


// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';

// let label1 = document.createElement('label')
// let label2 = document.createElement('label')
// let label3 = document.createElement('label')
// label1.innerText = 'со статусом false';
// label2.innerText = 'старше 29 лет';
// label3.innerText = 'город Kиев';


// let btn = document.createElement('button')
// btn.innerText = 'Filter';

// function renderContant(array) {
//     let main = document.createElement('div');
//     array.forEach(element => {
//         let div = document.createElement('div')
//         div.innerHTML = JSON.stringify(element);
//         main.appendChild(div);
//     });
//     return main;
// }
// userDiv.appendChild(renderContant(usersWithAddress));

// btn.onclick = () => {
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress))

//     if (input1.checked) myArray = myArray.filter(value => !value.status);
//     if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
//     if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');

//     userDiv.innerText = '';
//     userDiv.appendChild(renderContant(myArray));
// }
// content.appendChild(userDiv);
// content.appendChild(input1);
// content.appendChild(label1);
// content.appendChild(input2);
// content.appendChild(label2);
// content.appendChild(input3);
// content.appendChild(label3);
// content.appendChild(btn);
//===================================================//
// // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let back = document.getElementById('BACK');
// let forward = document.getElementById('FORWAR');
// let currentElement = document.getElementById('startEL');


// // function domWalker({children,  parentElement }) {
// //   return {children, parent: parentElement}
// // }

// // console.log(currentElement);

// // back.onclick = () => {
// //   const {parent} = domWalker(currentElement)
// //   currentElement = parent ? parent : currentElement
// //   console.log(currentElement);
// // }

// // forward.onclick = () => {
// //   const {children} = domWalker(currentElement)
// //   currentElement = children[0] ? children[0] : currentElement
// //   console.log(currentElement);
// // }

// function domWalker(domElement) {
//     const children = domElement.children
//     const parent = domElement.parentElement

//     return { children: children, parent: parent }
// }

// console.log(currentElement);

// back.onclick = () => {
//     const parent = domWalker(currentElement).parent

//     if (parent !== undefined) {
//         currentElement = parent
//     }

//     console.log(currentElement);
// }

// forward.onclick = () => {
//     const children = domWalker(currentElement).children

//     if (Array.isArray(children)) {
//         currentElement = children[0]
//     }

//     console.log(currentElement);
}

//===================================================//

