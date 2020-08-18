
/*

***- беремо завдання з правилами з укроку №3 :
Та робимо це функцією.При цьому правила отримувати через аргумент.
"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
"
===========додаткове від віктора========
1) Точная степень двойки.
Дано натуральное число N.
Выведите слово YES, если число N является точной степенью двойки,
или слово NO в противном случае.
Операцией возведения в степень пользоваться нельзя!

2) Deep Copy
реалізувати глибоке копіювання обєкту за допомогою рекурсій

3) Flat
Вирівняти багаторівневий масив в однорівневий
[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
===========додаткове========
*/



// //створити функцію яка виводить маси
// let user = ['a', 'b', 'c']
// function masiv(array) {
// 	console.log(array);
// }
// masiv(user);
// 
// // створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попередню функцію.
// function pushNumber() {
// 	let user = []
// 	for (let i = 0; i < 5; i++)
// 		user.push(Math.round(Math.random() * 10));
// 	return user
// }
// masiv(pushNumber())

// //- створити функцію яка приймає три числа 
// //та виводить та повертає найменьше.
// function minNumber(a, b, c) {
// 	console.log(Math.min(a, b, c))
// }
// minNumber(10, 15, 3);

// // створити функцію яка приймає три числа 
// // та виводить та повертає найбільше.
// function maxNumber(a, b, c) {
// 	console.log(Math.max(a, b, c))
// }
// maxNumber(10, 15, 3);

// //- створити функцію яка приймає будь-яку кількість чисел, 
// //повертає найменьше, а виводить найбільше
// function minimatorMaximator() {
// 	let min = arguments[0];
// 	let max = arguments[0];

// 	for (let i = 1; i < arguments.length; i++) {
// 		if (arguments[i] < min) {
// 			min = arguments[i]
// 		}
// 		if (arguments[i] > max) {
// 			max = arguments[i]
// 		}
// 	}
// 	console.log(max + 'MAX')
// 	return min
// }
// let min = minimatorMaximator(2, 6, 8, 12, 61, -2, 51, -10);
// console.log(min);

// //  створити функцію яка повертає найбільше число з масиву

// const arrayOfNumbers = [1, 200, 6, 55, 10, 15];
// function maxOfNumberOfArray(arr) {
// 	let max = arr[0];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > max)
// 			max = arr[i]
// 	}
// 	console.log(max + 'MAX')
// }
// maxOfNumberOfArray(arrayOfNumbers)

// // створити функцію яка повертає найменьше число з масиву
// const arrayOfNumbers = [1, 200, 6, 55, 10, 15];
// function minOfNumberOfArray(arr) {
// 	let min = arr[0];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < min)
// 			min = arr[i]
// 	}
// 	console.log(min + 'MIN')
// }
// minOfNumberOfArray(arrayOfNumbers)

// створити функцію яка повертає найменьше число з масиву
// let masuv = [1, 2, 6, 10, 15];
// function minNumberOfMasuv() {
// 	console.log(Math.min('masuv'));
// }
// minNumberOfMasuv()

// //  створити функцію яка приймає масив чисел
// //  та складає значення елементів масиву та повертає його.
// let mnumber = [1, 3, 3, 7, 6]
// let sum = 0;
// function sumMasNumber() {
// 	for (let i = 0; i < mnumber.length; i++) {
// 		sum = sum + parseInt(mnumber[i]);
// 	}
// 	console.log(sum);
// }
// sumMasNumber()

// // - створити функцію яка приймає масив чисел
// //  та повертає середнє арифметичне його значень.
// let mnumber = [2, 2, 2, 2, 2]
// let sum = 0;
// function sumMasMidleNumber() {
// 	for (let i = 0; i < mnumber.length; i++) {
// 		sum = (sum + parseInt(mnumber[i]) / mnumber.length);
// 	}
// 	console.log(sum);
// }
// sumMasMidleNumber()

// // Створити функцію яка приймає масив будь яких объектів,
// // 	та повертає значення кількості об'єктів в масиві
// let users = [
// 	1,
// 	{ name: 'vasya', age: 31, status: false },
// 	{ name: 'petya', age: 30, status: true },
// 	{ name: 'kolya', age: 29, status: true },
// 	'dfg',
// 	{ name: 'olya', age: 28, status: false },
// 	{ name: 'max', age: 30, status: true },
// 	3,
// 	{ name: 'max', age: 30, status: true },
// ]
// function findArrayLength(arr) {
// 	let x = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			x += 1;
// 		}
// 	}
// 	console.log(x);
// 	return x;
// }
// findArrayLength(users)

// //Створити функцію яка приймає масив будь яких объектів, 
// // та повертає загальн кількість полів в них
// let users = [
// 	1,
// 	{ name: 'vasya', age: 31, status: false },
// 	{ name: 'petya', age: 30, status: true },
// 	{ name: 'kolya', age: 29, status: true },
// 	'dfg',
// 	{ name: 'olya', age: 28, status: false },
// 	{ name: 'max', age: 30, status: true },
// 	3,
// 	{ name: 'max', age: 30, status: true },
// 	// null,
// 	//undefined
// ]
// function sumOfKeys(arr) {
// 	let sum = 0;
// 	for (let obj of arr) {
// 		if (typeof obj === 'object') {
// 			let keys = Object.keys(obj)
// 			console.log(keys)
// 			sum += keys.length
// 		}

// 	}
// 	return sum

// }
// console.log(sumOfKeys(users))

