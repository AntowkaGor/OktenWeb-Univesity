// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn = document.querySelector('.btn')
// btn.onclick=()=>{
//     const textD = document.getElementById('js-text')
//     textD.hidden
//        ? textD.hidden = false
//        : textD.hidden = true
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const btn = document.querySelector('.btn')
// btn.onclick=()=>{ btn.style.display= 'none'}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const formBtn = document.forms.humanAge.submit
// formBtn.onclick = () => {
//     document.forms.humanAge.age.value < 18
//         ? alert('you are yong')
//             : alert('OK')
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// const menuList = document.querySelector('.js-top-menu')
// menuList.onclick = () => {
//     const subMenu = document.querySelector('.js-sub-menu')
//     subMenu.hidden
//     ? subMenu.hidden = false
//     : subMenu.hidden = true
// }

// - ???????????????????Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// const arr = [
//     {title : 'lorem-1', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem-2', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem-3', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem-4', body:'lorem ipsum dolo sit ameti'},
// ]
// const arrD = document.querySelector('.some-text');
//
// arr.forEach((value, index) => {
//     const innerDiv = document.createElement('div')
//     innerDiv.innerHTML = `<h3>${value.title}</h3> <p>${value.body}</p><button id="btn-some-text" ">BUTTON</button>`
//     arrD.appendChild(innerDiv)
//     const btn = document.querySelectorAll('#btn-some-text')
//     btn.onclick =()=> {
//         value.body.hidden
//         ? value.body.hidden = false
//             : value.body.hidden = true
//     }
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const form1 = document.forms.form1.submit
// const form2 = document.forms.form2.submit
// form1.onclick=ev=>{
//     ev.preventDefault()
//     console.log(document.forms.form1.age.value);
//     console.log(document.forms.form1.name.value);
//     document.forms.form1.age.value = ''
//     document.forms.form1.name.value = ''
// }
// form2.onclick=ev=>{
//     ev.preventDefault()
//     console.log(document.forms.form2.age.value);
//     console.log(document.forms.form2.name.value);
//     document.forms.form2.age.value = ''
//     document.forms.form2.name.value = ''
// }

// - Створити функцію, яка генерує табл ицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const tables = document.querySelector('.some-text')
// function someTable (tr,td, tag) {
// const table = document.createElement('table')
//     for (let i = 0; i < tr; i++) {
//         const tr = document.createElement('tr')
//         for (let j = 0; j < td; j++) {
//             const td = document.createElement('td')
//             tr.appendChild(td)
//             table.appendChild(tr)
//             td.innerText = i + '' + j
//         }
//
//     }
//    return  tables.appendChild(table)
// }
// let newTable = someTable(5,3, tables)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const tables = document.querySelector('.some-text')
// const formTable = document.forms.tableJS.createTable
// formTable.onclick = ev => {
//     ev.preventDefault()
//     const rows = document.forms.tableJS.rows.value
//     const cols = document.forms.tableJS.cols.value
//     const text = document.forms.tableJS.innerText.value
//
//     const table = document.createElement('table')
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr')
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td')
//             tr.appendChild(td)
//             table.appendChild(tr)
//             td.innerText = text
//         }
//
//     }
//    tables.appendChild(table)
//
//     document.forms.tableJS.rows.value =''
//     document.forms.tableJS.cols.value = ''
//     document.forms.tableJS.innerText.value = ''
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     { id: 1, img_url: 'img/1.png' },
//     { id: 2, img_url: 'img/2.png' },
//     { id: 3, img_url: 'img/3.png' },
//     { id: 4, img_url: 'img/4.png' },
//     { id: 5, img_url: 'img/5.png' },
//     { id: 6, img_url: 'img/6.png' },
//     { id: 7, img_url: 'img/7.png' },
//     { id: 8, img_url: 'img/8.png' },
//     { id: 9, img_url: 'img/9.png' },
//     { id: 10, img_url: 'img/10.png' },
// ];
//
// let carusel = document.querySelector('#carusel');
// let img = document.createElement('img');
// let btnOne = document.createElement('button');
// let btnTwo = document.createElement('button');
// let i = 0;
//
// btnOne.innerText = 'Pre';
// btnTwo.innerText = 'Next';
//
// img.src = imgArray[i].img_url;
//
// carusel.appendChild(img);
// carusel.appendChild(btnOne);
// carusel.appendChild(btnTwo);
//
//
// btnOne.onclick = () => {
//     i - 1 < 0
//         ? i = imgArray.length - 1
//         : i = i - 1;
//
//     img.src = imgArray[i].img_url;
// }
// btnTwo.onclick = () => {
//     i + 1 > imgArray.length - 1
//         ? i = 0
//         : i = i + 1;
//     img.src = imgArray[i].img_url;
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const array = ['упс', 'ой', 'ха','ку','па']
// document.forms.text.checkText.onclick = () => {
//     function check (array){
//         for (const arg of array) {
//             if (document.forms.text.errorText.value.toLowerCase() === arg){
//                 alert('text wrong')
//             }else{
//                 console.log(document.forms.text.errorText.value.toLowerCase());
//             }
//         }
//         document.forms.text.errorText.value = " "
//     }
//     check(array)
// }

// - ????????????Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const array = ['упс', 'ой', 'ха','ку','па']
// document.forms.text.checkText.onclick = () => {
//     function check (array){
//         for (const arg of array) {
//             if (document.forms.text.errorText.value.toLowerCase().indexOf(arg) === -1){
//                 alert('text wrong')
//             }else{
//                 console.log(document.forms.text.errorText.value.toLowerCase());
//             }
//         }
//         document.forms.text.errorText.value = " "
//     }
//     check(array)
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const content = document.getElementById('content')
// const wrap = document.getElementById('wrap')
// const arrayH2 = document.getElementsByTagName('h2')
// const ul = document.createElement('ul')
// for (let i = 0; i < arrayH2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor' + (i+1);
//     a.href = '#' + anchor;
//     arrayH2[i].setAttribute('id', anchor);
//     a.innerHTML = arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
//
// content.appendChild(ul);
// content.style = "width : 30%; float : left";
// wrap.style = "width : 70%; float : left";
// }


// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
const status = document.forms.textUser.status;
const age = document.forms.textUser.ages;
const city = document.forms.textUser.city;
const filterUser = document.getElementById('filterUsers');

function renderUsers (array){
    array.forEach( element=>{
        filterUser.innerHTML = JSON.stringify(element)
    })
}
renderUsers(usersWithAddress)

status.onclick =() =>{
    let myArray = JSON.parse(JSON.stringify(usersWithAddress))
    if(status.checked) {
        myArray = myArray.filter(value => {!value.status})
    }else{
     filterUser = " "
    }
}

age.onclick =() =>{
    let myArray = JSON.parse(JSON.stringify(usersWithAddress))
    age.checked
        ? myArray = myArray.filter(value => value.age >= 29)
        : filterUser = " "
}

city.onclick =() =>{
    let myArray = JSON.parse(JSON.stringify(usersWithAddress))
    city.checked
        ? myArray = myArray.filter(value => value.address.city === 'Kyiv')
        : filterUser = " "
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
//
