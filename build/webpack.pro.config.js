const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/lib/domResizeListener.js',
  output: {
    library: 'DomResizeListener',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'domResizeListener.js', // customize the filenames of generated bundle file
    sourceMapFilename: 'domResizeListener.map', // customize the filenames of generated Source Maps
    libraryExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
