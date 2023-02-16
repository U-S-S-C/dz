let ID          = document.querySelector('#id');
let NAME        = document.querySelector('#name');
let AGE         = document.querySelector('#age');
let SEX         = document.querySelector('#sex');
let GETBUTTON   = document.querySelector('#getUsers');
let SENDBUTTON  = document.querySelector('#addUser');
let LIST        = document.querySelector('#list1');
let URL         = 'http://localhost:3000/USERS';

let getData = async (url) => await (await fetch(url)).json();

let clearList = (selector) => selector.innerHTML = "";

let addInList = (user, listSelector) => {
    listSelector.insertAdjacentHTML(`beforeend`, `
        <li class="el">
            <p>ID:      ${user['id']}</p>
            <p>Имя:     ${user['name']}</p>
            <p>Возраст: ${user['age']}</p>
            <p>Пол:     ${user['sex'] ? "Мужской" : "Женский"}</p>
        </li>
    `)
}

let getUsers = async () => {
    clearList(LIST);
    let data = await getData(URL);
    for (let i = 0; i<data.length; i++)
        addInList(data[i], LIST);
}

let addUser = async () => {

}

/*
let main = async () => {
    clearList(LEFTLIST);
    clearList(RIGHTLIST);
    let data = await getData(url);
    for (let i = 0; i<data.length; i++){
        addInList(data[i]["name"], data[i]["comment"], LEFTLIST);
        addInList(data[i]["name"], slcFn(data[i]["comment"]), RIGHTLIST);
    }
    console.log(data);
} */
GETBUTTON.addEventListener('click', getUsers);
SENDBUTTON.addEventListener('click', addUser);