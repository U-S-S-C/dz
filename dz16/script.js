let LEFTLIST = document.querySelector('#list1');
let RIGHTLIST = document.querySelector('#list2');
let BUTTON = document.querySelector('.filterbutton');
let url = 'http://localhost:3000/USERS'
let getData = async (url) => await (await fetch(url)).json();

let clearList = (selector) => selector.innerHTML = "";
let addInList = (obj, listID) => {
    listID.insertAdjacentHTML(`beforeend`, `
        <li class="el">
            <h3 class="name">${obj["name"]}</h3>
            <img src="${obj["ava"]}" class="picture" alt="альтернативный текст">
            <h5><s>${obj["price"]}</s> ${obj["price"]*0.75} of ${obj["curency"]}</h5>
            <h5>(25% discount!)</h5>
        </li>
    `)
}

let main = async () => {
    clearList(LEFTLIST);
    clearList(RIGHTLIST);
    let data = await getData(url);
    for (let i = 0; i<data.length; i++){
        addInList(data[i], i%2 == 0 ? LEFTLIST : RIGHTLIST);
        }
    console.log(data);
}

BUTTON.addEventListener('click', main);