// створити функцію 
// яка скаладає значення елементів з однаковими індексами 
// та повертає новий результуючий масив.
//Приклад [1,2,3,4] 
//        [2,3,4,5] 
//    --> [3,5,7,9]

// function arraySumator(arr1, arr2) {
// 	const resultArr = [];

// 	for (let i = 0; i < arr1.length; i++) { //нет разнци какой масив мотать arr1 or arr2
// 		const sumOfElements = arr[i] + arr[i]

// 		resultArr.push(sumOfElements)
// 	}
// 	return resultArr;
// }
// let someArr = arraySumator(arr1: [1, 2, 3, 4], arr2: [2, 3, 4, 5])
// console.log(someArr)


//2й вариант когда больше чисел и не равное количество
//Приклад [1,2,3,4,9,6] 
//        [2,3,4,5] 
//    --> [3,5,7,9,9,6]
// function arraySumator(arr1, arr2) {
// 	const resultArr = [];
// 	let  iterationCount = 0;

// 	if(arr1.length> arr2.length){
// 		iterationCount = arr1.length
// 	} else {
// 		iterationCount = arr2.length
// 	}

// 	for (let i = 0; i < iterationCount; i++) { 
// 		const sumOfElements = (arr[i] || 0) + (arr[i] || 0);

// 		resultArr.push(sumOfElements)
// 	}
// 	return resultArr;
// }
// let someArr = arraySumator(arr1: [1,2,3,4,9,6], arr2: [2, 3, 4, 5])
// console.log(someArr)

// - *** створити функцію яка 
//приймає масив та число "i", 
//та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function itemChanger(array, i) {
// 	const buffe = array[i];

// 	array[i] = array[i + 1]
// 	arra[i + 1] = buffe;

// 	console.log(array)
// }
// itemChanger([3, 5, 7, 9, 10, 6], i: 4)

// //***** как отобразить обект в теле документа
// let natali = {name: 'Iron', surname: 'Bird'}
// document.write(natali)
// //делаем строчку с обекта
//  document.write(JSON.stringify(natali))



// // створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.  
// // Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]

// function lastNul(arr) {
// 	let newlastZero = [];
// 	let numbers = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0)
// 			newlastZero.push(0)
// 		else
// 			numbers.push(arr[i])
// 	}
// 	let lastNul = numbers.concat(newlastZero)
// 	console.log(lastNul)
// }
// lastNul([1, 0, 6, 0, 3])


/****************************************************/
// // 1) Точная степень двойки.
// // Дано натуральное число N.
// // Выведите слово YES, если число N является точной степенью двойки,
// // или слово NO в противном случае.
// // Операцией возведения в степень пользоваться нельзя!

// function rec(n) {

// 	const res = n / 2
// 	if (res > 1) {
// 		return rec(n: n / 2)
// 	}

// 	if (res < 1) {
// 		return 'NO'
// 	}
// 	return 'YES'
// }

// console.log(rec(n: 4))



// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
// //             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// //             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
// // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let usersWithId =
// 	[{ id: 1, name: 'vasya', age: 31, status: false },
// 	{ id: 2, name: 'petya', age: 30, status: true },
// 	{ id: 3, name: 'kolya', age: 29, status: true },
// 	{ id: 4, name: 'olya', age: 28, status: false },
// 	];
// let citiesWithId = [
// 	{ user_id: 3, country: 'USA', city: 'Portland' },
// 	{ user_id: 1, country: 'Ukraine', city: 'Ternopil' },
// 	{ user_id: 2, country: 'Poland', city: 'Krakow' },
// 	{ user_id: 4, country: 'USA', city: 'Miami' },
// ];

// for (let i = 0; i < usersWithId.lenght; i++) {
// 	for (let j = 0; j < citiesWithId.length; j++) {
// 		if (usersWithId[i].id === citiesWithId[j].user_id) {
// 			usersWithId[i].address = citiesWithId[j]
// 		}
// 	}
// } console.log(usersWithId);

// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// function addDivToBody() {
// 	let div = document.createElement('div')
// 	div.innerHTML = "Hello owu";
// 	document.body.appendChild(div);
// }
// addDivToBody()

// // - Додає в боді елемент з текстом . 
// //Тип елементу та текст отримати через аргументи
// function addPToBody(element) {
// 	let p = document.createElement('p')
// 	p.innerHTML = "Hello owu новый текст в параграфе";
// 	document.body.appendChild(p);
// }
// addPToBody('p')

// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту 
// //в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
// function getCars(cars, id) {
// 	let elementById = document.createElement('div');
// 	elementById.setAttribute("id", id);
// 	document.body.appendChild(elementById)

// 	for (let car of cars) {
// 		let div = document.createElement('div');
// 		div.innerText = car.name + '' + car.model + '' + car.doors + '' + car.transmission;
// 		elementById.appendChild(div)
// 	}
// }
// let cars = [
// 	{
// 		name: "Nissan",
// 		model: "Leaf",
// 		doors: 4,
// 		transmission: "automatic"
// 	},
// 	{
// 		name: "Nissan",
// 		model: "Maxima",
// 		doors: 4,
// 		transmission: "automatic"
// 	},
// 	{
// 		name: "Ford",
// 		model: "Focus",
// 		doors: 4,
// 		transmission: "automatic"
// 	},
// 	{
// 		name: "Ford",
// 		model: "Escape",
// 		doors: 4,
// 		transmission: "automatic"
// 	}
// ]
// getCars(cars, 'carsId')

