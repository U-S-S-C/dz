let LIST = document.querySelector('.list');
let getData = async (url) => await (await fetch(url)).json();
let getTitles = async () => {
    let comments = await getdata('https://jsonplaceholder.typicode.com/posts');
    let titles = comments.map(element =>element["title"]).filter(element => element.length<22);
    console.log(titles);
    return titles;
}
getTitles();
