const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve("/home/cirno/Desktop/the_odin_project/EvGRyder.github.io", 'MyResto'),
    },
    devServer: {
        contentBase: './dist',
    
      },
}