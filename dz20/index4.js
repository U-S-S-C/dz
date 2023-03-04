const fs = require('fs');
const zlib = require('zlib');

const decompress = () => {
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream('bigIndex.html.gz');
    const output = fs.createWriteStream('bigIndexDecompressed.html');
    input.pipe(unzip).pipe(output);
}

decompress();