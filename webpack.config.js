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
  }
}