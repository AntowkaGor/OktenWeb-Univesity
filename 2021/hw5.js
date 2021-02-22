// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості:
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

//
// function Tags(titleOfTag, action, attrs) {
//   this.titleOfTag = titleOfTag;
//   this.action = action;
//   this.attrs = attrs;
// }
//
// let a = new Tags('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
//   [{ titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//   { titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.' },
//   ]);
// console.log(a)
//
// let div = new Tags('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому' },
//   ]);
// console.log(div)
//
// let h1 = new Tags('h1', `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка' },]);
// console.log(h1)
//
// let span = new Tags('span', `Тег <span> предназначен для определения строчных элементов документа.`, [],);
// console.log(span)
//
// let input = new Tags('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' },
//   { titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//   { titleOfAttr: 'list', actionOfAttr: 'Указывает на список вариантов, которые можно выбирать при вводе текста' },
//   ]);
// console.log(input)
//
// let form = new Tags('form', `Тег <form> устанавливает форму на веб-странице.`,
//   [{ titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//   { titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы' },
//   { titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP' },
//   ]);
// console.log(form)
//
// let option = new Tags('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
//   [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка' },
//   { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка' },
//   { titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов' },
//   ]);
// console.log(option)
//
// let select = new Tags('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//   [{ titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш' },
//   { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента' },
//   { titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой' },
//   ]);
// console.log(select)


// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

//
// class TagsClass {
//   constructor(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
//   }
// }
//
// let aClass = new TagsClass('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
//   [{ titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//   { titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.' },
//   ]);
// console.log(aClass)
//
// let divClass = new TagsClass('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому' },
//   ]);
// console.log(divClass)
//
// let h1Class = new TagsClass('h1', `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка' },]);
// console.log(h1Class)
//
// let spanClass = new TagsClass('span', `Тег <span> предназначен для определения строчных элементов документа.`, [],);
// console.log(spanClass)
//
// let inputClass = new TagsClass('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' },
//   { titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//   { titleOfAttr: 'list', actionOfAttr: 'Указывает на список вариантов, которые можно выбирать при вводе текста' },
//   ]);
// console.log(inputClass)
//
// let formClass = new TagsClass('form', `Тег <form> устанавливает форму на веб-странице.`,
//   [{ titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//   { titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы' },
//   { titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP' },
//   ]);
// console.log(formClass)
//
// let optionClass = new TagsClass('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
//   [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка' },
//   { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка' },
//   { titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов' },
//   ]);
// console.log(optionClass)
//
// let selectClass = new TagsClass('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//   [{ titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш' },
//   { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента' },
//   { titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой' },
//   ]);
// console.log(selectClass)


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, producer, year, topSpeed, value ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.value = value;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`)
//     }
//     info(){
//         console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}`)
//     }
//     increaseMaxSpeed(newSpeed){
//         console.log(this.topSpeed += newSpeed);
//     }
//     changeYear(newValue){
//         console.log(this.year = newValue);
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
//
// }
// let audio = new Car ('Q5', 'Audio', 2017, 190, 3,4)
// console.log(audio);
// audio.drive();
// audio.info();
// audio.increaseMaxSpeed(100);
// audio.changeYear(2021);
// console.log(audio);
// audio.addDriver({driver:'Alex', age: 31})
// console.log(audio);

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car (model, producer, year, topSpeed, value){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.value = value;
//
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`)
//     }
//     this.info = function (){
//         console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}`)
//     }
//    this.increaseMaxSpeed = function (newSpeed){
//         console.log(this.topSpeed += newSpeed);
//     }
//     this.changeYear = function (newValue){
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
//
// }
//
// let audio = new Car ('Q5', 'Audio', 2017, 190, 3,4)
// console.log(audio);
// audio.drive();
// audio.info();
// audio.increaseMaxSpeed(100);
// audio.changeYear(2022);
// audio.addDriver({name:'Anton', age: 32})
// console.log('****************');
// console.log(audio);

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella{
//     constructor(name, age, foodSize) {
//         this.name = name;
//         this.age = age;
//         this.foodSize = foodSize;
//     }
// }
// const Cinderella1 = new Cinderella('A', 1, 1);
// const Cinderella2 = new Cinderella('B', 2, 2);
// const Cinderella3 = new Cinderella('C', 3, 3);
// const Cinderella4 = new Cinderella('D', 4, 4);
// const Cinderella5 = new Cinderella('E', 5, 5);
// const Cinderella6 = new Cinderella('F', 6, 6);
// const Cinderella7 = new Cinderella('G', 7, 7);
// const Cinderella8 = new Cinderella('H', 8, 8);
// const Cinderella9 = new Cinderella('J', 9, 9);
// const Cinderella10 = new Cinderella('K', 10, 10);
//
// const clubOfCinderella =[Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10];
//
// class Prince{
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
// }
// const  Prince1 = new Prince('Harold', 18, 3)
//
// for (const princes of clubOfCinderella) {
//     if( Prince1.findShoes === princes.foodSize){
//         console.log(`поздравляем ${princes.name}, ты выхожишь замуж за ${Prince1.name}`)
//     }
// }

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, foodSize){
//     this.name = name;
//     this.age = age;
//     this.foodSize = foodSize;
// }
// const Cinderella1 = new Cinderella('A', 1, 1);
// const Cinderella2 = new Cinderella('B', 2, 2);
// const Cinderella3 = new Cinderella('C', 3, 3);
// const Cinderella4 = new Cinderella('D', 4, 4);
// const Cinderella5 = new Cinderella('E', 5, 5);
// const Cinderella6 = new Cinderella('F', 6, 6);
// const Cinderella7 = new Cinderella('G', 7, 7);
// const Cinderella8 = new Cinderella('H', 8, 8);
// const Cinderella9 = new Cinderella('J', 9, 9);
// const Cinderella10 = new Cinderella('K', 10, 10);
//
// const clubOfCinderellas =[Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10];
//
// function Prince(name, age, findShoes){
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//
//         this.findCinderella = function (clubOfCinderellas){
//             for (const princes of clubOfCinderellas) {
//                 if(  this.findShoes === princes.foodSize){
//                     console.log(`поздравляем ${princes.name}, ты выхожишь замуж за ${this.name}`)
//                 }
//             }
//         }
//
// }
// const  Prince1 = new Prince('Harold', 18, 1)
// Prince1.findCinderella(clubOfCinderellas)
