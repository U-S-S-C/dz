const fs = require('fs');

const readStream = fs.createReadStream("text.txt");
const writeStream = fs.createWriteStream("text2.txt");

readStream.on("data", (chunk) => {
    let counter = 1;
    writeStream.write('part n' + counter);
    writeStream.write(chunk);
    counter ++;
});