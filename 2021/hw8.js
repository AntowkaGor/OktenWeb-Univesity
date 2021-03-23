// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// callback
// const actionMaker = (startActionsStr, errorString, doneString) => {
//     return (cb) => {
//         setTimeout(_ => {
//             document.write(`${startActionsStr}<br>`)
//             if (Math.random() < 0.3)
//                 cb(`${errorString}<br>`)
//             else
//                 cb(null, `${doneString}<br>`)
//         }, Math.random() * 1000)
//     }
// }
//
// const myDay = actionMaker(
//     "#1-Hello",
//     "The day is not started. Goodby",
//     "This is my day"
// )
// const wakeUp = actionMaker(
//     "#2-Firstly, I am waking up",
//     "Naaagh, I wanna sleep more!!!",
//     "It is good day"
// )
// const cleanTeeth = actionMaker(
//     "#3-Secondly, I am cleaning my teeth",
//     "Ooops, I can`t clean my teeth, i don`t have toothpaste",
//     "Yep, I cleaned my teeth"
// )
// const haveBreakfast = actionMaker(
//     "#4-Then, I am having my breakfast",
//     "Yayks, we dont have food",
//     "It was realy delicious"
// )
// const goToJob = actionMaker(
//     "#5-Then , I am going to job",
//     "Goood, it`s raining, I am not gonna go to job",
//     "Nagh, another day in job"
// )
// const comeHome = actionMaker(
//     "#6-At the end, of job I am going to home",
//     "I don`t have money for bus, shit!",
//     "Finaly I am at home"
// )
// const haveLunch = actionMaker(
//     "#7-Then I am gonna have lunch",
//     "Yayks, we dont have food",
//     "Borsh is my favourite dish, realy"
// )
// const doHw = actionMaker(
//     "#8-After having lunch I start doing my hw",
//     "Noice, I don`t have hw :)",
//     "What the hell?! Why there is so much hw???"
// )
// const haveDinner = actionMaker(
//     "#9-After doing my hw I am gonna have dinner",
//     "Yayks, we dont have food",
//     "Eggs, mmm, it`s realy delicious"
// )
// const goSleep = actionMaker(
//     "#10-At the end of the day, I am going to bad",
//     "Amm, where is my bad?",
//     "Zzzz"
// )
// myDay((err, res) => {
//     if (err)
//         return document.write(err)
//     else {
//         document.write(res)
//         wakeUp((err, res) => {
//             if (err)
//                 return document.write(err)
//             else {
//                 document.write(res)
//                 cleanTeeth((err, res) => {
//                     if (err)
//                         return document.write(err)
//                     else {
//                         document.write(res)
//                         haveBreakfast((err, res) => {
//                             if (err)
//                                 return document.write(err)
//                             else {
//                                 document.write(res)
//                                 goToJob((err, res) => {
//                                     if (err)
//                                         return document.write(err)
//                                     else {
//                                         document.write(res)
//                                         comeHome((err, res) => {
//                                             if (err)
//                                                 return document.write(err)
//                                             else {
//                                                 document.write(res)
//                                                 haveLunch((err, res) => {
//                                                     if (err)
//                                                         return document.write(err)
//                                                     else {
//                                                         document.write(res)
//                                                         doHw((err, res) => {
//                                                             if (err)
//                                                                 return document.write(err)
//                                                             else {
//                                                                 document.write(res)
//                                                                 haveDinner((err, res) => {
//                                                                     if (err)
//                                                                         return document.write(err)
//                                                                     else {
//                                                                         document.write(res)
//                                                                         goSleep((err, res) => {
//                                                                             if (err)
//                                                                                 return document.write(err)
//                                                                             else {
//                                                                                 document.write(res)
//                                                                                 document.write("This is my day in a nutshell")
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//Promise
// const actionMaker = (startActionsStr, onErr, onOk) => {
//     return response => {
//         response || document.write(response)
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 document.write(`${startActionsStr}<br>`)
//                 if (Math.random() < 0.3)
//                     reject(`${onErr}<br>`)
//                 else
//                     resolve(`${onOk}<br>`)
//             }, Math.random() * 1000)
//         })
//     }
// }
//
// const myDay = actionMaker(
//     "#1-Hello",
//     "The day is not started. Goodby",
//     "This is my day"
// )
// const wakeUp = actionMaker(
//     "#2-Firstly, I am waking up",
//     "Naaagh, I wanna sleep more!!!",
//     "It is good day"
// )
// const cleanTeeth = actionMaker(
//     "#3-Secondly, I am cleaning my teeth",
//     "Ooops, I can`t clean my teeth, i don`t have toothpaste",
//     "Yep, I cleaned my teeth"
// )
// const haveBreakfast = actionMaker(
//     "#4-Then, I am having my breakfast",
//     "Yayks, we dont have food",
//     "It was realy delicious"
// )
// const goToJob = actionMaker(
//     "#5-Then , I am going to job",
//     "Goood, it`s raining, I am not gonna go to job",
//     "Nagh, another day in job"
// )
// const comeHome = actionMaker(
//     "#6-At the end, of job I am going to home",
//     "I don`t have money for bus, shit!",
//     "Finaly I am at home"
// )
// const haveLunch = actionMaker(
//     "#7-Then I am gonna have lunch",
//     "Yayks, we dont have food",
//     "Borsh is my favourite dish, realy"
// )
// const doHw = actionMaker(
//     "#8-After having lunch I start doing my hw",
//     "Noice, I don`t have hw :)",
//     "What the hell?! Why there is so much hw???"
// )
// const haveDinner = actionMaker(
//     "#9-After doing my hw I am gonna have dinner",
//     "Yayks, we dont have food",
//     "Eggs, mmm, it`s realy delicious"
// )
// const goSleep = actionMaker(
//     "#10-At the end of the day, I am going to bad",
//     "Amm, where is my bad?",
//     "Zzzz"
// )
// myDay()
//     .then(wakeUp)
//     .then(cleanTeeth)
//     .then(haveBreakfast)
//     .then(goToJob)
//     .then(comeHome)
//     .then(haveLunch)
//     .then(doHw)
//     .then(haveDinner)
//     .then(goSleep)
//     .catch(err => document.write(err))
//     .finally(()=> document.write("This is my day in a nutshell"))

