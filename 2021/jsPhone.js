// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const formUsers = document.getElementById('phoneBook');
const Array_Users = 'Array_Users';
let tempUser = {};
const content = document.getElementById('content');

formUsers.submit1.onclick = ev =>{
    // ev.preventDefault();
    let person  = {...tempUser};
    tempUser = {};
    for (let i = 0; i < formUsers.children.length; i++) {
        const formElement = formUsers.children[i];
        if(formElement.name && formElement.type !== 'submit'){
            person [ formElement.name] = formElement.value
        }
    }
    if (!person.id){
        person.id = new Date().getTime();
    }
    saveUser(person)
}

getDataFromLs();

function saveUser(user) {
    if(localStorage.hasOwnProperty('Array_Users')){
        const arrayUsers = JSON.parse(localStorage.getItem(Array_Users))
        const find = arrayUsers.find(value => value.id === user.id);
        if(find){
           const filter = arrayUsers.filter(value => value.id !== user.id);
           filter.push(user);
           localStorage.setItem(Array_Users, JSON.stringify(filter));
        }else{
            arrayUsers.push(user);
            localStorage.setItem(Array_Users, JSON.stringify(arrayUsers));
        }
    }else{
        localStorage.setItem(Array_Users,JSON.stringify([user]))
    }
}

function getDataFromLs(){
    if(localStorage.hasOwnProperty(Array_Users)){
        const arrUser = JSON.parse(localStorage.getItem(Array_Users));
        for (const user of arrUser){
          content.appendChild(createDivPerson(user))
        }
    }
}

function createDivPerson (user){
    const mainDiv = document.createElement('div')
    let flag = true
    for (const key in user) {
        if(flag){
            const h3 = document.createElement('h3');
            h3.innerText = key + ':' + user[key];
            mainDiv.appendChild(h3);
            flag = false;
        }else{
            const p = document.createElement('p');
            p.innerText = key + ':' + user[key];
            mainDiv.appendChild(p)
        }
    }
    mainDiv.style = "width: 300px; border: blue 1px solid; float: left";
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');
    b1.innerText = 'Edit';
    b2.innerText = 'Delete';
    b1.onclick = () =>editUser(user.id);
    b2.onclick = () =>deleteUser(user.id);


    mainDiv.appendChild(b1);
    mainDiv.appendChild(b2);
    return mainDiv
}
function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(Array_Users));
    const filter = parse.filter(user => user.id !== id);
    localStorage.setItem(Array_Users, JSON.stringify(filter))
    location.reload();
}
function editUser (id){
    const parse = JSON.parse(localStorage.getItem(Array_Users));
    const user = parse.find(user => user.id === id);
    for (let i = 0; i < formUsers.children.length; i++) {
        const formElement = formUsers.children[i];
        if(formElement.name && formElement.type !== 'submit'){
          for (const key in user){
              if (formElement.name === key){
                  formElement.value = user [key]
              }
          }
        }
        tempUser = user;
    }
}
