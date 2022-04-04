const webpack = require('webpack');

const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    library: 'main'
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: (NODE_ENV === 'source-map') && 'source-map',
  // Команда для запуска, через NODE_ENV webpack watch --mode development
  plugins: [
    // new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG'])
    new webpack.DefinePlugin({
      // NODE_ENV: JSON.stringify(NODE_ENV),
      // 'USER': JSON.stringify('USER NAME')
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.USER': JSON.stringify('USER NAME')
    })
  ]
}
