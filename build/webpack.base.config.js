module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  }
}
