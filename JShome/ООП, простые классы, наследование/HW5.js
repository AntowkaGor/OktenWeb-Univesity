
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
// {/*...*/ },
// {/*...*/ },
//     ]

// }
// ==============================================
//   function Tags(titleOfTag, action, attrs) {
//   this.titleOfTag = titleOfTag;
//   this.action = action;
//   this.attrs = attrs;
// }

// let a = new Tags('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
//   [{ titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//   { titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.' },
//   ]);
// console.log(a)

// let div = new Tags('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому' },
//   ]);
// console.log(div)

// let h1 = new Tags('h1', `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка' },]);
// console.log(h1)

// let span = new Tags('span', `Тег <span> предназначен для определения строчных элементов документа.`, [],);
// console.log(span)

// let input = new Tags('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' },
//   { titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//   { titleOfAttr: 'list', actionOfAttr: 'Указывает на список вариантов, которые можно выбирать при вводе текста' },
//   ]);
// console.log(input)

// let form = new Tags('form', `Тег <form> устанавливает форму на веб-странице.`,
//   [{ titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//   { titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы' },
//   { titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP' },
//   ]);
// console.log(form)

// let option = new Tags('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
//   [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка' },
//   { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка' },
//   { titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов' },
//   ]);
// console.log(option)

// let select = new Tags('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//   [{ titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш' },
//   { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента' },
//   { titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой' },
//   ]);
// console.log(select)

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

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
//      titleOfTag: 'area',
//      action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//      attrs: [
//      {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//      {/*some props and values*/},
//      {/*...*/},
//      {/*...*/},
//      ]
// }
// ==============================================
//   class TagsClass {
//   constructor(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
//   }
// }

// let aClass = new TagsClass('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
//   [{ titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//   { titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.' },
//   ]);
// console.log(aClass)

// let divClass = new TagsClass('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//   { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому' },
//   ]);
// console.log(divClass)

// let h1Class = new TagsClass('h1', `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка' },]);
// console.log(h1Class)

// let spanClass = new TagsClass('span', `Тег <span> предназначен для определения строчных элементов документа.`, [],);
// console.log(spanClass)

// let inputClass = new TagsClass('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`,
//   [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' },
//   { titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//   { titleOfAttr: 'list', actionOfAttr: 'Указывает на список вариантов, которые можно выбирать при вводе текста' },
//   ]);
// console.log(inputClass)

// let formClass = new TagsClass('form', `Тег <form> устанавливает форму на веб-странице.`,
//   [{ titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//   { titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы' },
//   { titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP' },
//   ]);
// console.log(formClass)

// let optionClass = new TagsClass('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`,
//   [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка' },
//   { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка' },
//   { titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов' },
//   ]);
// console.log(optionClass)

// let selectClass = new TagsClass('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//   [{ titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш' },
//   { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента' },
//   { titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой' },
//   ]);
// console.log(selectClass)

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//   let car = {
//   model: 'vivara',
//   mark: 'opel',
//   year: 2014,
//   speed: 240,
//   value: 2.4,
//   drive: function () {
//     console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//   },
//   info: function () {
//     console.log(car)
//   },
//   newMaxSpeed: function (newSpeed) {
//     this.speed += newSpeed;
//   },
//   changeYears: function (newValue) {
//     this.year = newValue;
//   },
//   driver: function (driver) {
//     this.driver = driver;
//   },
// }
// car.drive();
// car.info();
// car.newMaxSpeed(100);
// car.changeYears(2017);
// car.driver({ name: 'Andriy', age: 47, licence: 'A1, B, D' })

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//   constructor(model, mark, year, speed, value) {
//     this.model = model;
//     this.mark = mark;
//     this.year = year;
//     this.speed = speed;
//     this.value = value;
//   }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//   }
//   info() {
//     console.log(car);
//   }
//   newSpeeds(newSpeed) {
//     this.speed += newSpeed;
//   }
//   newValue(newValue) {
//     this.year = newValue;
//   }
//   driver(driver) {
//     this.driver = driver;
//   }
// }

// let car = new Car('vivara', 'opel', 2014, 240, 2.4);
// console.log(car);

// car.drive();
// car.info();
// car.newSpeeds(200);
// car.newValue(2020);
// car.driver({ name: 'Andriy', age: 47, licence: 'A1, B, D' })


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }
// let Alisa = new Cinderella('Alisa', 18, 13);
// let Marina = new Cinderella('Marina', 15, 10);
// let Gylia = new Cinderella('Gylia', 14, 12);
// let Veronika = new Cinderella('Veronika', 16, 13);
// let Masha = new Cinderella('Masha', 18, 12);
// let Ira = new Cinderella('Ira', 14, 12);
// let Galia = new Cinderella('Galia', 19, 16);
// let Kris = new Cinderella('Kris', 18, 36);
// let BY = new Cinderella('BY', 15, 10);
// let Marfa = new Cinderella('Marfa', 18, 15);

// let girls = [Alisa, Marina, Gylia, Veronika, Masha, Ira, Galia, Kris, BY, Marfa];

