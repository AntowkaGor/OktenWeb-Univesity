//==============================================//
// // - Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.getElementById('textarea')

// textArea.value = localStorage.getItem('textArea')
// textArea.oninput = (ev) => {
//     localStorage.setItem('textArea', ev.target.value)
// }
//================================================//
// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.
// const form1 = document.getElementById('form1');
// gedDataForm(form1);
// function saveForm(t) {
//     setDataForm(t)
// }

// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         console.log(tagElement);
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked
//                 ? tagElement.value = true
//                 : tagElement.value = false
//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }

// function gedDataForm(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)) { //имеет ли Локалсторидж такую Ид у формы 
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if (tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'checked')
//             }
//         }

//     }
// }
//===================================================================//
// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const text = document.getElementById('text')
// const arrow_left = document.getElementById('arrow_left')
// const arrow_right = document.getElementById('arrow_right')
// const save = document.getElementById('save')

// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, text.value)
// }

// arrow_left.onclick = () => {
//     arrow_right.style.visibility = 'visible';
//     let i;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 i = key;
//             }
//         }
//     }
//     if (i === '1') {
//         arrow_left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(i - 1);
// }

// arrow_right.onclick = () => {
//     arrow_left.style.visibility = 'visible';
//     let i;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 i = key;
//             }
//         }
//     }
//     if (i === localStorage.length.toString()) {
//         arrow_right.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+i + 1);
// }
//==================================================================//
// // - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// // Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// // Данные вводить через соответсвующую форму.
// // --Каждому контакту добавить кнопку для удаления контакта.
// // --Каждому контакту добавить кнопку редактироваиня. 
// // При нажати на нее появляется форма, 
// // в которой есть все необходимые инпуты для редактирования
// // которые уже заполнены данными объекта

// const data = [
//     {
//         name: 'Dima',
//         phone: '067475'
//     },
//     {
//         name: 'Vova',
//         phone: '068489'
//     },
//     {
//         name: 'Ігор',
//         phone: '073654'
//     }
// ]

// localStorage.setItem('data', JSON.stringify(data))


// const allUsers = document.getElementById('allUsers');
// const nameInpt = document.getElementById('name');
// const phoneInpt = document.getElementById('phone');
// const save = document.getElementById('save');

// const saveEditBtn = document.getElementById('saveEdit');
// const editName = document.getElementById('editName');
// const editPhone = document.getElementById('editPhone');


// adder()

// save.onclick = () => {
//     const name = nameInpt.value;
//     const phone = phoneInpt.value;

//     data.push({ name, phone })
//     localStorage.setItem('data', JSON.stringify(data))

//     adder();
// }

// function adder() {
//     allUsers.innerHTML = ''

//     let item = localStorage.getItem('data');
//     const data = JSON.parse(item);

//     data.forEach(({ name, phone }, index) => {
//         const userDiv = document.createElement('div');
//         const removeBtn = document.createElement('button');
//         const editBtn = document.createElement('button');

//         removeBtn.innerText = 'REMOVE'
//         editBtn.innerText = 'Edit'
//         userDiv.innerText = `${index + 1}. Name: ${name}, phone: ${phone}`
//         userDiv.style.backgroundColor = 'pink'
//         userDiv.style.margin = '25px'

//         removeBtn.onclick = () => {
//             data.splice(index, 1);
//             localStorage.setItem('data', JSON.stringify(data))
//             adder();
//         }

//         editBtn.onclick = () => {
//             editHelper({ name, phone }, index);
//         }

//         userDiv.appendChild(removeBtn)
//         userDiv.appendChild(editBtn)

//         allUsers.appendChild(userDiv);
//     });
// }

// function editHelper(user, index) {
//     document.getElementById('editForm').style.display = 'block'

//     editName.value = user.name
//     editPhone.value = user.phone

//     saveEditBtn.onclick = () => {
//         data[index].name = editName.value
//         data[index].phone = editPhone.value

//         localStorage.setItem('data', JSON.stringify(data))

//         adder();

//         document.getElementById('editForm').style.display = 'none'
//     }
// }
//==================================================================//

