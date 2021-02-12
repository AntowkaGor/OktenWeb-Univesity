// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let mas1 = [1,2,3,4,5];
// let mas2 = ['a','b','c','d','e'];
// let mas3 = [1,'a', true, 3, 'b'];
// let mas4 =[];
// mas4[0]= 1;
// mas4[2] = 'hello';
// console.log(mas4)
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0; i<10; i++) {
//     document.write(`<div>hello</div>`)
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i<10; i++) {
//     document.write(`<div>hello ${i}</div>`)
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<10){
//    document.write('<h1> text </h1>');
//     i++;
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<10){
//     document.write(`<h1> text ${i} </h1>`);
//     i++;
// }
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mas = [1,2,3,4,5,6,7,8,9,0];
// for (let i=0; i<mas.length; i++){
//     console.log(mas[i])
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let mas = ['a','b','c','d','e','q','w','r','t','y'];
// let i=0;
// while(i < mas.length){
//     console.log(mas[i])
//     i++
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mas = [1,'a',2, true, 'g', false, 5];
// for (let m of mas){
//     console.log(m)
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mas = [1,'a',2, true, 'g', false, 5, 8, 'k'];
// for (let m of mas){
//     if (typeof m === 'number'){
//         console.log(m)
//     }
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mas = [1,'a',2, true, 'g', false, 5, 8, 'k'];
// for (let m of mas){
//     typeof m ==='boolean'
//         ? console.log(m)
//         : '';
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mas = [1,'a',2, true, 'g', false, 5, 8, 'k'];
// let i=0;
// while(i<mas.length){
//     typeof mas[i]==='string'
//     ? console.log(mas[i])
//         : ''
//     i++;
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mas=[];
// mas[0]= 1;
// mas[1] = 'a';
// mas[2] = 3;
// for ( let m of mas ){
//     console.log(m)
// }
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if(i%2===0){
//         console.log(i);
//     }
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m = 1; m <= 2; m++) {
//     for (let s = 1; s <= 59; s++) {
//         console.log('sek:'+s)
//     }
//     console.log('min:'+m)
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 1; h <=2; h++) {
//     for (let m = 1; m <= 59; m++) {
//         if (h === 2 && m === 21){
//             break }
//         for (let s = 1; s <= 59; s++) {
//             console.log('sek:'+s)
//         }
//         console.log('min:'+m)
//     }
//
//     console.log('hour:'+h)
// }

// Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < mas.length; i++) {
//    str = str + mas[i]
// }
// console.log(str)
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let str = '';
// let i=0;
// while (i<mas.length){
//     str = str + mas[i]
//     i++
// }
// console.log(str)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let str = '';
// for (let m of mas){
//     str = str + m;
// }
// console.log(str)
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let str = '';
// for (let m in mas) {
//     str = str + mas[m]
// }
// console.log(str)
// =================
// =================
//
// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let mas = ['a', 'b', 'c'];
// for (let i = 1; i <=3; i++) {
//     mas.push(i)
// }
// console.log(mas)
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let mas = [1, 2, 3];
// let newMas = [];
// for (let i = mas.length; i > 0; i--) {
//    newMas.push(i)
// }
// console.log(newMas)
// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let mas = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
//    mas.push(i)
//  }
// console.log(mas)
// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let mas = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
//    mas.unshift(i);
//  }
// console.log(mas)
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let mas = ['js', 'css', 'jq'];
// let i = mas.shift()
// console.log(i)
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let mas = ['js', 'css', 'jq'];
// let i = mas.pop()
// console.log(i)
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let mas = [1, 2, 3, 4, 5];
// console.log(mas.slice(3));
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let mas = [1, 2, 3, 4, 5];
// console.log(mas.slice(0,2));
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let mas = [1, 2, 3, 4, 5];
// let newMAs = mas.splice(1, 2);
// console.log(mas);
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let mas = [1, 2, 3, 4, 5];
// let newMas = mas.splice(3,0, 'a', 'b','c');
// console.log(mas)
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let mas = [1, 2, 3, 4, 5];
// mas.splice(1,0, 'a', 'b');
// mas.splice(6,0, 'c');
// mas.splice(8,0,'e');
// console.log(mas)
// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i]%2 === 0){
//         console.log(mas[i]);
//     }
// }
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// let mas2 = [];
// for (const elements of mas) {
//    mas2.push(elements)
// }
// console.log(mas2);
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// let mas2 = [];
// for (let i = 0; i < mas.length; i++) {
//     mas2[i] = mas[i]
// }
// console.log(mas2);
// //
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<mas.length){
//     console.log(mas[i]);
//     i++
// }

//     2. перебрати його циклом for
// for (let j = 0; j < mas.length; j++) {
//     console.log(mas[j]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=0;
// while (i<mas.length){
//     if ( i % 2 !== 0){
//         console.log(mas[i]);
//     }
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < mas.length; i++) {
//     if ( i % 2 !== 0){
//         console.log(mas[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0;
// while (i<mas.length){
//     if ( mas[i]% 2 === 0){
//         console.log(mas[i]);
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < mas.length; i++) {
//     if ( mas[i]% 2 === 0){
//         console.log(mas[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < mas.length; i++) {
//     if ( mas[i]%3 === 0){
//       mas[i] = 'okten';
//     }
// }
// console.log(mas);
// 8. вивести масив в зворотньому порядку.
// let rev = mas.reverse()
// console.log(rev);
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let mas =[];
// for (let i = 0; i < 100; i++) {
//   if (i %2 ===0){
//       mas.push(i)
//   }
// }
// console.log(mas);
// - заповнити його 50 непарними числами за допомоги циклу.
// let mas =[];
// for (let i = 0; i < 100; i++) {
//   if (i %2 !==0){
//       mas.push(i)
//   }
// }
// console.log(mas);
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let mas =[];
// for (let i = 0; i < 10; i++) {
//  mas[i] =Math.floor(Math.random() * (732 - 8))  + 8;
// }
// console.log(mas);
// 2. вывести на консоль  каждый третий елемент
// for (let i = 2; i < mas.length; i+=3) {
//     console.log(mas[i]);
// }
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// for (let i = 2; i < mas.length; i+=3) {
//     if (mas[i] %2 ===0 ){
//         console.log(mas[i]);
//     }
//
// }
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let mas2= [];
// for (let i = 2; i < mas.length; i+=3) {
//     if (mas[i] %2 ===0 ){
//         mas2.push(mas[i])
//     }
// }
// console.log(mas2);
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i+1] %2 ===0 ){
//         console.log(mas[i]);
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// let sum = 0;
// let mas = [100,250,50,168,120,345,188];
// for (let i = 0; i < mas.length; i++) {
//     sum += mas[i]
// }
//     let midChek = sum / mas.length;
//     console.log(midChek);


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let mas = [];
// let mas2 = [];
// for (let i = 0; i < 10; i++) {
//     mas[i] =Math.floor(Math.random() * (10 - 1))  + 1;
//    mas2.push(mas[i]*5)
//     console.log(mas);
// }
// console.log(mas2);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// // додати його в інший масив.
// let mas = [1, 3, 5, 'a', true, 'd', 4, false ];
// let mas2 = [];
// for (let i = 0; i < mas.length; i++) {
//   if (typeof  mas[i] === 'number' ){
//       mas2.push(mas[i]);
//   }
// }
// console.log(mas2);


 /*
 bonus:
  - Створити масив автівок з полями id , model, producer ,tankVolume, horsePower, image. 15 об'єктів.
Вивести увесь масив в документ застилізувавши його по 2 елементи в ряд
 */
// const cars = [
//     {id:1, model: 'a', producer: 'AA', tankVolume:1, horsePower:10, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:2, model: 'b', producer: 'BB', tankVolume:2, horsePower:20, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:3, model: 'c', producer: 'CC', tankVolume:3, horsePower:30, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:4, model: 'd', producer: 'DD', tankVolume:4, horsePower:40, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:5, model: 'e', producer: 'EE', tankVolume:5, horsePower:50, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:6, model: 'f', producer: 'FF', tankVolume:6, horsePower:60, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:7, model: 'q', producer: 'QQ', tankVolume:7, horsePower:70, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:8, model: 'w', producer: 'WW', tankVolume:8, horsePower:80, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:9, model: 'e', producer: 'EE', tankVolume:9, horsePower:90, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:10, model: 'r', producer: 'RR', tankVolume:10, horsePower:100, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:11, model: 't', producer: 'TT', tankVolume:11, horsePower:110, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:12, model: 'y', producer: 'YY', tankVolume:12, horsePower:120, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:13, model: 'u', producer: 'UU', tankVolume:13, horsePower:130, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
//     {id:14, model: 'i', producer: 'II', tankVolume:14, horsePower:140, url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQNNKFjzHwR6kltqbpR1SkCIDGe5esDia1g&usqp=CAU'},
// ];
//
// const enterText = document.querySelector('.some-text');
//
// for (let car of cars){
//     const div = document.createElement('div');
//     const  h1 = document.createElement('h1');
//     const p = document.createElement('p');
//
//     h1.innerHTML = `model:${car.model} <br> id:${car.id}`;
//     p.innerHTML = `producer: ${car.producer}<br>tankVolume: ${car.tankVolume}<br>horsePower: ${car.horsePower}`;
//     div.style.backgroundImage = `url(${car.url})`;
//
//     div.appendChild(h1);
//     div.appendChild(p);
//     enterText.appendChild(div);
// }