// class Princ {
//   constructor(name, age, findShouse) {
//     this.name = name;
//     this.age = age;
//     this.findShouse = findShouse;
//   }
// }
// let Stepan = new Princ('Stepan', 25, 36)
// for (let i = 0; i < girls.length; i++) {
//   if (girls[i].footSize === Stepan.findShouse) {
//     console.log(`${girls[i].name} є попелюшкою для ${Stepan.name}`)
//   }
// }

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
//   this.name = name;
//   this.age = age;
//   this.footSize = footSize;
// }
// let Alisa = new Cinderella('Alisa', 18, 13);
// let Marina = new Cinderella('Marina', 15, 10);
// let Gylia = new Cinderella('Gylia', 14, 12);
// let Veronika = new Cinderella('Veronika', 16, 13);
// let Masha = new Cinderella('Masha', 18, 12);
// let Ira = new Cinderella('Ira', 14, 12);
// let Galia = new Cinderella('Galia', 19, 16);
// let Kris = new Cinderella('Kris', 18, 36);
// let BY = new Cinderella('BY', 15, 10);
// let Marfa = new Cinderella('Marfa', 18, 15);

// let girls = [Alisa, Marina, Gylia, Veronika, Masha, Ira, Galia, Kris, BY, Marfa];


// function Princ(name, age, findShouse) {
//   this.name = name;
//   this.age = age;
//   this.findShouse = findShouse;

//   this.findSinderella = function () {
//     for (let i = 0; i < girls.length; i++) {
//       if (girls[i].footSize === Stepan.findShouse) {
//         console.log(`im find ${girls[i].name}`)
//       }
//     }

//   }
// }
// let Stepan = new Princ('Stepan', 25, 36)
// Stepan.findSinderella();









/*
/ let maria = {
//   name: 'Maria',
//   hair: 'black',
//   greeting: function () {
//     document.write(`Всім привіт.Мене звати ${ this.name }`)
//   },
//   codding: function (hours = 8) {
//     document.write(`I am going to code ${ hours } hour long`)
//   },
// //
// //
// //
// //   logTh: function () {
// //     console.log(this)
// //   },
// //   logThArr: () => {
// //     console.log(this)
// //   }
// }
// //
// maria.greeting();
// // document.write(`<br>`)
// // document.write(`<br>`)
// // maria.codding(13)
// // maria.logTh();
// // document.write(`<br>`)
// // document.write(`<br>`)
// // maria.logThArr();
// // document.write(`<br>`)
// // document.write(`<br>`)
//
// function Car(color, speed) {
//   this.color = color;
//   this.speed = speed;
//
//   this.ride = function () {
//     document.write(`I am riding ${ this.speed } km / h`);
//   }
//
//   this.ret = function () {
//     return 'HELLO'
//   }
// }
//
// let tesla = new Car('White', 99);
// let volvo = new Car('Blue', 80);
// let vaz = new Car('red', 60);
//
// console.log(tesla);
// console.log(vaz)
//
//
// vaz.speed = 999999;
//
// vaz.ride()
//
//


function User(age, gender, laptops = ['Lenovo']) {
  this.gender = gender;
  this.age = age;
  this.education = 'high';
  this.laptops = laptops;

  this.addLaptop = function (laptopName) {
    this.laptops.push(laptopName)
  }
}

//
// let viktor = new User(24, 'male');
// let maria = new User(18, 'female', ['Dell', 'Mac']);
//
//
// viktor.addLaptop('Dell')
// // viktor.addLaptop('ACes')
// // viktor.addLaptop('Asus')
//
// maria.education = 'PhD'
//
// console.log(viktor);
// console.log(maria);


class Human {
  constructor(age, gender, color) {
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.money = 0;
  }

  eat() {
    console.log('Om nom nom')
  }

  goWork() {
    this.money += 100;
  }

  goBeer() {
    if (this.money > 200) {
      document.write('I AM HAMMERED')
      document.write(`<br>`)

      this.money -= 200;
    } else {
      document.write('DOW')
      document.write(`<br>`)

    }
  }
}


class Developer extends Human {
  constructor(age, gender, color, skill) {
    super(age, gender, color);
    this.skill = skill;
  }

  goBeer() {
    if (this.money < 500) {
      document.write('Вася позич до ЗП');
      document.write(`<br>`)

    } else {
      document.write('Го в правду');
      document.write(`<br>`)

      this.money = 0;
    }
  }

  codding() {
    document.write(`Tap tap tap on ${ this.skill }`)
    document.write(`<br>`)
  }
}

let Iron = new Developer(20, 'female', 'white', 'JS');

Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()

Iron.goBeer()

Iron.codding()

console.log(Iron);

let homer = new Human(35, 'male', 'yellow');

console.log(homer);

homer.eat();

homer.goBeer();

homer.goWork()
homer.goWork()
homer.goWork()

console.log(homer);

homer.goBeer();

console.log(homer);

homer.codding();



class MyAddres {
  constructor(street) {
    this.street = street;
  }
}

const robota = new MyAddres('H.UPA')
const dim = new MyAddres('VV')

let addreses = [robota, dim]
*/