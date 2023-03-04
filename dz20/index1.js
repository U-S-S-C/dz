const fs = require('fs');

const readStream = fs.createReadStream("text.txt");
const writeStream = fs.createWriteStream("text2.txt");

readStream.on("data", (chunk) => {
    console.log("*");
    console.log(chunk);
});