const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('bigIndex.html')
    const output = fs.createWriteStream('bigIndex.html.gz')
    input.pipe(gzip).pipe(output)
}

compress()