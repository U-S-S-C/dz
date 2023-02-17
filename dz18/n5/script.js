let BLOCKCSS    = document.querySelector('#blockCSS');
let GETBUTTON   = document.querySelector('#getBlocks');
let SENDBUTTON  = document.querySelector('#addBlock');
let SCREEN      = document.querySelector('#screen');
let URL         = 'http://localhost:3000/BLOCKS';

let getData = async (url) => await (await fetch(url)).json();

let clearList = (selector) => selector.innerHTML = "";

class basedBlock {
    data;
    x;
    y;
    
    constructor(style){
        this.data = style;
        this.x = Math.floor(Math.random() * (document.documentElement.clientWidth-400));
        this.y = Math.floor(Math.random() * (document.documentElement.clientHeight-500));
    }
    addToScreen = (screenSelector) => {
        screenSelector.insertAdjacentHTML(`beforeend`, `
            <div style="position:relative;${this.data} left:${this.x}px; top:${this.y}px;"></div>
        `)
    }
}

let getBlocks = async () => {
    clearList(SCREEN);
    let data = await getData(URL);
    for (let i = 0; i<data.length; i++){
        let block = new basedBlock(data[i]["style"]);
        block.addToScreen(SCREEN);
        console.log(data[i]);
    };
}

let readBlock = () => {
    return {
        "style": BLOCKCSS.value
    };
}

let addBlock = async () => {
    const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(readBlock()),
        headers: {
            'Content-type':'application/json; charset=UTF-8'
        },
    })
    return res.json();
}

GETBUTTON.addEventListener('click', getBlocks);
SENDBUTTON.addEventListener('click', addBlock);