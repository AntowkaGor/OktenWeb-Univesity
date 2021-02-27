//************************************************************************************************************
// ----- создать массив с 20 числами.
// const numbers = [1,-2,3,24,5,6,7,88,9,10,0,12,-13,14,15,11,17,38,19,20];

// ----- при помощи метода sort и колбека  отсортировать массив.
// const sortUpNumbers = numbers.sort((a, b) => a-b)
// console.log(sortUpNumbers);

//  ----- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// const sortDownNumbers = numbers.sort((a, b) => b-a)
// console.log(sortDownNumbers);

// ----- при помощи filter получить числа кратные 3
// const filterNumbers = numbers.filter(value => value%3 === 0)
// console.log(filterNumbers);

// ----- при помощи filter получить числа кратные 10
// const filterNumbers = numbers.filter(value => value%10 === 0)
// console.log(filterNumbers);

// ----- перебрать (проитерировать) массив при помощи foreach()
// const iterNumbers = numbers.forEach(value => console.log(value))

// ----- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const mapNumbers = numbers.map(value => value*3)
// console.log(mapNumbers);

//************************************************************************************************************
// - создать массив со словами на 15-20 элементов.
// const words1 = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D']
// const words = ['a', 'B', 'Hello', 'what', 'citrus', 'Orange', 'pokemon', 'Y', 'real', 'tru', 'false'];

// -- отсортировать его по алфавиту в восходящем порядке.
// const sortWordsUp = words1.sort(((a, b) => {
//     if(a<b){
//         return -1
//     }else{
//         return 1
//     }
// }))
// console.log(sortWordsUp);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// const sortWordsDown = words1.sort(((a, b) => {
//     if(a<b){
//         return 1
//     }else{
//         return -1
//     }
//
// }))
// console.log(sortWordsDown);

// -- отфильтровать слова длиной менее 4х символов
// const filterWords = words.filter(value => value.length<4)
// console.log(filterWords);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const mapWords = words.map(value => value+'!')
// console.log(mapWords);


//************************************************************************************************************


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//         ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// const sortUsersAge = users.sort((a, b) => a.age - b.age)
// console.log(sortUsersAge);
//
// const sortUsersAgeDown = users.sort((a, b) => b.age - a.age)
// console.log(sortUsersAgeDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const sortUsersNameLength = users.sort((a, b) => b.name.length - a.name.length)
// console.log(sortUsersNameLength);
//
// const sortUsersNameLengthDown = users.sort((a, b) => a.name.length - b.name.length)
// console.log(sortUsersNameLengthDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// const mapUsers = users.map((value, index) => {
//     value.id = index+1
//     return value})
// console.log(mapUsers);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator1(a,b, callback){
//     return callback(a,b)
// }
// const multiplication =  calculator1(1,2,  (a,b) => a+b);
// console.log(multiplication);

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator2(a,b,c, callback){
//     return callback(a,b,c)
// }
// const calc =  calculator2(1,2,3,  (a,b,c) => (a+b)*c);
// console.log(calc);


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//  let cars = [
//      {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//      {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//      {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//      {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//      {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//      {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//      {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//      {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//      {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//      {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//      {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//      {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//      {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//      ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// const filterVolumeCar = cars.filter(value => value.volume>3 )
// console.log(filterVolumeCar);

// - двигун = 2л
// const filterVolumeCar = cars.filter(value => value.volume=2 )
// console.log(filterVolumeCar);

// - виробник мерс
// const filterProducerCar = cars.filter(value => value.producer='mercedes' )
// console.log(filterProducerCar);

// - двигун більше 3х літрів + виробник мерседес
// const filterVolumeCar = cars.filter(value => value.volume>=3 &&  value.producer==='mercedes')
// console.log(filterVolumeCar);

// - двигун більше 3х літрів + виробник субару
// const filterVolumeCar = cars.filter(value => value.volume>=3 &&  value.producer==='subaru')
// console.log(filterVolumeCar);

// - сили більше ніж 300
// const filterPowerCar = cars.filter(value => value.power > 300)
// console.log(filterPowerCar);

// - сили більше ніж 300 + виробник субару
// const filterPowerCar = cars.filter(value => value.power > 300 && value.producer === 'subaru')
// console.log(filterPowerCar);

// - мотор серіі ej
// const filterEngineCar = cars.filter(value => value.engine.startsWith('ej'))
// console.log(filterEngineCar);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const filterEngineCar = cars.filter(value => value.engine.startsWith('ej') && value.producer === 'subaru' && value.power>300)
// console.log(filterEngineCar);

// - двигун меньше 3х літрів + виробник мерседес
//  const filterPowerCar = cars.filter(value => value.power > 300 && value.producer === 'mercedes')
// console.log(filterPowerCar);

// - двигун більше 2л + сили більше 250
//  const filterPowerCar = cars.filter(value => value.power > 250 && value.power>2)
// console.log(filterPowerCar);

// - сили більше 250  + виробник бмв
// const filterPowerCar = cars.filter(value => value.power > 250 && value.producer === 'bmw')
// console.log(filterPowerCar);

// ************************************************************************************************************************
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];
// -- отсортировать его по id пользователей
// const sorIdUser = usersWithAddress.sort((a,b) => a.id - b.id)
// console.log(sorIdUser);

