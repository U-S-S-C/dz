import fs, { writeFile } from "fs"


const deleteFiles = () => {
    fs.unlink("index.html", (error) => {
        fs.unlink("style/style.css", (error) => {
            fs.rmdir("styles",(error) => {})
        })
    })
}

const createCSSFile = () => {

    fs.mkdir("style", (error) => {
        const css = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;
        fs.writeFile("style/style.css", css, (error) => {
            deleteFiles();
        })
    })

}

const createHTMLfile = () => {
    const index = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    `
    fs.writeFile("index.html", index, (error) => {
        createCSSFile()
    })
}

const createIndexFile = () => {
    const script = `
    import lodash from "lodash"
    let array = [1,2,3,6,2,7];

    let result1 = lodash.chunk(array, 3);
    let result2 = lodash.reverse(array);
    console.log(result1 + "and" + result2);
    `
    fs.writeFile("script.js", script, (error) => {})
}

createHTMLfile();
createIndexFile();