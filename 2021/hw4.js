// - створити функцію яка виводить масив
// let mas = [1,3,4,5,7,2]
//  function rendMasiv(mas){
//      for (let i = 0; i < mas.length; i++) {
//          console.log(mas[i]);
//      }
// }
// rendMasiv(mas);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function newMas (length,min,max){
//     let mas = [];
//     for (let i = 0; i < length; i++) {
//       mas.push(min[i] = Math.floor(Math.random() * (max - min)) + min);
//     }
//     return mas;
// }
// const array1 = newMas(10, 10,50);
// rendMasiv(array1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function smallNumber(a,b,c){
//     console.log(Math.min(a,b,c))
// }
// smallNumber(10,4,8)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function smallNumber(a,b,c){
//     console.log(Math.max(a,b,c))
// }
// smallNumber(10,4,8)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function smallNumber(){
//    let max = arguments[0];
//    let min = arguments[0];
//     for (const number of arguments) {
//         if (number > max) max = number;
//         if (number < min) min = number;
//     }
//     console.log('max', max);
//     return min
// }
// let min = smallNumber(10,4,8);
// console.log('min', min);

// - створити функцію яка виводить масив
// let mas = [1,3,5,6,7,8,9];
// function returnMas (mas){
//     let item = 0
//     for (let i = 0; i < mas.length; i++) {
//        item = mas[i];
//         console.log(item);
//     }
//     return item;
// }
// returnMas(mas)

// - створити функцію яка повертає найбільше число з масиву
// let mas = [10,3,5,6,7,8,19];
// function returnMaxNumber (mas){
//     let max = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//       if(mas[i] > max)
//         max = mas[i]
//     }
//     return  max;
// }
// let masArray = returnMaxNumber(mas);
// console.log(masArray);


// - створити функцію яка повертає найменьше число з масиву
// let mas = [10,3,5,6,7,8,9];
// function returnMinNumber (mas){
//     let min = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//       if(mas[i] < min) {
//           min = mas[i]
//       }
//     }
//     return  min;
// }
// let masArray = returnMinNumber(mas);
// console.log(masArray);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let mas = [10,3,5,6,7,8,9];
// function sumOfNumber (mas){
//     let sumator = 0;
//       for (let i = 0; i < mas.length; i++) {
//        sumator += mas[i] ;
//     }
//     return sumator;
// }
// let sumArray = sumOfNumber(mas);
// console.log(sumArray);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mas = [10,3,5,6,7,8,9];
// function avarageNumber (mas){
//      let avarege = 0;
//     for (const item of mas) {
//         avarege += item
//     }
//     return Math.round( avarege/mas.length)
// }
// let avarageArray = avarageNumber(mas);
// console.log(avarageArray);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let mas =[
//     {userId: 1, id: 1, title: "delectus aut autem", completed: false,},
//     {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false,},
//     {userId: 1, id: 3, title: "fugiat veniam minus", completed: false,},
//     {userId: 1, id: 4, title: "et porro tempora", completed: true,},
//     3,
//     [4,5,1],
//     5,
//     {userId: 1, id: 4, title: "et porro tempora", completed: true,},
// ];
// function countFields (arrayObj){
//     let key = 0 ;
//     for (const item of arrayObj) {
//        if (typeof item === 'object' && !Array.isArray(item)){
//            key ++;
//        }
//     }
//     return key;
// }
// let objectValue = countFields (mas);
// console.log(objectValue);


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let mas =[
//     {userId: 1, id: 1, title: "delectus aut autem", completed: false,},
//     {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false,},
//     {userId: 1, id: 3, title: "fugiat veniam minus", completed: false,},
//     {userId: 1, id: 4, title: "et porro tempora", completed: true,},
//     3,
//     [4,5,1],
//     5,
//     {userId: 1, id: 4, title: "et porro tempora", completed: true,},
// ];
// function countFields (arrayObj){
//     let key = 0 ;
//     for (const item of arrayObj) {
//        if (typeof item === 'object' && !Array.isArray(item)){
//            for (const itemKey in item) {
//                key++
//            }
//        }
//     }
//     return key;
// }
// let objectValue = countFields (mas);
// console.log(objectValue);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let m1 = [1,2,3,4];
// let m2 = [2,3,4,5];
// function splitArray (m1,m2) {
//  let m3 = [];
//     for (let i = 0; i < m1.length; i++) {
//       m3.push(m1[i] + m2[i]);
//     }
//     return m3
// }
// let m3 = splitArray(m1,m2)
// console.log(m3);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array1 =[1,2,3,4]
// function changeIndex(arr, index) {
//     let array = [...arr];
//     if (index < arr.length-1){
//         let temp = array[index];
//         array[index] = array[index+1]
//         array[index+1] = temp
//     }
//     else{
//         console.log('error');
//     }
//     return array
// }
// let changingIndex = changeIndex (array1, 2);
// console.log(array1);
// console.log(changingIndex);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
 // [0,0,1,0]   => [1,0,0,0]
// let array1 = [1,0,6,0,3];
// let array1 = [0,1,2,3,4];
// let array1 = [0,0,1,0];
// function zeroEnd(arr) {
//     let zero = [];
//     let number = [];
//     for (const arrElement of arr) {
//         if (arrElement === 0){
//             zero.push(0)
//         }else{
//             number.push(arrElement)
//         }
//     }
//     return [...number,...zero]
// }
// let takeMas =  zeroEnd(array1)
// console.log(takeMas);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addDiv() {
//     let addDiv = document.createElement("div");
//     addDiv.className = 'new-div';
//     addDiv.innerText = "Hello owu" ;
//     document.body.appendChild(addDiv);
// }
// addDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addDiv() {
//     let addElement= document.createElement(prompt ('enter some element') || 'div');
//     addElement.className = 'new-div';
//     addElement.innerText = prompt('enter some text') || "Hello owu";
//     document.body.appendChild(addElement);
// }
// addDiv();

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = ['acura', 'mazda', 'lada', 'nisan', 'porshe']
// function addDiv(arr) {
//    let div = document.getElementsByClassName('some-text')[0];
//    let ol = document.createElement('ol')
//     for (let i = 0; i < arr.length; i++) {
//         let car = arr[i];
//         let li = document.createElement('li');
//         li.innerText = car;
//         ol.appendChild(li)
//     }
//     div.appendChild(ol);
// }
// addDiv(cars);

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
//
//
//
//
//
//
