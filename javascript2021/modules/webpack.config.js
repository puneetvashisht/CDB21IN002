const path = require('path');

module.exports = {
  entry: './result.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};