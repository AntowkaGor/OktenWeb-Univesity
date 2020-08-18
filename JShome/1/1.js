console.log(sss);

let name = 'Viktor';
let age = 24;
let girl = folse;

age = 'Twenty five'

/*
const- змінна яка не міняеться, тільки для читання

*/


console.log(age);//виводить
alert(name);// тоже выводит но лучше не юзать так как юзары их видят

document.write(girl);// пишет сразу в HTML, не использовать так как порушит структуру ХТМЛ файла


const userInput = prompt(message: 'Hoe old are you');
document.write('<br>');
document.write('<br>');
document.write(userInput);

console.log(1 + '2');// всегда будет слово (конкотинация)
console.log(1 + true + true);// 3  true  всегда =1
/*
в консоле черным отображаются строки а синим числы
*/

console.log(10 - 'Test');//NONE

console.log(typeof ... )// показывает к какому значению отностить(число строчка или булиан)

//ставим + перед промт или перед сменной и меняеться стринг в намбер
const number1 = +prompt(message: 'Enter number 1');
const number2 = +prompt(message: 'Enter number 2');

console.log(number1 + number2)ж


// помимо prompt  есть еще confirm

const is18 = confirm(Ти дорослий ?);

console.log(is18);//выводит только тру или фолс

/*
логические операторы
< > <= >= ===
18 == '18'  - true
18 ==='18'  - folse
18 != '18'  - folse
*/
const userAge = +prompt(message: 'Enter Age');

if (Enter Age > 18) {
    alert('ТИ вже великий )')
}else {
    if (userLogin === 'admin') {
        alert('ТИ вже великий )')
    } else {
        alert('ТИ ще малий )')
    }

}



// || - or
// && - and

if (userLogin === 'admin' || userAge >= 18) {
    alert('ТИ вже великий )')
} else {
    alert('ТИ ще малий )')
}

