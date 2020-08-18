
//присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
//Вывести каждую при помощи console.log , alert, document.write

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let minus999 = -999;
let oneTwoThre = 123;
let numberPi = 3.14;
let twoAndSeven = 2.7;
let sixten = 16;
let myTrue = Boolean(true);
let myFalse = Boolean(false);

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(minus999);
console.log(oneTwoThre);
console.log(numberPi);
console.log(twoAndSeven);
console.log(sixten);
console.log(myTrue);
console.log(myFalse);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(minus999);
alert(oneTwoThre);
alert(numberPi);
alert(twoAndSeven);
alert(sixten);
alert(myTrue);
alert(myFalse);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(one);
document.write(ten);
document.write(minus999);
document.write(oneTwoThre);
document.write(numberPi);
document.write(twoAndSeven);
document.write(sixten);
document.write(myTrue);
document.write(myFalse);

// переопределить каждую переменную из задания 1 дав им произвольные значения
//Вывести каждую при помощи console.log , alert, document.write

hello = 'privet';
owu = 'A';
com = 'N';
ua = 'T';
one = 1.;
ten = 08.;
minus999 = 1989;
oneTwoThre = 'start';
numberPi = 'vNovom';
twoAndSeven = 'napravlenii';
sixten = 'dan';
myTrue = Boolean(true);
myFalse = Boolean(false);

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(minus999)
console.log(oneTwoThre);
console.log(numberPi);
console.log(twoAndSeven);
console.log(sixten);
console.log(myTrue);
console.log(myFalse);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(minus999)
alert(oneTwoThre);
alert(numberPi);
alert(twoAndSeven);
alert(sixten);
alert(myTrue);
alert(myFalse);

document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(one);
document.write(ten);
document.write(minus999)
document.write(oneTwoThre);
document.write(numberPi);
document.write(twoAndSeven);
document.write(sixten);
document.write(myTrue);
document.write(myFalse);

// Создать 3 числовых и 3 стринговых константы.
//Вывести каждую при помощи console.log , alert, document.write

const myName = 'Anton';
const mySername = 'Goryshchenko';
const myMiddelName = 'Yriiovich';
const birthDay = 01;
const birthMonth = 08;
const birthYear = 1989;

console.log(myName);
console.log(mySername);
console.log(myMiddelName);
console.log(birthDay);
console.log(birthMonth);
console.log(birthYear);

alert(myName);
alert(mySername);
alert(myMiddelName);
alert(birthDay);
alert(birthMonth);
alert(birthYear);

document.write(myName);
document.write(mySername);
document.write(myMiddelName);
document.write(birthDay);
document.write(birthMonth);
document.write(birthYear);


//№4 при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. 
//Вывести каждую при помощи console.log , alert, document.write

let sername = prompt('как твоя фамилия ?', 'Горященко');
let name = prompt('как тебя зовут ?', 'Антон');
let middelName = prompt('как твое очество ?', 'Юриевич');

console.log(sername);
console.log(name);
console.log(middelName);

alert(sername);
alert(name);
alert(middelName);

document.write(sername);
document.write(name);
document.write(middelName);

//№5 Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = (sername + name + middelName);

//Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let wifeSername = prompt('как твоя фамилия ?', 'Горященко');
let wifeName = prompt('как тебя зовут ?', 'Марина');
let wifeMiddelName = prompt('как твое очество ?', 'Викторовна');

let personWife = (wifeSername + wifeName + wifeMiddelName);

//№6 при помощи prompt() получить 3 числа.
//Привести их к числовому типу при помощи +. вывести их в консоль.

let Number1 = prompt('число первое', '1');
let Number2 = prompt('число второе', '2');
let Number3 = prompt('число третье', '3');

console.log(+Number1);
console.log(+Number2);
console.log(+Number3);

// при помощи prompt() получить 4 числа.
// Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let number1 = parseInt(prompt('число первое', '1'));
let number2 = parseInt(prompt('число второе', '2'));
let number3 = parseInt(prompt('число третье', '3'));
let result = number1 + number2 + number3
console.log(result);

// при помощи prompt()  получить 3 числа с плавающей точекой.
// при помощи parseFloat привести их к соответсвующему типу.
//Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let numberFloat1 = parseFloat(prompt('первое плавующее', '1.1'));
let numberFloat2 = parseFloat(prompt('второе плавующее', '2.5'));
let numberFloat3 = parseFloat(prompt('третье плавующее', '3.8'));

let floatResult = numberFloat1 + numberFloat2 + numberFloat3;

console.log(floatResult);

//- при помощи prompt()  получить 3 числа с плавающей точекой.
// Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let numberFloatMath1 = Math.round(prompt('первое плавующее', '1.1'));
let numberFloatMath2 = Math.round(prompt('второе плавующее', '2.5'));
let numberFloatMath3 = Math.round(prompt('третье плавующее', '3.8'));

let mathFloatResult = numberFloatMath1 + numberFloatMath2 + numberFloatMath3;
console.log(mathFloatResult);

// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
//Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью.
//При помощи Math.pow возвести первое число в степень второго числа.

let number1 = prompt('первое целое число', '2');
let number2 = prompt('второе целое число', '4');

let numberMathPow = Math.pow(number1, number2);

console.log(numberMathPow);


//При помощи оператора определения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));


//Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//В одинаковых выражениях в задании не использовать два одинаковых оператора.
//Каждое выражение вложить в свою переменную
//    5 ? 6 -> true
//    5 ? 6 -> false
//    5 ? 6 -> false
//    5 ? 6 -> false
//    10 ? 10 -> true
//    10 ? 10 -> true
//    10 ? 10 -> false
//    10 ? 10 -> false
//    10 ? 10 -> false
//    123 ? '123' -> false
//    123 ? '123' -> true

let a = 5 < 6;
let b = 5 > 6;
let c = 5 == 6;
let d = 5 === 6;
let e = 10 === 10;
let f = 10 == 10;
let g = 10 > 10;
let aa = 10 < 10;
let bb = 10 != 10;
let cc = 123 === '123';
let dd = 123 == '123';

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);


//Дополнительно:
//- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль 
/// И (&&)  ИЛИ (||)  НЕ (!)  true false true true true true false true true true true true true false true false/// 
console.log(132 > 100 && 45 < 12);
console.log(34 > 33 && 23 < 90);
console.log(99 > 100 && 45 > 12);
console.log(132 > 100 || 45 > 12);
console.log(111 > 11 || 45 < 111);
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3 / 'owu'));
console.log((111 > 11 || 45 < 111) || !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));