const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ]
};