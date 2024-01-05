var path = require('path');

module.exports = {
  entry: './js-modules/webpack-test/index.js',    
  output: {
    path: path.resolve(__dirname, './js-modules/webpack-test/dist/'),
    filename: 'bundle.js'
  }
}