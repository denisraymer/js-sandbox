const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    library: 'main'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: 'source-map'
}