// Async Await
// const actionMaker = (startActionsStr, onErr, onOk) => {
//     return async () => {
//         await later(Math.random() * 1000)
//         document.write(`${startActionsStr}<br>`)
//         if (Math.random() < 0.3)
//             throw new Error(`${onErr}<br>`)
//         else
//             return `${onOk}<br>`
//     }
// }
//
// const later = (delay, value) =>
//     new Promise(resolve => setTimeout(resolve, delay, value));
//
// const myDay = actionMaker(
//     "#1-Hello",
//     "The day is not started. Goodby",
//     "This is my day"
// )
// const wakeUp = actionMaker(
//     "#2-Firstly, I am waking up",
//     "Naaagh, I wanna sleep more!!!",
//     "It is good day"
// )
// const cleanTeeth = actionMaker(
//     "#3-Secondly, I am cleaning my teeth",
//     "Ooops, I can`t clean my teeth, i don`t have toothpaste",
//     "Yep, I cleaned my teeth"
// )
// const haveBreakfast = actionMaker(
//     "#4-Then, I am having my breakfast",
//     "Yayks, we dont have food",
//     "It was realy delicious"
// )
// const goToJob = actionMaker(
//     "#5-Then , I am going to job",
//     "Goood, it`s raining, I am not gonna go to job",
//     "Nagh, another day in job"
// )
// const comeHome = actionMaker(
//     "#6-At the end, of job I am going to home",
//     "I don`t have money for bus, shit!",
//     "Finaly I am at home"
// )
// const haveLunch = actionMaker(
//     "#7-Then I am gonna have lunch",
//     "Yayks, we dont have food",
//     "Borsh is my favourite dish, realy"
// )
// const doHw = actionMaker(
//     "#8-After having lunch I start doing my hw",
//     "Noice, I don`t have hw :)",
//     "What the hell?! Why there is so much hw???"
// )
// const haveDinner = actionMaker(
//     "#9-After doing my hw I am gonna have dinner",
//     "Yayks, we dont have food",
//     "Eggs, mmm, it`s realy delicious"
// )
// const goSleep = actionMaker(
//     "#10-At the end of the day, I am going to bad",
//     "Amm, where is my bad?",
//     "Zzzz"
// )
//
// ;(async _ => {
//     try{
//         document.write(await myDay())
//         document.write(await wakeUp())
//         document.write(await cleanTeeth())
//         document.write(await haveBreakfast())
//         document.write(await goToJob())
//         document.write(await comeHome())
//         document.write(await haveLunch())
//         document.write(await doHw())
//         document.write(await haveDinner())
//         document.write(await goSleep())
//         document.write("This is my day in a nutshell")
//     } catch (err) {
//         document.write(err)
//     }
// })()

//************************************************************//
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
// const later = (delay, value) =>
//     new Promise(resolve => setTimeout(resolve, delay, value));
// let btn = document.getElementById('printBtn')
//
// btn.onclick = async function () {
//     let text = document.getElementById('enterFild');
//
//     let readyText = document.getElementById('output')
//
//     let touchText = text.value.split('')
//     let random = Math.random();
//     random = random < 0.1 ? 0.1 : random > 0.5 ? 0.5 : random;
//     for (text of touchText) {
//         await later(random * 1000)
//         readyText.value += text
//     }
// }

//**************************************************************//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
//     Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
//     Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//     Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
