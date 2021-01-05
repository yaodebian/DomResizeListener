const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/view/index.js'
  },
  output: {
    library: 'DomResizeListener',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js', // customize the filenames of generated bundle file
    sourceMapFilename: '[name].map', // customize the filenames of generated Source Maps
    libraryExport: 'default'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/view/index.html'
    })
  ]
}
