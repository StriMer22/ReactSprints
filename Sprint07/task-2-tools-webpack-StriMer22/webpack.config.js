const pathDir = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: pathDir.resolve(__dirname, './pub'),
        filename: 'build.js'
    }
}