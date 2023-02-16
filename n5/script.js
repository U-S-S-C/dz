let BLOCKCSS    = document.querySelector('#blockCSS');
let GETBUTTON   = document.querySelector('#getBlocks');
let SENDBUTTON  = document.querySelector('#addBlock');
let SCREEN      = document.querySelector('#screen');
let URL         = 'http://localhost:3000/USERS';

let getData = async (url) => await (await fetch(url)).json();

let clearList = (selector) => selector.innerHTML = "";

class basedBlock {
    constructor(style){
        let blockSelector ='';
    }
    addToScreen(screenSelector){

    }
}

// let addInList = (user, listSelector) => {
//     listSelector.insertAdjacentHTML(`beforeend`, `
//
//     `)
// }

let getBlocks = async () => {
    clearList(SCREEN);
    let data = await getData(URL);
    for (let i = 0; i<data.length; i++)
        addInList(data[i], SCREEN);
}

let readUser = () => {
    return {
        "id": ID.value,
        "name": NAME.value,
        "age": AGE.value,
        "sex": SEX.value
    };
}

let addUser = async () => {
    const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(readUser()),
        headers: {
            'Content-type':'application/json; charset=UTF-8'
        },
    })
    return res.json();
}

GETBUTTON.addEventListener('click', getUsers);
SENDBUTTON.addEventListener('click', addUser);