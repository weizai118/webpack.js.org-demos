const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html'],
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
    }),
    new WorkboxPlugin({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
