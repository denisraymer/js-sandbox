const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
}
