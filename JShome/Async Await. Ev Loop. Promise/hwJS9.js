//========================================//
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

// //colback

// let up = "7:20";
// console.log('start:', up)

// function myDay(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '7:25';
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1000)
// }

// function cleanTeath(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '7:35'
//             cb(null, up)
//         } else {
//             document.write('sleep more')
//         }
//     }, 1500)
// }

// function heaveBreakfest(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '7:50'
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1200)
// }

// function wolkToJob(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '8:30'
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1300)
// }

// function ollDayAtWork(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '17:30'
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1000)
// }

// function wolkBackToHome(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '18:00'
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1600)
// }
// function timeToStudy(oneDay, cb) {
//     setTimeout(() => {
//         if (oneDay) {
//             up = '23:00'
//             cb(null, up);
//         } else {
//             document.write('sleep more')
//         }
//     }, 1000)
// }
// myDay(true, (err, reward) => {
//     if (err) {
//         document.write('sleeeeep')
//     } else {
//         document.write('need to stand Up <br>')
//         cleanTeath(up, (err, reward) => {
//             if (err) {
//                 document.write('go to baad')
//             } else {
//                 document.write('need eat <br>')
//                 heaveBreakfest(up, (err, reward) => {
//                     if (err) {
//                         document.write('sleeeeep')
//                     } else {
//                         document.write('time to job <br>')
//                         wolkToJob(up, (err, reward) => {
//                             if (err) {
//                                 document.write('sleeeeep')
//                             } else {
//                                 document.write('lets to take money <br>')
//                                 ollDayAtWork(up, (err, reward) => {
//                                     if (err) {
//                                         document.write('sleeeeep')
//                                     } else {
//                                         document.write('Ouyee time to come home <br>')
//                                         wolkBackToHome(up, (err, reward) => {
//                                             if (err) {
//                                                 document.write('sleeeeep')
//                                             } else {
//                                                 document.write('Hello my Son <br>')
//                                                 timeToStudy(up, (err, reward) => {
//                                                     if (err) {
//                                                         document.write('sleeeeep')
//                                                     } else {
//                                                         document.write('finish=)')
//                                                     } console.log('end:', up)
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

// });

// //promise
// let up = "7:20";

// function myDay(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:25';
//                 resolve(up)
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1000)
//     })
// }

// function cleanTeath(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:35'
//                 resolve(up);
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1500)
//     })
// }

// function heaveBreakfest(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:50'
//                 resolve(up);
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1200)
//     })
// }

// function wolkToJob(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '8:30'
//                 resolve(up);
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1300)
//     })
// }

// function ollDayAtWork(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '17:30'
//                 resolve(up);
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1000)
//     })

// }

// function wolkBackToHome(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '18:00'
//                 resolve(up);
//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1600)
//     })
// }
// function timeToStudy(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '23:00'
//                 resolve(up);

//             } else {
//                 document.write('sleep more')
//                 reject('sleeep')
//             }
//         }, 1000)
//     })
// }

// myDay(true)
//     .then(value => {
//         document.write(value);
//         document.write(' | need to stand Up <br>')
//         return cleanTeath(value);
//     })
//     .then(value => {
//         document.write(value);
//         document.write(' | need eat <br>')
//         return heaveBreakfest(value);
//     })
//     .then(value => {
//         document.write(value);
//         document.write(' | time to job <br>')
//         return wolkToJob(value);
//     })
//     .then(value => {
//         document.write(value);
//         document.write(' | lets to take money <br>')
//         return ollDayAtWork(value);
//     })
//     .then(value => {
//         document.write(value);
//         document.write(' | Ouyee time to come home <br>')
//         return wolkBackToHome(value);
//     })
//     .then(value => {
//         document.write(value);
//         document.write(' | Hello my Son <br>')
//         return timeToStudy(value);
//     })
//     .then(value => {
//         document.write(value)
//         document.write(' | finish=)')
//     })

// //async
// let up = "7:20";


// function myDay(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:25 | need to stand Up <br>';
//                 resolve(up)
//             } else {
//                 reject('sleep more')
//             }
//         }, 1000)
//     })
// }

// function cleanTeath(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:35 | need eat <br> '
//                 resolve(up);
//             } else {
//                 reject('sleeep')
//             }
//         }, 1500)
//     })
// }

// function heaveBreakfest(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '7:50 | time to job <br>'
//                 resolve(up);
//             } else {
//                 reject('sleeep more')
//             }
//         }, 1200)
//     })
// }

// function wolkToJob(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '8:30 | lets to take money <br>'
//                 resolve(up);
//             } else {
//                 reject('sleeep agane')
//             }
//         }, 1300)
//     })
// }

// function ollDayAtWork(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '17:30 | Ouyee time to come home <br>'
//                 resolve(up);
//             } else {
//                 reject('sleeep')
//             }
//         }, 1000)
//     })

// }

// function wolkBackToHome(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '18:00 | Hello my Son <br>'
//                 resolve(up);
//             } else {
//                 reject('sleeep and sleep')
//             }
//         }, 1600)
//     })
// }
// function timeToStudy(oneDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oneDay) {
//                 up = '23:00 | finish=)'
//                 resolve(up);