// -- отсортировать его по id пользователей в обратном опрядке
// const sorIdUserDown = usersWithAddress.sort((a,b) => b.id - a.id)
// console.log(sorIdUserDown);

// -- отсортировать его по возрасту пользователей
// const sorAgeUser = usersWithAddress.sort((a,b) => a.age - b.age)
// console.log(sorAgeUser);

// -- отсортировать его по возрасту пользователей в обратном порядке
// const sorAgeUserDown = usersWithAddress.sort((a,b) => b.age - a.age)
// console.log(sorAgeUserDown);

// -- отсортировать его по имени пользователей 
// const sortNameUsers = usersWithAddress.sort((a,b) => {
//         if(a.name<b.name){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(sortNameUsers);

// -- отсортировать его по имени пользователей в обратном порядке
// const sortNameUsersDown = usersWithAddress.sort((a,b) => {
//     if(a.name<b.name){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(sortNameUsersDown);

// -- отсортировать его по номеру дома по возрастанию
// const sortNumberUser = usersWithAddress.sort((a,b) => a.address.number - b.address.number)
// console.log(sortNumberUser);

// -- отфильтровать (оставить) тех кто младше 30
// const filterAgeUsers = usersWithAddress.filter(value => value.age<30);
// console.log(filterAgeUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// const filterStatusUsers = usersWithAddress.filter(value => value.status===false);
// console.log(filterStatusUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// const filterStatusUsers = usersWithAddress.filter(value => value.status===false && value.age<30);
// console.log(filterStatusUsers);

// // -- отфильтровать (оставить) тех у кого номер дома четный
// const filterHouseUser = usersWithAddress.filter(value => value.address.number %2 ===0)
// console.log(filterHouseUser);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// let carsWithDriver = [
//     {producer:"subaru",power: 400, driver:{name: 'vasya', age: 31, driveSkill: 2},price: 2000,year: 2010},
//     {producer:"subaru",power: 250, driver:{name: 'petya', age: 30, driveSkill: 1.5},price: 1800, year: 2007},
//     {producer:"bmw",power: 120, driver:{name: 'kolya', age: 29, driveSkill: 1},price: 3200, year: 2014},
//     {producer:"bmw",power: 350, driver:{name: 'max', age: 30, driveSkill: 3},price: 4800, year: 2017},
//     {producer:"mercedes",power: 180, driver:{name:'andrey', age: 29, driveSkill: 5},price: 1200, year: 1990},
//     {producer:"mercedes",power: 400, driver:{name:'olya', age: 31, driveSkill: 2},price: 5200, year: 2017},
//     {producer:"mercedes",power: 230, driver:{name:'masha', age: 30, driveSkill: 1.5},price: 3200, year: 2014},
// ]

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// const modifePower = carsWithDriver.map(value => {
//     value.power = value.power + (value.power / 100 * 10)
//     return value
// })
// console.log(modifePower);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// ???????????????????????????????????????????????///


// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// function modifyCars(cars){
//     const newCar = [];
//     for (let i = 0; i < cars.length; i+=2) {
//       let car = cars[i];
//         car.power = car.power + (car.power/100*10)
//         car.price = car.price + (car.price/100*5)
//         newCar.push(car)
//     }
//     return newCar
// }
// const newCar = modifyCars(carsWithDriver);
// console.log(newCar);


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// let skillDrivers = carsWithDriver.forEach(value => {
//     if (value.driver.driveSkill < 5 || value.driver.age > 25){
//        return value.driver.driveSkill +=1
//     }
// })
// console.log(carsWithDriver);


//Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sumPriceCars = carsWithDriver.reduce((p, c) => {
//   return   p + c.price
// },0);
// console.log(sumPriceCars);

// **********************************************************************************************************************************************************
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
//  const f = (arr,key) => {
//     let min =arr.indexOf(key)
//     let max=arr.lastIndexOf(key)
//     result =`MinIndex = ${min}, MaxIndex = ${max}.`
//     return result
// }
// const indexF = f(Arr,20);
// console.log(indexF);
