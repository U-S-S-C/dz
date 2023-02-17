let LEFTLIST = document.querySelector('#list1');
let RIGHTLIST = document.querySelector('#list2');
let BUTTON = document.querySelector('.filterbutton');
let url = 'http://localhost:3000/USERS'
let getData = async (url) => await (await fetch(url)).json();

let clearList = (selector) => selector.innerHTML = "";
let addInList = (name, theComment, listID) => {
    listID.insertAdjacentHTML(`beforeend`, `
        <li class="el">
            <h3 class="name">${name}</h3>
            <p class="comment">${theComment}</p>
        </li>
    `)
}
let slcFn = (comment) => comment.length<20 ? comment : comment.slice(0,19)+"...";

let main = async () => {
    clearList(LEFTLIST);
    clearList(RIGHTLIST);
    let data = await getData(url);
    for (let i = 0; i<data.length; i++){
        addInList(data[i]["name"], data[i]["comment"], LEFTLIST);
        addInList(data[i]["name"], slcFn(data[i]["comment"]), RIGHTLIST);
    }
    console.log(data);
}

BUTTON.addEventListener('click', main);