//             } else {
//                 reject('sleeep at night')
//             }
//         }, 1000)
//     })
// }

// async function myOwnDay() {
//     try {
//         document.write(await myDay(true));
//         document.write(await cleanTeath(true));
//         document.write(await heaveBreakfest(true));
//         document.write(await wolkToJob(true));
//         document.write(await ollDayAtWork(true));
//         document.write(await wolkBackToHome(true));
//         document.write(await timeToStudy(true));
//     } catch (err) {
//         document.write(err);
//     }
// }
// myOwnDay();


//=============================================//

//====class work=====//
// // document.getElementById('btn')
// //   .onclick = () => {
// //   console.log('clc');
// // }
// //
// //
// // console.log(1);
// //
// // setTimeout(() => {
// //   console.log(2);
// // }, 0)
// //
// // console.log(3);
// //
// //
// // let i = 0
// // while (i < 999999999) {
// //   i++
// // }
// //
// //
// //
// // function dead() {
// //   return dead();
// // }
// //
// // dead();
// //
// //
// // function goToTurkey(isCovidPresent, cb) {
// //   setTimeout(() => {
// //     if (isCovidPresent === true) {
// //       cb('Ковід в країні. Беру під особистй контролЬ!!!', null);
// //     } else {
// //       cb(null, 'Ура. Я лечу в Мармарис !!!!!!!! ЄЄЄЄЄЄЄ');
// //     }
// //   }, 2000)
// // }
// //
// //
// // goToTurkey(false, (negative, positive) => {
// //   console.log(negative);
// //   console.log(positive);
// //
// //   if (negative) {
// //     console.log('Блін. Мінус відпустка')
// //   } else {
// //     console.log('УРАААА')
// //   }
// // })
// //
// //
// // let money = 0;
// //
// // function clearHouse(isJobDone, cb) {
// //   setTimeout(() => {
// //     if (isJobDone) {
// //       money = 500;
// //       cb(null, money);
// //     } else {
// //       cb('ERRROOOOR', null)
// //     }
// //   }, 1000)
// // }
// //
// // function buyJeans(money, cb) {
// //   setTimeout(() => {
// //     if (money > 200) {
// //       console.log('Good jeans bro')
// //       money = money - 200
// //       cb(null, money)
// //     } else {
// //       console.log('Nema groshey');
// //       cb('NEMA', null)
// //     }
// //   }, 1000)
// // }
// //
// //
// // clearHouse(true, (err, money) => {
// //   if (err) {
// //     document.write('House is not clear')
// //   } else {
// //     document.write('Job done boss')
// //     buyJeans(money, (e, resta) => {
// //       if (e) {
// //         document.write('Nema dinig')
// //       } else {
// //         document.write('УРАААА')
// //       }
// //     })
// //   }
// // });


// // function clearHouse(isJobDone) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (isJobDone) {
// //         money = 500;
// //         resolve(money)
// //       } else {
// //         reject('ERRROOOOR')
// //       }
// //     }, 1000)
// //   })
// // }
// //
// // function buyJeans(money) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (money > 200) {
// //         console.log('Good jeans bro')
// //         money = money - 200
// //         resolve(money)
// //       } else {
// //         console.log('Nema groshey');
// //         reject('NEMA')
// //       }
// //     }, 1000)
// //   })
// // }
// //
// //
// // clearHouse(true)
// //   .then(reward => {
// //     console.log('______________________');
// //     console.log(reward);
// //     console.log('______________________');
// //
// //     return buyJeans(money);
// //   })
// //   .then(reshta => {
// //     console.log('**************************');
// //     console.log(reshta);
// //     console.log('**************************');
// //   })
// //   .catch(reason => {
// //     console.error(reason)
// //   })
// //   .finally(() => {
// //     console.log('F');
// //   })
// //
// // let uno = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve(1);
// //   }, 3000)
// // })
// //
// //
// // let due = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     reject(2);
// //   }, 2000)
// // })
// //
// //
// // let tre = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve(3);
// //   }, 1000)
// // })
// //
// // Promise.race([uno, due, tre])
// //   .then(value => {
// //     console.log(value);
// //   })
// //
// //
// // Promise.all([uno, due.catch(reason => {}), tre])
// //   .then(value => {
// //     console.log(value);
// //   })
// //
// // Promise.allSettled([uno, due, tre])
// //   .then(value => {
// //     console.log(value);
// //   })
// //


// function clearHouse(isJobDone) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isJobDone) {
//           money = 500;
//           resolve(money)
//         } else {
//           reject('ERRROOOOR')
//         }
//       }, 1000)
//     })
//   }

//   function buyJeans(money) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (money > 200) {
//           console.log('Good jeans bro')
//           money = money - 200
//           resolve(money)
//         } else {
//           console.log('Nema groshey');
//           reject('NEMA')
//         }
//       }, 1000)
//     })
//   }


//   async function houseCleaner() {
//     try {
//       let reward = await clearHouse(true);
//       console.log('__________________________');
//       console.log(reward);
//       console.log('__________________________');

//       let resta = await buyJeans(100);

//       console.log('*****************************');
//       console.log(resta);
//       console.log('*****************************');
//     } catch (e) {
//       console.error(e);
//     }
//   }


//   houseCleaner();