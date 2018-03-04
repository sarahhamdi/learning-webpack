const HtmlWebPackPlugin = require('html-webpack-plugin');



module.exports = {
  module: {
    // this an array of loaders we are using in our project
    rules: [
      { 
        // capture all js files
        test: /\.js$/,
        // ignore node_modules folder/files
        exclude: /node_modules/,
        // use this specific loader
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    // convention is to instantiate it with the "new" keyword
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}