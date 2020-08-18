/*
 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

            			let users = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}];



- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
- змінити цей текст використовуючи селектори id, class,  tag
- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 - знайти всі елементі, які мають class
 - знайти всі параграфи ,та змінити текст на hello oktenweb!
 - знайти всі div та змінити ім колір на червоний

============
====class===
============

- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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

*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
*/



// //- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user1 = {
// 	name: 'vasya',
// 	age: 31,
// 	address: 'Lviv',
// }
// let user2 = {
// 	sername: 'saha',
// 	age: 11,
// 	address: 'Kiev',
// }
// let user3 = {
// 	sername: 'lesya',
// 	age: 29,
// 	address: 'Uman'
// }

// let user4 = {
// 	sername: 'max',
// 	age: 40,
// 	address: 'Che'
// }

// let user5 = {
// 	sername: 'kiril',
// 	age: 15,
// 	address: 'sochi'
// }

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// // Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let m = {
// 	mm: 'one',
// 	skils: ['a', 'aa'],
// 	wife: { name: 'one1' },
// }
// let m1 = {
// 	mm1: 'two',
// 	skils1: ['b', 'bb'],
// 	wife1: { name: 'two1' },
// }
// let m2 = {
// 	mm2: 'thre',
// 	skils2: ['c', 'cc'],
// 	wife2: { name: 'thre1' },
// }
// let m3 = {
// 	mm3: 'for',
// 	skils3: ['d', 'dd'],
// 	wife3: { name: 'for1' },
// }
// let m4 = {
// 	mm4: 'five',
// 	skils4: ['f', 'ff'],
// 	wife4: { name: 'five1' },
// }

// // - При помощи for in вывести все ключи всех объектов из задания 1
// for (let key in user1) { }
// console.log(user1)
// for (let key in user2) { }
// console.log(user2)
// for (let key in user3) { }
// console.log(user3)
// for (let key in user4) { }
// console.log(user4)
// for (let key in user5) { }
// console.log(user5)

// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(user1))
// console.log(Object.keys(user2))
// console.log(Object.keys(user3))
// console.log(Object.keys(user4))
// console.log(Object.keys(user5))
// console.log(Object.keys(m))
// console.log(Object.keys(m1))
// console.log(Object.keys(m2))
// console.log(Object.keys(m3))
// console.log(Object.keys(m4))

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// //  год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
// 	car1 = {
// 		year1: 1,
// 		power1: 1,
// 		color1: '1',
// 	},
// 	car2 = {
// 		year: 2,
// 		power: 2,
// 		color: '2',
// 	},
// 	car3 = {
// 		year: 3,
// 		power: 3,
// 		color: '3',
// 	},
// 	car4 = {
// 		year: 4,
// 		power: 4,
// 		color: '4',
// 	},
// 	car5 = {
// 		year: 5,
// 		power: 5,
// 		color: '5',
// 	},
// 	car6 = {
// 		year: 6,
// 		power: 6,
// 		color: '6',
// 	},
// 	car7 = {
// 		year: 7,
// 		power: 7,
// 		color: '7',
// 	},
// 	car8 = {
// 		year: 8,
// 		power: 8,
// 		color: '8',
// 	},
// 	car9 = {
// 		year: 9,
// 		power: 9,
// 		color: '9',
// 	},
// 	car10 = {
// 		year: 10,
// 		power: 10,
// 		color: '10',
// 	},
// ]
// console.log(cars)

// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// i = 0;
// while (i < cars.length) {
// 	i++;
// } console.log(cars)

// for (let i = 0; i < cars.length; i++) { }
// console.log(cars)

// for (const car of cars) { }
// console.log(cars)

// // - взять объекты из задания 1 и превратить каждый в json.
// let user1 = {
// 	name: 'vasya',
// 	age: 31,
// 	address: 'Lviv',
// }
// let user2 = {
// 	sername: 'saha',
// 	age: 11,
// 	address: 'Kiev',
// }
// let user3 = {
// 	sername: 'lesya',
// 	age: 29,
// 	address: 'Uman'
// }

// let user4 = {
// 	sername: 'max',
// 	age: 40,
// 	address: 'Che'
// }

// let user5 = {
// 	sername: 'kiril',
// 	age: 15,
// 	address: 'sochi'
// }
// let jsonUser1 = JSON.stringify(user1);
// let jsonUser2 = JSON.stringify(user2);
// let jsonUser3 = JSON.stringify(user3);
// let jsonUser4 = JSON.stringify(user4);
// let jsonUser5 = JSON.stringify(user5);

// // - взять json из задания 11 и превратить их
// //  обратно в объекты.(распарсить)
// let parsedUser1 = JSON.parse(jsonUser1);
// let parsedUser2 = JSON.parse(jsonUser2);
// let parsedUser3 = JSON.parse(jsonUser3);
// let parsedUser4 = JSON.parse(jsonUser4);
// let parsedUser5 = JSON.parse(jsonUser5);

// //  взять массив из задания 5,в цикле перебрать
// //  его объекты превратив их в json .  и сразу скоприовать в новый массив.
// let cars = [
// 	car1 = {
// 		year1: 1,
// 		power1: 1,
// 		color1: '1',
// 	},
// 	car2 = {
// 		year: 2,
// 		power: 2,
// 		color: '2',
// 	},
// 	car3 = {
// 		year: 3,
// 		power: 3,
// 		color: '3',
// 	},
// 	car4 = {
// 		year: 4,
// 		power: 4,
// 		color: '4',
// 	},
// 	car5 = {
// 		year: 5,
// 		power: 5,
// 		color: '5',
// 	},
// 	car6 = {
// 		year: 6,
// 		power: 6,
// 		color: '6',
// 	},
// 	car7 = {
// 		year: 7,
// 		power: 7,
// 		color: '7',
// 	},
// 	car8 = {
// 		year: 8,
// 		power: 8,
// 		color: '8',
// 	},
// 	car9 = {
// 		year: 9,
// 		power: 9,
// 		color: '9',
// 	},
// 	car10 = {
// 		year: 10,
// 		power: 10,
// 		color: '10',
// 	},
// ]
// let newCars = [];
// for (let i = 0; i < cars.length; i++) {
// 	cars[i] = JSON.stringify(cars[i]);
// 	newcars1 = newCars.concat(cars)
// }
// console.log(newcars1);

// let newCars = [];
// for (let i = 0; i < cars.length; i++) {
// 	newCars.push(JSON.stringify(cars[i]));
// }
// console.log(newCars);

// //	- Создать массив пользователей.
// // У каждого пользователя обязательно должено быть поле skills которое является массивом.
// // Проитерировать массив пользователей
// // и в каждом пользователе проитерировать его массив skills.
// // Скопировать все skills всех пользователей в отедльный массив
// const users = [
// 	{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
// 	{ name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
// 	{ name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
// 	{ name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
// 	{ name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
// ];
// let userSkills = [];
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i]
// 	for (let j = 0; j < users[i].skills.length; j++) {
// 		const skill = user.skills[j]
// 		userSkills.push(skill)
// 	}
// }
// console.log(userSkills);

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
// 	{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
// 	{ name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
// 	{ name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
// 	{ name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
// 	{ name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
// ];

// for (let i = 0; i < users.length; i++) {
// 	const user = users[i]
// 	for (let j = 0; j < users[i].skills.length; j++) {
// 		const skill = user.skills[j]
// 		userSkills.push(skill)
// 	}
// }
// console.log(userSkills);